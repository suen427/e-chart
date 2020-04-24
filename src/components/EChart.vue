<template>
  <div :style="{height:height,width:width,position: 'relative'}">
    <div
      ref="chart"
      :class="className"
      :style="{height:height,width:width, visibility: haveData ? 'visible' : 'hidden', position: haveData ? 'static' : 'absolute'}"
    />
    <div
      v-if="!haveData"
      class="no-data"
      :style="{height:height, width:width, position: 'relative', color: '#eee'}"
    >
      <svg class="icon" style="position: absolute; width: 60%; height: 60%;left: 20%; top:20%; fill: currentColor" viewBox="0 0 1697 1280" xmlns="http://www.w3.org/2000/svg" width="331.445" height="200"><path d="M248.669 686.53h19.983c5.44.118 9.696 4.493 9.696 9.932 0 5.44-4.257 9.932-9.696 9.932H248.67v19.984c-.118 5.32-4.493 9.696-9.933 9.696-2.601 0-5.084-.946-6.976-2.72a9.39 9.39 0 0 1-2.956-6.858v-19.983H208.82c-5.439-.119-9.696-4.494-9.696-9.933 0-5.44 4.257-9.932 9.696-9.932h19.984v-19.984c.118-5.44 4.493-9.696 9.932-9.696 5.44 0 9.933 4.257 9.933 9.696v19.865zm1304.122-78.988v-19.984c0-2.601-1.064-5.084-2.956-6.858s-4.375-2.838-6.977-2.72c-5.32 0-9.814 4.257-9.932 9.697v19.983h-19.984c-2.601 0-5.084 1.064-6.858 2.956s-2.838 4.375-2.72 6.977c0 5.32 4.375 9.932 9.697 9.932h19.983v19.984c0 5.439 4.375 9.696 9.932 9.696 5.44 0 9.815-4.257 9.933-9.696v-19.984h19.983c5.44 0 9.696-4.375 9.696-9.932 0-5.321-4.256-9.815-9.696-9.933h-20.101zm-717.746 326H337.589c-5.203 0-10.287-2.128-13.953-5.793-3.666-3.666-5.794-8.75-5.794-13.953 0-10.879 8.987-19.747 19.747-19.747h89.63c-6.977-11.943-10.524-25.54-10.524-39.376v-573.25c0-20.93 8.395-41.031 23.176-55.93 14.78-14.78 35-23.058 55.93-23.058h59.24V182.57c0-20.93 8.395-41.031 23.176-55.93a79.413 79.413 0 0 1 55.93-23.058h474.043c20.93 0 41.15 8.278 55.93 23.058 14.899 14.78 23.176 34.882 23.176 55.93v573.25c0 14.308-3.784 27.788-10.524 39.376h109.258c10.879 0 19.747 8.75 19.747 19.747 0 10.879-8.75 19.747-19.747 19.747h-237.08v19.865c0 14.308-3.784 27.788-10.524 39.376h10.642c10.878 0 19.747 8.75 19.747 19.747 0 10.878-8.987 19.746-19.747 19.746H945.13c8.986 15.136 7.094 35-6.03 48.126-7.45 7.45-17.501 11.588-27.907 11.588-10.523 0-20.574-4.138-27.905-11.588l-48.244-48.007zm72.247-39.493h62.788c21.757 0 39.376-17.619 39.376-39.612v-573.96c0-21.403-17.027-38.548-38.193-38.548h-477c-21.047 0-38.193 17.264-38.193 38.548v573.96c0 21.875 17.737 39.612 39.376 39.612h299.987l-10.17-10.17c-10.05-9.932-13.952-24.594-10.287-38.192l-18.682-18.683c-58.058 43.278-139.766 34.41-187.182-20.456-47.416-54.748-44.578-136.81 6.504-188.246 51.318-51.436 133.616-54.51 188.482-6.976 54.866 47.534 63.734 129.478 20.102 187.536l18.682 18.683c13.598-3.666 28.26.236 38.193 10.287l66.217 66.217zm141.658-98.853h59.477c21.757-.118 39.375-17.736 39.375-39.493V182.688c0-21.875-17.618-39.494-39.375-39.494H633.792c-21.757.119-39.257 17.737-39.375 39.494v19.747h375.309c20.929 0 41.149 8.277 55.93 23.058 14.898 14.78 23.175 34.882 23.175 55.93v513.773zM352.488 69.055h29.443c8.277 0 15.017 6.622 15.017 14.78s-6.74 14.781-15.017 14.781h-29.443v29.443c0 8.277-6.622 15.017-14.78 15.017-3.903 0-7.687-1.655-10.525-4.493s-4.375-6.622-4.256-10.524V98.734h-29.443a15.33 15.33 0 0 1-10.642-4.256 14.862 14.862 0 0 1-4.375-10.524c0-8.16 6.74-14.78 15.017-14.78h29.324V39.611c0-8.277 6.622-15.017 14.78-15.017s14.782 6.74 14.782 15.017v29.443zm-232.233 844.74c0-10.878 8.987-19.746 19.747-19.746H258.72c10.878 0 19.747 8.75 19.747 19.747 0 10.878-8.987 19.747-19.747 19.747H140.002c-5.203 0-10.287-2.129-13.953-5.794-3.784-3.666-5.794-8.75-5.794-13.953zm623.15-127.704c38.548-38.547 38.548-101.099 0-139.765-38.548-38.548-101.1-38.548-139.765 0-38.548 38.548-38.548 101.1 0 139.765 38.666 38.548 101.217 38.548 139.765 0zM535.176 321.035c0-10.879 8.868-19.747 19.747-19.747h217.334c10.878 0 19.747 8.868 19.747 19.747s-8.869 19.747-19.747 19.747H554.923c-5.203 0-10.287-2.01-13.953-5.794-3.666-3.666-5.794-8.75-5.794-13.953zm0 98.734c0-10.878 8.75-19.747 19.629-19.747h316.423c10.878 0 19.628 8.75 19.628 19.747 0 10.879-8.75 19.747-19.628 19.747H554.805c-5.203 0-10.288-2.128-13.953-5.794-3.666-3.666-5.676-8.75-5.676-13.953zm0 98.853c0-10.879 8.868-19.747 19.747-19.747h138.346c10.879 0 19.747 8.75 19.747 19.747 0 10.878-8.868 19.747-19.747 19.747H554.923c-5.203 0-10.287-2.01-13.953-5.794-3.666-3.666-5.794-8.75-5.794-13.953zm-375.427-118.6c-21.166 0-40.795-11.351-51.319-29.68-10.642-18.327-10.642-40.912 0-59.24s30.153-29.68 51.319-29.68c32.754 0 59.24 26.487 59.24 59.241.119 32.872-26.486 59.36-59.24 59.36zm0-29.68c10.642 0 20.338-5.675 25.659-14.78 5.32-9.223 5.32-20.456 0-29.68-5.321-9.222-15.135-14.78-25.66-14.78-16.317 0-29.679 13.243-29.679 29.68.119 16.317 13.362 29.56 29.68 29.56zm1225.134-88.92c-21.166 0-40.794-11.35-51.318-29.679-10.642-18.328-10.642-40.913 0-59.24s30.152-29.68 51.318-29.68c32.754 0 59.24 26.487 59.24 59.24 0 32.873-26.486 59.36-59.24 59.36zm0-29.56c10.642 0 20.338-5.676 25.66-14.781 5.32-9.223 5.32-20.457 0-29.68-5.322-9.223-15.136-14.78-25.66-14.78-16.318 0-29.68 13.243-29.68 29.68 0 16.317 13.362 29.56 29.68 29.56zm0 0"/><text x="50%" y="1160" dominant-baseline="middle" text-anchor="middle" style="font-size: 160px">{{ noDataPlaceholder }}</text></svg>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import ResizeObserver from 'resize-observer-polyfill'
