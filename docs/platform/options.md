---
sidebar_position: 8
---

# Options


Platform options can be found under `Admin Panel -> Tools -> Options`

import atools from '/img/adminPanelChartTools.png';
import display from '/img/optionsDisplay.png';
import email from '/img/emailSettings.png';
import exec from '/img/executionsDisplay.png';

<img src={atools} alt="Data Series Window" style={{width: 800}} />

### Display Options

The platform comes with 3 possible ways to set chart display settings. Light, dark (cannot be changed) and custom where the user can change colors. When setting the color options for a chart, it is required to re-open the chart, active charts will not be affected if display settings are changed.

<img src={display} alt="Data Series Window" style={{width: 600}} />
<img src={exec} alt="Data Series Window" style={{width: 600}} />

### Preferences

- Timezone - all data is stored in UTC format and will be adjusted on chart according to the timezone you select here.
- Log into file - if this is checked, the log will also be recorded to a file inside C:\Users\User\Documents\Twm\Log

### Email

Use these settings to set up the email server to be used from within the script of your indicators and strategies.

<img src={email} alt="Data Series Window" style={{width: 800}} />

Press send in after you are done to send a test email to tester@email.com


