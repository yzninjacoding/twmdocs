---
sidebar_position: 2
---

import inst from '/img/instruments.png';
import instL from '/img/instrumentLists.png';


# Instruments

TWM comes out the box preloaded with a default instrument list with a few famous Binance USD-M perpetual future contracts. In order to create custom instrument lists the user needs to navigate from admin panel to `Tools -> Instrument Lists`. 

However, prior that user needs to make sure that the required instruments are loaded from Binance server to be stored locally. In order to do that user needs to navigate from admin panel to `Tools -> Instruments`.

### Loading Instruments

On the right hand side user is able to locate available instruments to be downloaded from Binance server. On the left hand side the user is able to locate and review instruments that have been already loaded from Binance server. 

**User is able to:**
- add instrument from Binance server to local TWM symbols database one by one using `Add` button on the bottom center right
- do same as explained above but in bulk using `Add All` button
- remove or remove all instruments from local database using `Remove` and `Remove All` buttons on the left bottom hand side
- double click any instrument to see specific data that is stored with the instrument


<img src={inst} alt="Data Series Window" style={{width: 800}} />

### Instrument Lists

The instrument lists window is used to create custom user set up instrument lists. TWM comes with _Default_ instrument list that cannot be deleted. The window is subdivided into 3 sections.

**Section 1** (red) is used to show created instrument lists. Use the `Add` `Remove` buttons at the bottom below the section to add and remove custom instrument lists.

**Section 2** (green) is used to show the instruments that have been added to a specificly selected list from the global instruments database. Use the `Remove` button below the section to remove the instument from the selected list.

**Section 3** (blue) demonstrates all instruments that are available locally and can be added to any list from section 1. Use the `Add` button below the section to add instument to the selected list.

<img src={instL} alt="Data Series Window" style={{width: 800}} />