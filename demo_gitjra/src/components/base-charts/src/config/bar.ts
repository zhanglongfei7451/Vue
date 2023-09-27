import type { EChartsOption } from "echarts";

const barConfig: EChartsOption = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        },
        padding: [5, 10]
    },
    legend: {},
    grid: {
        left: "4%",
        right: "2%",
        bottom: "7%",
        top: "2%"
    },
    xAxis: [
        {
            type: "category",
            data: [''],

            axisTick: {
                show: true
            }
        }
    ],
    yAxis: [
        {
            type: "value",
            axisTick: {
                show: false
            }
        }
    ],
    series: [
        {
            type: "bar",
            name: "代码量",
            data: [],
            barWidth: "auto",
            /* barGap: "10%" */
        }
    ]
};

export default barConfig;
