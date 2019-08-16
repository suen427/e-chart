# e-chart

## install
```
npm install @sunhua/e-chart
```

## usage
```
import Vue from 'vue'
import EChart from '@sunhua/e-chart'

import 'echarts'

Vue.component('v-chart', ECharts)

```

```
<template>
  <div>
    <e-chart
      :option="chartOption"
      height="400px"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      chartOption: {...},
      theme: 'default',
    }
  }
}
</script>
```

## Props
* `width`
* `height`
* `option`
* `theme`
* `noDataPlaceholder`