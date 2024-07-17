---
sidebar_position: 2
---

import inst from '/img/instWindow.png';
import instL from '/img/instL.png';
import instI from '/img/instrumentsStructure.png';


# Instruments

### Understanding Instruments

TWM locally stores instruments in its own database. Users need to combine these instruments into their custom instrument lists however before that, these instruments need to be downlaoded from their respective providers. Below is an illustration of how it works.


<img src={instI} alt="Data Series Window" style={{width: 450}} />

The above process has 2 steps.
- Step 1 connect to the required provider and download the desired instrument using the `Instruments` window.
- Step 2 add the downloaded instrument to the desired custom instrument list using the `Instrument Lists` window.

Upon first connection to any provider TWM will create a default instrument lists supplied with a number of defalt instruments. Depending on your connection speed please allow up to 30-60 seconds for default instruments to appear in the instrument lists window upon your first connection.

### Loading Instruments

On the right hand side user is able to locate available instruments to be downloaded from the provider **to** the local TWM database. On the left hand side the user is able to locate and review instruments that have been already loaded **from** provider server. 

**User is able to:**
- add instrument from provider server to local TWM symbols database one by one using `Add` button on the bottom center right
- do same as explained above but in bulk using `Add All` button
- remove or remove all instruments from local database using `Remove` and `Remove All` buttons on the left bottom hand side
- double click any instrument to see specific data that is stored with the instrument
- filter instrument type by `Future` or `Spot`
- choose the required provider from the dropdown menu


<img src={inst} alt="Data Series Window" style={{width: 800}} />

### Instrument Lists

The instrument lists window is used to create custom user set up instrument lists. TWM comes with _Default_ instrument list that cannot be deleted. The window is subdivided into 3 sections.

**Blue** is used to show created instrument lists. Use the `Add` `Remove` buttons at the bottom below the section to add and remove custom instrument lists. When creating an instrument list it has to be assigned to a specific connection, cross connection instrument lists are not supported.

**Red**  is used to show the instruments that have been added to a specificly selected list from the local instruments database. Use the `Remove` button below the section to remove the instument from the selected list.

**Yellow**  demonstrates all instruments that are available locally and can be added to any list from the blue section. Use the `Add` button below the section to add instument to the selected list.

<img src={instL} alt="Data Series Window" style={{width: 800}} />