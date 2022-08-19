<template>
  <div class="wi-w-full wi-relative wi-h-full">
    <v-chart class="chart wi-w-full" :option="option" autoresize />
  </div>
</template>

<script>
import { use } from "echarts/core.js";
import { CanvasRenderer } from "echarts/renderers.js";
import { PieChart } from "echarts/charts.js";
import {
  TooltipComponent,
  LegendComponent
} from "echarts/components.js";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TooltipComponent,
  LegendComponent
]);

export default {
  name: "Chart",
  components: {
    VChart
  },
  provide: {
    [THEME_KEY]: "light"
  },
  data() {
    return {
      option: {
        color: ['#FECA57', '#F80D38', '#763CEF', '#100DB1'],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          top: 'bottom',
          data: [
            "COVID-19",
            "Hunger",
            "Lazyness",
            "Other",
          ]
        },
        series: [
          {
            name: "График заболеваемости",
            type: 'pie',
            radius: ['40%', '70%'],
            data: [
              { value: 335, name: "COVID-19" },
              { value: 310, name: "Hunger" },
              { value: 234, name: "Lazyness" },
              { value: 135, name: "Other" },
            ],
            itemStyle: {
              borderRadius: 10,
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.2)"
              }
            }
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
