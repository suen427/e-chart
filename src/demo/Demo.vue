<template>
  <div id="app">
    <e-chart
      :option="lineOption"
      height="400px"
    />
    <e-chart
      :option="barOption"
      height="400px"
    />
    <e-chart
      :option="chinaMapoption"
      height="400px"
    />
    <e-chart
      :option="beijingMapOption"
      height="400px"
    />
    <e-chart
      :option="barOption2"
      height="400px"
    />
    <e-chart
      :option="barOption3"
      height="400px"
    />
    <e-chart
      :option="pieOption"
      height="400px"
    />
    <e-chart
      :option="noData"
      height="400px"
    />
  </div>
</template>

<script>
import EChart from '@/components/EChart.vue'

import {
  lineOption,
  barOption,
  chinaMapoption,
  beijingMapOption,
  barOption2,
  barOption3,
  pieOption
} from './options/index.js'

export default {
  name: 'Demo',
  components: {
    EChart
  },
  data () {
    return {
      lineOption,
      barOption,
      chinaMapoption,
      beijingMapOption,
      barOption2,
      barOption3,
      pieOption,
      noData: {}
    }
  }
}
</script>
