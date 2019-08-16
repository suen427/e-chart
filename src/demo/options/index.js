import echarts from 'echarts'

export const lineOption = {
  title: {
    text: '堆叠区域图'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '视频广告',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '直接访问',
      type: 'line',
      stack: '总量',
      areaStyle: { normal: {} },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '搜索引擎',
      type: 'line',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
      areaStyle: { normal: {} },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}

var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放']
var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
var yMax = 500
var dataShadow = []

for (var i = 0; i < data.length; i++) {
  dataShadow.push(yMax)
}

export const barOption = {
  title: {
    text: '特性示例：渐变色 阴影 点击缩放',
    subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
  },
  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
      textStyle: {
        color: '#fff'
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    z: 10
  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      textStyle: {
        color: '#999'
      }
    }
  },
  dataZoom: [
    {
      type: 'inside'
    }
  ],
  series: [
    { // For shadow
      type: 'bar',
      itemStyle: {
        normal: { color: 'rgba(0,0,0,0.05)' }
      },
      barGap: '-100%',
      barCategoryGap: '40%',
      data: dataShadow,
      animation: false
    },
    {
      type: 'bar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#83bff6' },
              { offset: 0.5, color: '#188df0' },
              { offset: 1, color: '#188df0' }
            ]
          )
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ]
          )
        }
      },
      data: data
    }
  ]
}

export const chinaMapoption = {
  title: {
    text: 'iphone销量',
    subtext: '纯属虚构',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['iphone3', 'iphone4', 'iphone5']
  },
  visualMap: {
    min: 0,
    max: 2500,
    left: 'left',
    top: 'bottom',
    text: ['高', '低'], // 文本，默认为数值文本
    calculable: true
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'iphone3',
      type: 'map',
      mapType: 'china',
      roam: false,
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      data: [
        { name: '北京', value: Math.round(Math.random() * 1000) },
        { name: '天津', value: Math.round(Math.random() * 1000) },
        { name: '上海', value: Math.round(Math.random() * 1000) },
        { name: '重庆', value: Math.round(Math.random() * 1000) },
        { name: '河北', value: Math.round(Math.random() * 1000) },
        { name: '河南', value: Math.round(Math.random() * 1000) },
        { name: '云南', value: Math.round(Math.random() * 1000) },
        { name: '辽宁', value: Math.round(Math.random() * 1000) },
        { name: '黑龙江', value: Math.round(Math.random() * 1000) },
        { name: '湖南', value: Math.round(Math.random() * 1000) },
        { name: '安徽', value: Math.round(Math.random() * 1000) },
        { name: '山东', value: Math.round(Math.random() * 1000) },
        { name: '新疆', value: Math.round(Math.random() * 1000) },
        { name: '江苏', value: Math.round(Math.random() * 1000) },
        { name: '浙江', value: Math.round(Math.random() * 1000) },
        { name: '江西', value: Math.round(Math.random() * 1000) },
        { name: '湖北', value: Math.round(Math.random() * 1000) },
        { name: '广西', value: Math.round(Math.random() * 1000) },
        { name: '甘肃', value: Math.round(Math.random() * 1000) },
        { name: '山西', value: Math.round(Math.random() * 1000) },
        { name: '内蒙古', value: Math.round(Math.random() * 1000) },
        { name: '陕西', value: Math.round(Math.random() * 1000) },
        { name: '吉林', value: Math.round(Math.random() * 1000) },
        { name: '福建', value: Math.round(Math.random() * 1000) },
        { name: '贵州', value: Math.round(Math.random() * 1000) },
        { name: '广东', value: Math.round(Math.random() * 1000) },
        { name: '青海', value: Math.round(Math.random() * 1000) },
        { name: '西藏', value: Math.round(Math.random() * 1000) },
        { name: '四川', value: Math.round(Math.random() * 1000) },
        { name: '宁夏', value: Math.round(Math.random() * 1000) },
        { name: '海南', value: Math.round(Math.random() * 1000) },
        { name: '台湾', value: Math.round(Math.random() * 1000) },
        { name: '香港', value: Math.round(Math.random() * 1000) },
        { name: '澳门', value: Math.round(Math.random() * 1000) }
      ]
    },
    {
      name: 'iphone4',
      type: 'map',
      mapType: 'china',
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      data: [
        { name: '北京', value: Math.round(Math.random() * 1000) },
        { name: '天津', value: Math.round(Math.random() * 1000) },
        { name: '上海', value: Math.round(Math.random() * 1000) },
        { name: '重庆', value: Math.round(Math.random() * 1000) },
        { name: '河北', value: Math.round(Math.random() * 1000) },
        { name: '安徽', value: Math.round(Math.random() * 1000) },
        { name: '新疆', value: Math.round(Math.random() * 1000) },
        { name: '浙江', value: Math.round(Math.random() * 1000) },
        { name: '江西', value: Math.round(Math.random() * 1000) },
        { name: '山西', value: Math.round(Math.random() * 1000) },
        { name: '内蒙古', value: Math.round(Math.random() * 1000) },
        { name: '吉林', value: Math.round(Math.random() * 1000) },
        { name: '福建', value: Math.round(Math.random() * 1000) },
        { name: '广东', value: Math.round(Math.random() * 1000) },
        { name: '西藏', value: Math.round(Math.random() * 1000) },
        { name: '四川', value: Math.round(Math.random() * 1000) },
        { name: '宁夏', value: Math.round(Math.random() * 1000) },
        { name: '香港', value: Math.round(Math.random() * 1000) },
        { name: '澳门', value: Math.round(Math.random() * 1000) }
      ]
    },
    {
      name: 'iphone5',
      type: 'map',
      mapType: 'china',
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      data: [
        { name: '北京', value: Math.round(Math.random() * 1000) },
        { name: '天津', value: Math.round(Math.random() * 1000) },
        { name: '上海', value: Math.round(Math.random() * 1000) },
        { name: '广东', value: Math.round(Math.random() * 1000) },
        { name: '台湾', value: Math.round(Math.random() * 1000) },
        { name: '香港', value: Math.round(Math.random() * 1000) },
        { name: '澳门', value: Math.round(Math.random() * 1000) }
      ]
    }
  ]
}

