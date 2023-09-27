<template>
    <div class="echart_1" ref="echart_1" style="width: 50%; height: 50%;"></div>
</template>

<script lang="ts" setup>
import type { EChartsOption } from "echarts";
import echarts from "echarts";

const echart_1 = ref<HTMLElement>()

const barOption: EChartsOption = reactive({
    option: {
        title: {
          text: '普通图表'
        },
        legend: {
          orient: 'vertical',
          bottom: 10,
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
    }
});

onMounted(() => {
  //initChart()
  this.echart_1 = echarts.init(echart_1)
})

function initChart() {
    this.chartColumn = echarts.init(echart_1)
    this.chartColumn.setOption(this.option)
}


</script>

<style lang="scss" scoped></style>
