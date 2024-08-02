---
sidebar_position: 1
---

# Core

import comissions from '/img/comissions.png';

### Custom Project

TWM allows users to write their own extendable modules using C# language. In this section you will find tutorials and help on main API. TWN is installed together with a `Custom` project file where user is capabale of writing code. You can use any IDE of your choice. In our documentation we will be demonstrating everyhting with the help of Visual Studio Community Edition wich is a free IDE that can be downloaded from [here](https://visualstudio.microsoft.com/downloads/).

Your intial installation will place the TWMCustom project here `C:\Users\User\Documents\Twm\bin\Custom`. In order to start working with the custom project locate this folder and open the project or solution file `Twm.Custom.csproj` or `Twm.Custom.sln`

You can compile the custom project from within the IDE or by running any compilation commands from within TWM. You can learn more about compiling and debuging [here](../platform/compilation.md).

### Debuging

In order to Debug your project using an external IDE please read this [section](../platform/compilation.md#debuging) You may alternatively debug using the Debug window of TWM found in Admin panel `New -> Debug`. Use the below command to print to Debug window.

```
Print("Debug your code using this command");
```

### Parameters

All parameters should be prefixed with a `[TwmProperty]` tag. In case if this is an Indicator parameter it will allow it to be passed to TWM code auto generator upon compilation and become accessable inside the strategy code. In the case with the Strategy it will allow this parameter to become available inside the `Optimizer`. 

The parameter defaults should be assigned inside the OnStateChanged event

```js
[TwmProperty]
[Display(Name = "Period", GroupName = Parameters, Order = 2)]
public int Period { get; set; }
```

In order to be able to control category order `[Category("Category Name")]` tag has to be used. Native categories such as Setup and DataSeries can also be ordered. The category order has to be set above the class name.

```js
[CategoryOrder(Setup, 0)]
[CategoryOrder(DataSeries, 1)]
[CategoryOrder(GlobalSettings, 2)]
[CategoryOrder(EntrySettings, 6)]
[CategoryOrder(Filters, 7)]
[CategoryOrder(ExitSettings, 8)]
public class DefaultMACrossOver:Strategy
{
    
}
```

### Execution

Whenever a strategy or indicator changes state the `OnStateChanged` event takes place. We are able to get the current new state of the object and work with it. Some global parameters such as Name and Version should be set here.

- **SetDefaults** - mainly called whenever a user is working with the overall UI such as indicators or strategies dialog box where we see all indicators and strategies. This state should be used to set the defaults that we see when we enable such.
- **Configured** - this is a one time call when user enables the strategy/indicator. Called when user clicks enable or apply.

```js
public override void OnStateChanged()
{
    if (State == State.SetDefaults)
    {
        Name = "Indicator Name";
        Version = "1.0";

    }
    else if (State == State.Configured)
    {
        
    }
}
```

All historical and live execution of TWM strategies and indicators occurs `OnBarClose`. Please use the demonstrated method below to create your code logic inside these overrides. To adress current bar values please use the zero index as below. Previous bar index would be 1 in this case etc. Please note that if you address a bar that does not exist on the chart you will get an index out of range exception. For instance, if there are only 5 bars on the chart and you try and look back at Close[6] you will get an exception.

```js
public override void OnBarUpdate()
{
    var close = Close[0];
    var open = Open[0];
    var high = High[0];
    var low = Low[0];
    var time = DateTime[0];
}

```

During **live** execution of TWM strategies and indicators you can also use `OnTickUpdate` to execute your business on a tick by tick basis. You can address the live candle values appropriatly.

```js
public override void OnTickUpdate(ICandle candle, ICandle tick)
{
    var close = candle.C;
    var high = candle.H;
    var low = candle.L;
    var open = candle.O;
    var time = candle.t;

    Print("LIVE CANDLE. Close: " + close + " High:  "  +high + 
    " Low: " + low + " Open: " + open + " Time: " + time);

}
```

`OnOrderUpdate` event will occur every time there is any change inside the strategy order. Use this to control your orders during historical strategy execution.

```js
public override void OnOrderUpdate(Order order)
{
    Print("On order update: " + order.Name + 
         " Qnt: " + order.Quantity + 
         " Price: " + order.FillPrice+ 
         " Guid: "+ order.Guid + 
         " State: "+ order.OrderState);

    if (State == State.Historical)
        ManageOrders(order);
}
```

`OnExecutionUpdate` will occur only when something occurs to the order during `live` exectuion ie. on the connection provider side. The OnExecutionUpdate event executes when we get a callback from the exchange only, it will not execute during historical strategy execution. Please make sure you use OnOrderUpdate during historical execution.

```js
public override void OnExecutionUpdate(Order order)
{
    if (State == State.RealTime)
        ManageOrders(order);
}
```

### Adding Data Series

It is possible to add an additional data series to indicator or strategy and work with that series. SymbolName string is optional, if nothing is passed the data series will be enabled on the same instrument.

Symbol name should be specified exactly as it is listed in the instrument list. Please also specify the type as `SPOT` or `FUTURE`. The available connection short names are `BybitMainnet` and/or `BinanceMainnet`. You can add as many data serieses as you like.

```js
AddDataSeries(DataSeriesType.Hour, 1,"DOGEUSDT", "FUTURE","BybitMainnet");
```

To address data contained with the added data seriese pelase use the below syntax.

```js
public override void OnBarUpdate()
{
    Print("Close:" + Closes[1][0] + " Open: " + Opens[1][0] + " High: " + Highs[1][0] + " Low: "+ Lows[1][0] + " Time: " + DateTimes[1][0]);
}
```

If you would like to submit a `LIVE` order against an added data series please use the selected bars in progress parameter available inside each order method. In the case below the order will be submitted to the first added extra series.

```js
_entryOrder = SubmitOrder(1, OrderAction.Buy, OrderType.Limit, PosSize,    price, 0,0, "", EnterLongName);
```


### Comissions

Comissions is an extendable TWM module. There are several pre-configured set ups available. The comissions are calculated at the end of each trade and we have a chance to interact with the trade data in order to make extra calculations. The returned comissions value will be deducted from the total pnl of the trade. Below is an example of most popular % based comission calculation. 

```js
public override double GetCommission(Trade trade)
{
    var entry = (trade.ExitQuantity * trade.EntryPrice)*Commission/100;
    var exit = (trade.ExitQuantity * trade.ExitPrice)*Commission/100;


    return entry + exit;
}
```

TWM is already preset with spot and futures comissions presets for taker and maker options.

<img src={comissions} alt="comissions" style={{width: 700}} />


### Optimization Fitness

You can access and code your own optimization fitness coefficient. Please look for examples in the optimization fitness folder. The optimzer will always try and find the max `Value` parameter that you pass from here. 

```js
public class MaxProfitFactor : OptimizationFitness
{
    private const string OptimizationFitnessName = "Max Profit Factor";

    public override void OnCalculatePerformanceValue(StrategyBase strategy)
    {
        Value = strategy.SystemPerformance.Summary.GetValue(AnalyticalFeature.ProfitFactor);

    }

    
}
```