export const beijingMapOption = {
  title: {
    text: '北京市各区房价',
    subtext: '时间：2017.08',
    left: 'center'
  },
  visualMap: {
    min: 0,
    max: 125000,
    dimension: 0,
    left: 'left',
    top: 'bottom',
    text: ['HIGH', 'LOW'], // 文本，默认为数值文本
    calculable: true,
    inRange: {
      color: ['#3EACE5', '#F02FC2']
    }
  },
  series: [{
    type: 'map',
    map: '北京',
    label: {
      normal: {
        show: false
      },
      emphasis: {
        textStyle: {
          color: 'rgba(255, 255, 255, 0.8)'
        }
      }
    },
    itemStyle: {

      normal: {
        borderColor: '#fff',
        borderWidth: 1,
        areaColor: '#000'
      },
      emphasis: {
        areaColor: '#EABBFF',
        borderColor: 'rgb(255,222,254)',
        borderWidth: 1
      }
    },
    animation: false,
    data: [{
      name: '东城区',
      value: 110871,
      label: {
        normal: {
          show: false
        }
      }
    }, {
      name: '西城区',
      value: 124558,
      label: {
        normal: {
          show: false
        }
      }
    }, {
      name: '海淀区',
      value: 90978
    }, {
      name: '朝阳区',
      value: 77642
    }, {
      name: '石景山区',
      value: 61234,
      label: {
        normal: {
          show: false
        }
      }
    }, {
      name: '大兴区',
      value: 47528
    }, {
      name: '门头沟区',
      value: 48570
    }, {
      name: '昌平区',
      value: 40335
    }, {
      name: '通州区',
      value: 47268
    }, {
      name: '房山区',
      value: 35560
    }, {
      name: '丰台区',
      value: 63413
    }, {
      name: '顺义区',
      value: 49521
    }, {
      name: '怀柔区',
      value: 35400
    }, {
      name: '密云区',
      value: 27347
    }, {
      name: '延庆区',
      value: 17942
    }, {
      name: '平谷区',
      value: 25776
    }]
    // animationDurationUpdate: 1000,
    // animationEasingUpdate: 'quinticInOut'
  }]
}

