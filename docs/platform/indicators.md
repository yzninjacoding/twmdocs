---
sidebar_position: 4
---

# Indicators

import indicatorInput from '/img/indicatorInput.png';

TWM comes with over 30 default indicators found in the Default folder. You can enable indicator on chart at anytime by either using the toolbar button or by right clicking and choosing `Indicators` from the drop down context menu. Indicators are not available for manual initialization in Validator and Optimizer section.

### Indicator Input

By default indicators designed to use the close price as their input. However you acn manually assign a different input by clicking on the dots near the input series selector. You can assign any price series as well as any other indicator. Please make sure the indicator is designed to accomodate for this and the Input syntax is used inside it. Please see [this section](../code/indicators.md#input) for more info.

<img src={indicatorInput} alt="Indicator Input" style={{width: 700}} />