import { debounce, isVisible } from '../utils'

let registeredMaps = {}

const NUM_REGEXP = /\d+(\.\d+)?/
function notAData (v) {
  return !NUM_REGEXP.test(v)
}

export default {
  name: 'EChart',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    option: {
      type: Object,
      required: true
    },
    theme: {
      type: String,
      default: ''
    },
    noDataPlaceholder: {
      type: String,
      default: '没有可以展示的数据'
    }
  },
  data () {
    return {
      chart: null,
      sidebarElm: null,
      finished: false
    }
  },
  computed: {
    haveData () {
      let option = this.option
      let seriesHaveNoData = (!option ||
          !Array.isArray(option.series) ||
          option.series.length === 0 ||
          option.series.every(item => {
            return (
              !Array.isArray(item.data) ||
              item.data.length === 0 ||
              item.data.every(d => (notAData(d) && notAData(d.value)))
            )
          }))
      let datasetHaveNoData = (!option ||
          !option.dataset ||
          !Array.isArray(option.dataset.source) ||
          option.dataset.source.length === 0 ||
          option.dataset.source.every(row => {
            for (let key in row) {
              if (typeof row[key] === 'number' || !isNaN(Number(row[key]))) {
                return false
              }
            }
            return true
          }))

      return !(seriesHaveNoData && datasetHaveNoData)
    }
  },
  watch: {
    option: {
      deep: true,
      handler (val) {
        this.reanderChart()
      }
    },
    theme () {
      this.reDraw()
    }
  },
  mounted () {
    // bug fix: this.resize 方法为什么不定义在methods字段中，因为使用debounce会导致多个EChart实例中只有一个能触发resize方法
    this.resize = debounce(function () {
      if (this.chart && this.finished) {
        this.chart.resize()
      }
    }, 200)

    let style = getComputedStyle(this.$el)
    this.$elWidth = style.width
    this.$elHeight = style.height

    const ro = this.resizeObserver = new ResizeObserver((entries, observer) => {
      const entry = entries[0]
      const { width, height } = entry.contentRect
      if (isVisible(this.chart.getDom()) && (this.$elWidth !== width || this.$elHeight !== height)) {
        this.resize()
        this.$elWidth = width
        this.$elHeight = height
      }
    })

    ro.observe(this.$el)

    this.initChart()

    // set finished flag
    let onFinished = () => {
      this.finished = true
      this.chart.off('finished', onFinished)
    }
    this.chart.on('finished', onFinished)
  },
  beforeDestroy () {
    this.resizeObserver && this.resizeObserver.disconnect()
    this.chart && this.chart.dispose()
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$refs.chart, this.theme)
      this.inited = true
      this.reanderChart()
    },
    reanderChart () {
      if (!this.haveData) {
        return
      }
      let mapPath = {
        world: 'world.js',
        china: 'china.js',
        安徽: 'province/anhui.js',
        澳门: 'province/aomen.js',
        北京: 'province/beijing.js',
        重庆: 'province/chongqing.js',
        福建: 'province/fujian.js',
        甘肃: 'province/gansu.js',
        广东: 'province/guangdong.js',
        广西: 'province/guangxi.js',
        贵州: 'province/guizhou.js',
        海南: 'province/hainan.js',
        河北: 'province/hebei.js',
        黑龙江: 'province/heilongjiang.js',
        河南: 'province/henan.js',
        湖北: 'province/hubei.js',
        湖南: 'province/hunan.js',
        江苏: 'province/jiangsu.js',
        江西: 'province/jiangxi.js',
        吉林: 'province/jilin.js',
        辽宁: 'province/liaoning.js',
        内蒙古: 'province/neimenggu.js',
        宁夏: 'province/ningxia.js',
        青海: 'province/qinghai.js',
        山东: 'province/shandong.js',
        上海: 'province/shanghai.js',
        山西: 'province/shanxi.js',
        陕西: 'province/shanxi1.js',
        四川: 'province/sichuan.js',
        台湾: 'province/taiwan.js',
        天津: 'province/tianjin.js',
        香港: 'province/xianggang.js',
        新疆: 'province/xinjiang.js',
        西藏: 'province/xizang.js',
        云南: 'province/yunnan.js',
        浙江: 'province/zhejiang.js'
      }
      let maps = {}
      if (this.option && this.option.geo && this.option.geo.map) {
        maps[this.option.geo.map] = 1
      }
      for (let serie of this.option.series) {
        if (serie.type === 'map' && (serie.map || serie.mapType)) {
          maps[serie.map || serie.mapType] = 1
        }
      }

      if (this.option.geo && this.option.geo.map) {
        maps[this.option.geo.map] = 1
      }

      let mapPromises = []
      for (let map in maps) {
        if (registeredMaps[map]) {
          continue
        }

        registeredMaps[map] = true
        if (map === 'china-cities') {
          mapPromises.push(import('echarts/map/json/china-cities').then(geojson => {
            echarts.registerMap('china-cities', geojson)
          }))
        } else if(mapPath[map]) {
          mapPromises.push(import('echarts/map/js/' + mapPath[map].toLowerCase()))
        }
      }

      Promise.all(mapPromises)
        .then(() => {
          this.setOption(this.option, true)
        })
        .catch(e => {
          this.setOption(this.option, true)
        })
    },
    reDraw () {
      this.inited = false
      if (this.chart) {
        this.chart.dispose()
        this.chart = null
      }
      this.initChart()
    },
    sidebarResizeHandler (e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    },
    setOption (option, notMerge, lazyUpdate) {
      if (this.inited) {
        this.chart.setOption(option, notMerge, lazyUpdate)
      }
    }
  }
}
</script>