export const barOption2 = {
  title: {
    text: '工作日/非工作日倾向',
    left: '3%',
    top: 10,
    textStyle: {
      color: '#aeaeae'
    }
  },
  yAxis: {
    type: 'category',
    data: ['工作日', '周末', '节假日'],
    nameTextStyle: {
      color: '#62727c'
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#61717b',
      fontWeight: 600
    },
    inverse: true
  },
  xAxis: {
    name: 'CTR',
    nameLocation: 'start',
    nameTextStyle: {
      fontSize: 16
    },
    offset: 5,
    type: 'value',
    position: 'top',
    axisLine: {
      lineStyle: {
        color: '#dedede'
      }
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#61717b',
      fontWeight: 600
    }
  },
  grid: {
    top: 75,
    bottom: 30
  },
  series: [{
    data: [{
      value: 1.4,
      itemStyle: {
        color: '#f26136'
      }
    }, 1.3, 1.2],
    type: 'bar',
    barWidth: 30,
    itemStyle: {
      barBorderRadius: 5,
      color: '#0abcda'
    }
  }]
}

export const barOption3 = {
  title: {
    text: '工作日/非工作日倾向',
    left: '3%',
    top: 10,
    textStyle: {
      color: '#aeaeae'
    }
  },
  yAxis: {
    type: 'category',
    data: new Array(24).fill('').map((v, i) => { return i + ':00' }),
    nameTextStyle: {
      color: '#62727c'
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#61717b',
      fontWeight: 600
    }
    // inverse: true
  },
  xAxis: {
    name: 'CTR',
    nameLocation: 'start',
    nameTextStyle: {
      fontSize: 16
    },
    offset: 10,
    type: 'value',
    position: 'top',
    axisLine: {
      lineStyle: {
        color: '#dedede'
      }
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: '#61717b',
      fontWeight: 600
    }
  },
  grid: {
    top: 75
  },
  dataZoom: [
    {
      type: 'slider',
      show: true,
      handleSize: 12,
      yAxisIndex: 0,
      minValueSpan: 5,
      orient: 'horizontal'
    },
    {
      type: 'inside',
      yAxisIndex: 0
    }
  ],
  series: [{
    data: new Array(24).fill('').map((v, i) => {
      if (!i) {
        return {
          value: 2.4 - i * 0.03,
          itemStyle: {
            color: '#f26136'
          }
        }
      }
      return 2.4 - i * 0.03
    }),
    type: 'bar',
    barMaxWidth: 30,
    itemStyle: {
      barBorderRadius: 5,
      color: '#0abcda'
    }
  }]
}

export const pieOption = {
  color: ['#8ad9d6', '#fff5bc'],
  legend: {
    icon: 'circle', // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
    bottom: '15%',
    right: '15%',
    orient: 'vertical',
    data: ['有效问卷', '无效问卷']
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },

  series: [
    {
      name: '问卷',
      type: 'pie',
      radius: '65%',
      label: {
        show: true,
        position: 'inside',
        color: '#364a50'
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 335, name: '有效问卷' },
        { value: 102, name: '无效问卷' }
      ],

      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200
      }
    }
  ]
}

export const lineChart = {
  tooltip: {
    trigger: 'axis'
  },
  // toolbox: {
  //   show: true,
  //   feature: {
  //     mark: { show: true },
  //     dataView: { show: true, readOnly: false },
  //     magicType: { show: true, type: ['line', 'bar'] },
  //     restore: { show: true },
  //     saveAsImage: { show: true }
  //   }
  // },
  calculable: true,
  legend: {
    // data: ['点击率', '点击成本']
    data: ['点击率']

  },
  xAxis: [
    {
      type: 'category',
      data: ['展现一次', '展现二次', '展现三次', '展现四次', '展现五次', '展现六次', '展现七次', '展现八次', '展现九次', '展现十次']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '点击率',
      axisLabel: {
        formatter: '{value} %'
      }
    }
    // {
    //   type: 'value',
    //   name: '点击成本',
    //   axisLabel: {
    //     formatter: '{value} 元'
    //   }
    // }
  ],
  series: [
    {
      name: '点击率',
      type: 'line',
      data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
    }
    // {
    //   name: '点击成本',
    //   type: 'line',
    //   data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
    // }
  ]
}
