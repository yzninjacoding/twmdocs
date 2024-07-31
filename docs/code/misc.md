---
sidebar_position: 10
---

# Miscellaneous

import as from '/img/autoScale.png';

### Sending Emails

Please make sure the appropriate settings have been done inside the [options menu](/twmdocs/docs/platform/options#email).

```
SendMail("receiver@address.com", "subjext", "body");
```

### Debug Window

Use the clear debug command to clear the debug window located in `New -> Debug` at any time.

```
ClearDebug();
```

### Autoscale

Both strategy and indicator plots can be assigned to an autoscale parameter globaly or individually. Autoscale allows the chart to zoom in/out the plot object automatically when the `A` button at the top of the  Y-Axis of the chart is enabled.

```
public override void OnStateChanged()
{
    if (State == State.SetDefaults)
    {
        //will set the autoscale for the whole object
        IsAutoscale = true;
    }
}

private void AddIndicators()
{
    _maSlow = EMA(Low, PeriodSlow);

    //will set the autoscale for a unique plot
    _maSlow.Plots[0].IsAutoscale = false;
}
```

<img src={as} alt="Data Series Window" style={{width: 700}} />

### Drawing Arrows

You can draw arrows pointing in 4 directions. ArrowConnector property defines the point of the arrow that should be attached to the Y property which is in the example below is defined by High and Low prices of the current bar.

The tag property should be unique for each drawing object. If you place an object with the same tag, the old object with the same tag will be overwritten. 


```js
if (_enterShort)
    Draw.Arrow(this, ArrowDirection.Down, CurrentBar+"Short",0, High[0], ArrowConnector.End, Brushes.Red);

if (_enterLong)
    Draw.Arrow(this, ArrowDirection.Up, CurrentBar+"Long",0, Low[0], ArrowConnector.End, Brushes.Green);

public enum ArrowDirection
{
    Left,
    Down,
    Right,
    Up
}

public enum ArrowConnector
{
    Start,
    End
}
```

