---
sidebar_position: 1
---

# Market Data

Internet connection is required to get **new** market data. If market data has already been downloaded, user is able to perform tests using the stored data which will be sourced from `C:\Users\User\Documents\Twm\DB\HistoricalData\` folder. Historical market data is publicly available at Binance and no specific connection set up is required to get this type of data. TWM is configured by default to be able to get historical market data without the need to set up any additional connections.

### Navigating to Chart

When navigating to a new chart user needs to select the data source for the chart using the data series window.

import ds from '/img/dataSeriesWindow1.png';
import ds2 from '/img/dataSeriesWindow2.png';
import ds3 from '/img/dataSeriesWindow3.png';
import ds4 from '/img/dataSeriesWindow4.png';
import ad from '/img/adminPanelChart.png';
import atools from '/img/adminPanelChartTools.png';
import data from '/img/optionsData1.png';

<img src={ad} alt="Data Series Window" style={{width: 800}} />

### Data Series Window

The data series window allows users to select the data source for the chart they are about to open. The data series window is a generic window used by TWM to allow user to select the data formats to be sourced from server. 

<img src={ds} alt="Data Series Window" style={{width: 500}} />

### Instrument Selection

The instrument selector allows the user to set the data source. The current version of TWM is preloaded with a default set of Binance USD-M Perpetual contracts. This is the only default instrument list. User is capable to set their own custom instrument lists in the instruments section of TWM. 

User created custom instrument lists will appear below the default one. For more information on how to create user instrument lists please refer to the [instruments section of this manual](instruments).

<img src={ds2} alt="Data Series Window" style={{width: 600}} />

### Data Formats

User is only allowed to load data based on Binance native data formats available in the list.

<img src={ds3} alt="Data Series Window" style={{width: 500}} />

### Data Load Options

User is able to load data in using two available methods.
- Days to Load - based on how many days user wants to load, days will end on todays date
- Custom Range - from start to end dates

<img src={ds4} alt="Data Series Window" style={{width: 500}} />

### Loading Algorithm

The first time user loads data, TWM will attempt to download maximum available period from the server no matter what the asked period the user sets. Subsequent calls for data wıll result in partal dowloads of only the missing data. Please allow longer data download time especiially on small data formats such as 1min. 

### Data Storage

The data is be stored in individual format and istrument folders in CSV files in the following directory `C:\Users\User\Documents\Twm\DB\HistoricalData\` folder. 

TWM also stores meta for the loaded data which is available to be viewed using the UI in `Tools -> Options -> Historical Data` section.

<img src={atools} alt="Data Series Window" style={{width: 800}} />

User is able to see available data instruments, periods as well as manage data with respect to following actions:
- add - will open the mentioned above data series dialog and allow user to download data
- remove - will erase data from disk and clear data meta from database
- remove all - will erase all data from root folder and clear all meta

Please use mouse rigth click on root folder name in file tree to view the context menu with `add/remove` options.

<img src={data} alt="Data Series Window" style={{width: 800}} />

### Other Data Calls

Additionaly data can be sourced by TWM when using specific sections such as validator and optimizer. Please adress these sections for more information on when and under what circumstances data will be sourced from server whilst using these sections of TWM.
