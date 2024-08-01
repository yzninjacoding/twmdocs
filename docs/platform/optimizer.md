---
sidebar_position: 7
---

# Optimizer

import optimizer1 from '/img/optimizer1.png';
import optimizer2 from '/img/optimizer2.png';
import optimizer3 from '/img/optimizer3.png';
import optimizer4 from '/img/optimizer4.png';
import optimizer5 from '/img/optimizer5.png';
import matrix1 from '/img/matrix1.png';
import filters from '/img/filters.png';
import db from '/img/db.png';

TWM is equipped with WFO (walk forward optimizer) module. Inside the module user is able to set `In-Sample` and `Out-Of-Sample` periods in order to test strategy robustness. To access the `Optimizer` proceed to `Admin Panel -> New -> Optimizer`.

### Creating a Test

To start testing you need to right click the left hand side of the optimzer and either open a previously created preset or crete a new test. Give your test a name and proceed.

<img src={optimizer1} alt="optimizer1" style={{width: 600}} />

### In Sample (IS) Out of Sample (OS)

The next step would be to create a testing period. You can add the period manualy using `Add Period` in the same context menu or using a special UI called `Period constructor`. In sample period (IS) is where the strategy optimization will take place, out of sample period (OS) is where the execution with the optimized parameters will take place. This allows us to see whether the parameters we found are optimial, robust and we have not curve fitted our strategy.

You can review some content on in sample out of sample testing concepts explained here.

[Robert Pardo Podcast](https://www.youtube.com/watch?v=YM3c6C-iqDo)

[Robert Pardo Book](https://www.amazon.com/Evaluation-Optimization-Trading-Strategies/dp/0470128011)

Inside the period constructor it is easy to create an IS-OS period and set the required lengths easily by either adjusting their day length or percentage in respect to each other. On the picture below we see a period of 365 days where 30% or 110 days are dedicated to an out of sample period. If the `Last live period` box is checked, the out of sample period will be ignored for the most recent period. 

<img src={optimizer2} alt="optimizer2" style={{width: 600}} />

You can add as many period as you like. The optimization will take place through each period separately. At the end of the process you will see:
- results for each period separately
- combined out of sample results
- out of sample results followed by sim results which is as if you continued running the strategy withouth re-optimizing after the out of sample period length

### Parameters

After you have enabled the periods you should see them appear on the left hand side of the optimizer. The right hand side is dedicated to strategy parameters. You will need to first set the instrument and then set the strategy as demonstrated in the picture. After which you can proceed to selecting which parameters should be optimzed. 

To do so right click the three dots next to where it says parameters. For each parameter you will see a checkbox, min, max and inc setting.

Min - will start optimzation from this value
Max - will end optimization at this value
Inc - will increment by this value
Checkbox - will turn the parameter on/off, in this case in max=min the default value will be used

For example if min is 5, max is 100 and inc is 5 as well then the optimizer will start at 5 and will stop at 100 incrementing by a step of 5 so 5,10,15,20....100. The combination count will also show the amount of combinations that will occur. If there are too many combinations we strongly reccomend using the genetic optimization engine.

<img src={optimizer3} alt="optimizer3" style={{width: 600}} />

### Results

To start the optimzation click `RUN`. After the optimziation has finished you can see combined out of sample results by clicking on the periods root. The vertical red lines represent each OS end time stamp.

<img src={optimizer4} alt="optimizer4" style={{width: 600}} />

By clicking on the matrix tab whilst on the period root you can review specific parameters that were found for each particular period. If you click on the matrix tab for a specific period you will see what specific parameters were used for a specific iteration listed in the best strategies list.

<img src={matrix1} alt="optimizer4" style={{width: 600}} />

The number of best strategies is contolled by the `keep best strategy` parameter. By default it will be 10 and the optimizer will always choose the top one. The list is sorted by the optimization fitness parameter which is an extendable module and can be coded by the user. You can use some popular preset native ones such as profit factor, net profit, sharpe, etc. Use the `Optimize on` setting on the right hand side to set the optimization fitness parameter. To read more about fitness parameters please see [here](../code/core.md#optimization-fitness)

You can also see extra setting by right clikcing on the best strategies list.
- Preset - save will save the particular strategy preset to be used on chart, in validator or in optimizer.
- Settings - allows you to turn best strategies columns on/off
- Open in validator - will open a specific IS or IS+OS period in validator with the set strategy
- View parameter list - will show the used parameters in a table

<img src={optimizer5} alt="optimizer5" style={{width: 600}} />

If you change the chosen best strategy in the top list the OS will reexecute so you can see an updated combined out of sample result. You can toggle through the tabs to see different results. Main tabs are:

- IS for in sample results
- OS for in sample results
- Total will show IS+OS results
- Sim will show results for a period that happend after OS ended, if Sim is enabled then Total will show IS+OS+Sim results. (if Sim is disable the tab will not show)

To enable Sim please go to `Admin panel -> Tools -> Options -> Calculations -> Calculate Simulation`.

Some results might have been excluded based on some global filtering set during the optimzation. The two global filters available are:
- Min trades IS wich sets the minumum number of trades that has to occur in the in sample period in order for it to be considered
- Draw Down Level - maximum draw down level during the in sample period

If the execution is filtered you will see the count for the filtered executions `Info` tab on top.

<img src={filters} alt="filters" style={{width: 600}} />

### Optimizer Types

The two main types available are:
- Default - which will an exhaustive optimzier that will go through every single combination that you have created
- Genetic - will use a genetic algorithm (the open source code for the genetic algorithm is provided in the custom project)

The settings for the genetic algorithm will come up below the parameters section. Please click on the arrow for them to unfold. Each parameter will light up with a small caption helping to understand its purpose.

### Database

If you like a specific optimization results you can right click the periods section and choose `Save Results`. This will allow to access these results in the `Admin Panels -> New -> Databse` at any point in time later. The results will be saved in a static form with the best selected strategies for each period. Double click on a chosen strategy to open up in optimizer static window mode.

<img src={db} alt="db" style={{width: 600}} />
