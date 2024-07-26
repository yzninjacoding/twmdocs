---
sidebar_position: 6
---

# Chart Trader

TWM is supplied with on chart order placement user experienc tool that can be access from within the chart toolbar. Use the toolbar button to slide open the chart trader window that will appear on the right hand side of the chart. 

import ct from '/img/chartTrader.png';
import ct2 from '/img/chartTraderOrder.png';
import ct3 from '/img/chartTraderPosition.png';
import ass from '/img/assetsTab.png';
import pos from '/img/positionsTab.png';
import orders from '/img/ordersTab.png';

<img src={ct} alt="Data Series Window" style={{width: 700}} />

### Orders

The chart trader basic functionallity allows user to place 4 types of orders.

- **Market** - executed using a button, execute instantly at available price.
- **Limit** - are placed below the market for buy and above the market for sell, will execute at specific price.
- **Stop Market** - placed above market for buy and below market for sell, market order will execute at set price.
- **Stop Limit** - placed above market for buy and below market for sell, limit order will execute at set price.

To place an order right clich the price pane. Depending on where you have clicked a selection of appropriate orders will be offered. Please note that the click is price sensitive so the order will be placed at the price where you have clicked. 

Once the order is placed it will appear on the chart. You can grab and drag the order as well as change order quantity.
Please note that any orders that you have active, will dissapear but ***not*** cancel if the chart trader is in the hidden state.

<img src={ct2} alt="Data Series Window" style={{width: 700}} />

The placed order will also appear in the orders tab of the admin panel.

<img src={orders} alt="Data Series Window" style={{width: 700}} />

The order will be placed with respect to the assigned `Size` parameter which is in base quantity. Please be aware of min/max lot sizes for different instruments and their respective notional values. You can read more about min lot size and notional [here](instruments#min-lot-size)

To change the order quantity click on the end of the line where you see the current quantity, alter the value and press enter.
To cancel the order press on the cross located on the order line near the chart Y-Axis. 


### Positions & Assets

When trading futures TW opens positions that can be observed on the chart as a line object placed at the position average entry price. The positions are sourced directly from the exchanges. If the position is scaled in or out you can see the average price adjust to a new value. You may also use the `Close` button to close the position completely at any point.

<img src={ct3} alt="Data Series Window" style={{width: 700}} />

You will not find the `Close` button or `Position` marker on the spot side of TWM. When you buy a spot pair you will see its respective balance change in the `Assets` tab of the `Admin` panel. 

<img src={ass} alt="Data Series Window" style={{width: 700}} />

On the other hand when you open a position on the `Futures` side you will see a respective position appear in the `Positions` tab of the `Admin` panel. `L` and `S` marked after the number represent long and short positions.

<img src={pos} alt="Data Series Window" style={{width: 700}} />

All tabs allow filtering by connection or instrument type.

### Overview

- Place Order - right click on chart at desired price or use buttons for market orders
- Change Order Price - drag and drop the order line
- Change Order Size - click on the order qnt at the end of line, change size and press enter
- Cancel Order - press the cross near the Y-Axis
- Futures - have positions reflected on chart and in positions tab
- Spots - do not have positions, have assets that are reflected in the assets tab



