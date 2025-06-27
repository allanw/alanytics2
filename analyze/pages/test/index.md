This is a test.

[test2](test/test2)

```sleeps
select
  bedtime_start as start,
  total_sleep_duration/60/60 as total
from raw.sleeps
where start > '2023-01-01'
``` 

Sometimes you need something *bigger*: 
<BigValue data={sleeps} value=total />

<BarChart
    title='Total sleep'
    subtitle='Hours'
    data={sleeps}
    x=start
    y=total
/>
