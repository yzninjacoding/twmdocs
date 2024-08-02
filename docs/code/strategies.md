---
sidebar_position: 3
---

# Strategies

import limitEntryExample from '/img/limitEntryExample.png';
import stopMarket1 from '/img/stopMarket1.png';
import stopMarket2 from '/img/stopMarket2.png';

### Initialization

Each strategy has to be created with a **unique GUID**. Inside Visual Studio you can go to `Tools -> Create GUID` to generate a unique GUID for your strategy.

```js
private const string SystemVersion = " V1.0";
private const string StrategyName = "MA Crossover";
private const string StrategyGuid = "C8BFB4D3-2C74-469F-8A25-397BFE3DD574";

public override void OnStateChanged()
{
    if (State == State.SetDefaults)
    {
        Name = StrategyName + SystemVersion;
        Guid = new Guid(StrategyGuid);
        Version = SystemVersion;
    }
}
```

### Orders

To analyze potential fills during historical execution for `stop-market`, `limit`, and `stop-limit` orders TWM uses an internal BeforeBarUpdate event. The OnBarUpdate event occurs after the BeforeBarUpdate for the same bar index.

```OrderAction.Buy``` - will open a long position, should be used on initial position opening and scaling in

```OrderAction.Sell``` - will close a long position, , should be used for closing the position or scaling out

```OrderAction.SellShort``` - will open a short position, should be used on initial position opening and scaling in

```OrderAction.BuyToCover``` - will close a short position, should be used for closing the position or scaling out


For live market `OrderAction.Buy` and `OrderAction.BuyToCover` will always buy and `OrderAction.SellShort` and `OrderAction.BuyToCover` will always sell.

### Market Orders

Submitted market orders will get filled immidiatly. During historical execution TWM will use the next bar open value to fill the order.

```js
private void PlaceMarketEntryOrder(bool isLong)
{
    
    if (isLong)
    {
        _entryOrder = SubmitOrder(0, OrderAction.Buy, OrderType.Market, PosSize, 0, 0,0, "", EnterLongName);

    }
    if (!isLong)
    {
        _entryOrder = SubmitOrder(0, OrderAction.SellShort, OrderType.Market, PosSize, 0, 0,0, "", EnterShortName);

    }

}
```

### Limit Orders

For limit orders the following Ois true during historical execution.

- If there is NO position and order action is `Buy` and low of the upcoming bar is equal or below the set price OR order action is `SellShort` and high of the upcoming bar is equal or higher to the set limit price you will get a fill with the set limit price, your order state will be marked as filled, a new position will be created and a `OnOrderUpdate` event will occur. In case if there was a gap you will get a fill using the rule `at price or better` which will use the bar open.

- In case stop and profit orders have been set during the `OnOrderUpdate` the StrategyBase class will perform a check for stop and limit orders fills within the same bar.

```js
private void PlaceLimitEntryOrder(bool isLong, double price)
{
    
    if (isLong)
    {
        _entryOrder = SubmitOrder(0, OrderAction.Buy, OrderType.Limit, PosSize,price, 0,0, "", EnterLongName);

    }
    if (!isLong)
    {
        _entryOrder = SubmitOrder(0, OrderAction.SellShort, OrderType.Limit, PosSize, price, 0,0, "", EnterShortName);

    }

}
```

<img src={limitEntryExample} alt="Data Series Window" style={{width: 700}} />

```
 PlaceLimitEntryOrder(false,  Low[0] - TickSize*50);
 ```

The above example clearly demonstrates where the historical order short fill has been filled with bar open price although its limit order price has been set 50 ticks below the signal bar low.

### Stop-Market Orders

To understand stop market orders we need to understand the concept of trigger price. Basicaly a stop market order will execute a market order when the market gets to a trigger price. It does not matter where the market is at the moment you place this order. 

- If the market is **above** trigger price, market order will execute when the market goes **below** trigger price.
- If the market is **below** trigger price, market order will execute when the market goes **above** trigger price.
- If the market is **equals** trigger price, market order will executed **immediately**.

It does not matter which order action we are planning on taking. The chosen action will execute once the conditions are met.

```js
private EnterMarket()
{
    if (_enterLong)
        PlaceStopMarketEntryOrder(true, High[0] + TickSize*3);

    if (_enterShort)
        PlaceStopMarketEntryOrder(false,  Low[0] - TickSize*3);
}

private void PlaceStopMarketEntryOrder(bool isLong, double price)
{
    
    if (isLong)
    {
        _entryOrder = SubmitOrder(0, OrderAction.Buy, OrderType.StopMarket, PosSize,
            0, 0, price, "", EnterLongName);

    }
    if (!isLong)
    {
        _entryOrder = SubmitOrder(0, OrderAction.SellShort, OrderType.StopMarket, PosSize,
            0, 0, price, "", EnterShortName);

    }

}
```

In the example we see stop market sell executing a few ticks below the signal bar low. If there would have been a gap here the open price of the gap bar would have been used. However this is only because the market was above the trigger price when the order was placed.

<img src={stopMarket1} alt="Data Series Window" style={{width: 700}} />

The below example however, illustrates a completely different approach where we have deliberately set a stop market sell order way higher than then current market. In this case, when the market did reach the trigger price, a market order was executed and filled at trigger price historically. In real market please expect appropriate slippage in such cases. Trigger price does not guarantee price, it guarantees execution of a merket order if the trigger price is reached.

```js
if (_enterShort)
    PlaceStopMarketEntryOrder(false,  High[0] + TickSize*300);
```
<img src={stopMarket2} alt="Data Series Window" style={{width: 600}} />

On a historical market stop market orders behave differently when a position is already open. In this case they will act like a stop loss. If the position is open and a stop market order is placed main posints to consider are:

- These points are TRUE only for the historical execution
- You cannot scale in using this type of order
- The order can be used for exiting the position only

### Stop-Limit Orders

Stop limit order will place a limit order at limit price once the market has reached the trigger price. The limit order itself will work exactly as a standard limit order. Historical execution of stop limit orders is not currently supported. You can use stop limit orders only for live execution and placement on the exchange.

```js
private void PlaceStopLimitOrder(bool isLong, double price, double triggerPrice)
{
    
    if (isLong)
    {
        _entryOrder = SubmitOrder(0, OrderAction.Buy, OrderType.StopLimit, PosSize,
            price, 0, triggerPrice, "", EnterLongName);

    }
    if (!isLong)
    {
        _entryOrder = SubmitOrder(0, OrderAction.SellShort, OrderType.StopLimit, PosSize,
            price, 0, triggerPrice, "", EnterShortName);

    }

}
```

### Positions

You can check existing strategy positions using the `LastPosition` command or by looking through the `Positions` collection. Last position will return the last position in the Positions collection. If a position exists and a new trade is made, it will add onto the existing position. Each `Position` consists of `Trades` that are stored inside it. In order to consider a position closed, all trades contained within a Position object have to be closed. If you close more trades than a Positoin object stores crating an overfill, the scipt will open a new Position to the other side.

```js
if (LastPosition.MarketPosition == MarketPosition.Flat)
    return;

if (LastPosition.MarketPosition == MarketPosition.Long)
    return;

if (LastPosition.MarketPosition == MarketPosition.Short)
    return;

```

