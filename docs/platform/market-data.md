---
sidebar_position: 3
---

# Market Data

Internet connection is required to get **new** market data. If market data has already been downloaded, user is able to perform tests using the stored market data which will be sourced from `C:\Users\User\Documents\Twm\DB\HistoricalData\` folder. Each provider is assigned to a folder and if the provider has a testnet and mainet data it will sorted inside the folder in their respective paths as well as spot and instrument types.

In order to download new market data a connection has to be set up to the appropriate provider. Please address the connection section on more information about setting up [connections](connections).

### Data Series Window

When navigating to a new chart user needs to select the data source for the chart using the data series window.

import ds from '/img/newDS.png';
import ds2 from '/img/dataSeriesWindow2.png';
import ds3 from '/img/dataSeriesWindow3.png';
import ds4 from '/img/dataSeriesWindow4.png';
import ad from '/img/adminPanelChart.png';
import atools from '/img/adminPanelChartTools.png';
import data from '/img/dataOptions.png';

<img src={ad} alt="Data Series Window" style={{width: 800}} />

The data series window allows users to select the data source for the chart they are about to open. The data series window is a generic window used by TWM to allow user to select the data formats to be sourced from server. Please note that data formats can differ based on the provider. 

<img src={ds} alt="Data Series Window" style={{width: 500}} />

The instrument selector allows the user to set the instrument symbol from the user custom instrument lists or from the default lists provided by TWM.  

User created custom instrument lists will appear below the default one. For more information on how to create user instrument lists please refer to the [instruments section of this manual](instruments).

### Data Load Options

User is able to load data in using two available methods.
- Days to Load - based on how many days user wants to load, days will end on todays date
- Custom Range - from start to end dates

<img src={ds4} alt="Data Series Window" style={{width: 500}} />

### Loading Algorithm

The first time user loads data, TWM will attempt to download maximum available period from the server no matter what the asked period the user sets. Please make sure you have a good connection at this point as it might take some time to load. Subsequent calls for data wıll result in partal dowloads of only the missing data. Please allow longer data download time especiially on small data formats such as 1min. 

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

### Important Information

- Please note that data can take a long time to load. Especially first time you call for it and on a slow internet connection. It can take up to 10 min to load 1 min data for an instrument. You will however see a progress label changing on the pop up announcing how many days have been already downloaded. Please be patient and do not interupt the process. If you abort, no data will be saved.
- When something like the above mentioned takes place, ie. data gets loaded for 1 or more minutes you will see slight discrepancies between the first live bar and the last historical bar because whilst the data was loading the newly formed bars were not getting formed. This can be easily fixed by closing the chart and loading data again.
