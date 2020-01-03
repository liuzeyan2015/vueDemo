<template>
    <div>
      <div ref="chart_wrap" class="chart_wrap"></div>
    </div>
</template>

<script>
    export default {
        name: "echart",
        computed: {},
        data() {
            return {
                seriesData: []
            };
        },
        created() {},
        mounted() {
            this.initCharts();
            setTimeout(() => {
                this.seriesData.push({
                    name: "销量",
                    type: "bar",
                    data: [15, 10, 16, 10, 10, 20]
                });
            }, 5000);
        },
        watch: {
            seriesData(val, oldVal) {
                console.log(1111, val, oldVal);
                this.setOptions(val);
            }
        },
        methods: {
            initCharts() {
                this.chart = this.$echarts.init(this.$refs.chart_wrap);
                this.setOptions();
            },
            setOptions(series) {
                console.log(22222,this.chart,series);
                this.chart.setOption({
                    title: {
                        text: "ECharts入门示例"
                    },
                    tooltip: {},
                    legend: {
                        data: ["时间"]
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {},
                    series: series
                });
            }
        }
    }
</script>

<style scoped>

  .chart_wrap {
    height: 400px;
  }
</style>
