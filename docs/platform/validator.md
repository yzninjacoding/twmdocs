---
sidebar_position: 6
---

# Validator

import validatorEmpty from '/img/validatorEmpty.png';
import validatorInst from '/img/validatorInst.png';
import valTest from '/img/valTest.png';
import executeOnList from '/img/executeOnList.png';
import enableStratVal from '/img/enableStratVal.png';
import centerSectionVal from '/img/centerSectionVal.png';
import templates from '/img/tempaltes.png';

The validator section allows users to backtest strategies individually and also combine them in different portfolios. To access the validator please proceed to `Admin Panel -> New -> Validator`. Several instances of validator can be open at the same time.

<img src={validatorEmpty} alt="TWM Manual" style={{width: 600}} />

When validator is accessed it is empty to begin with. The left hand side is used to create lists of instruments where strategies should execute and the right hand side is used to control each strategy configuration. The performance is reviewed within the middle window. Please use the side arrows to `show/hide` the side windows.

### Creating an Instrument List

To create an instrument list right click the left hand side area to access the context menu.

<img src={validatorInst} alt="TWM Manual" style={{width: 600}} />

After you have provided a name for your new list that the tests will be performed on and it has been created please add the first instrument to this list using the same context menu and the data series pop up that will come up after. For more information on data series window please refer to the market data section of this documentation [here](market-data/#data-series-window)

<img src={valTest} alt="TWM Manual" style={{width: 600}} />

You can add any instruments, any timeframes in any way you like. You are also allowed to create multiple lists. If you are connected to data your data will download instantly once you add an instrument. If you are not connected the downloaded data will be used. If you need to `edit` the added instrument please proceed to the `edit` command in the same context menu.

### Running Strategies

You can enable a strategy on the list or on an instrument. You can execute the list with one strategy or with many different strategies at the same time. You can also execute a single strategy on a single list. First select the instrument or the list that you want to execute the strategy on. Then click on the three dots on the right hand side and choose the strategy. Configure the strategy and click the run button. 

If the list was selected at the point when you click run the execution will take place on the whole list and you will see the whole list icons change from red cross to green check. If left hand side selection was placed on an individual symbol then execution will only take place on that symbol and you will only see that particular cross icon change state.

**If you change any strategy parameters after you have executed it, you will see the icon on the left change from check to cross signalling the user that the performance that he is looking at right now does not match the strategy configuration any more.**

<img src={enableStratVal} alt="TWM Manual" style={{width: 600}} />

- To run a strategy on a list enable the strategy on the root of the list (list name) and check the box.
- To run a straetgy on an individual instrument select the instrument in the list and enable the strategy for that particular instrument.
- Clickicking run whilst root is selected will execute the whole list.
- Clicking run whilst particular symbol is selected will only execute the strategyt for that particular symbol.
- Enabling a strategy on the root and checking the box next to the root name will execute only that particular strategy on the whole list.
- If the checkbox is disabled the list will execute all strategies that are enabled for each particular instrument.

<img src={executeOnList} alt="TWM Manual" style={{width: 600}} />

For strategy settings that user is able to configure on the right hand side please refer to the [strategies](strategies#strategies-dialog-box) section of this documentation.


### Performance

The center section of the validator will provide the standard operational performance evaluation capabilities including:

- Analysis, in its own with Equity and Drawdown sections. Please note that in root mode when viewing overall portfolio performance whilst root of instrument list is selected, two more sections will be added here providing a multi equity/drawdown view. Please address these options using the (compare) tage in the drop down menu.
- Chart with full charting capabilities
- Order with all orders that the strategy had during exeution.
- Trades with all straetgy trade information.
- Summary with performance summary.

**User is able to click through individual strategy performance and/or view total instrument list performance by clicking on the instrument list root.**

<img src={centerSectionVal} alt="TWM Manual" style={{width: 600}} />

### Instrument Templates

You can also save the created lists into templates that will save you some time in the future. You can export the saved templates and import them on another machine or store them. Use the sync checkbox to always enable the templates as of the current date. 

For example if you saved a template which had 150 days to load settings set in the data series window 1 month ago you have to options:
- load this template today and the dates loaded will remain the same as 1 month ago ie. start date 150 days from 1 month ago and end date 1 mont ago.
- check the sync checkbox and the dates will sync up to current day meaning the instruments will be loaded 150 days back as of today

<img src={templates} alt="TWM Manual" style={{width: 400}} />

