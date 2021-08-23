<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['labelsSessions', 'dataLabelsSessions', 'dataDatasSessions'],
  data () {
    return {
      chartdata: {
        labels: this.labelsSessions,
        datasets: [
          {
            label: this.dataLabelsSessions,
            data: this.dataDatasSessions,
            backgroundColor: "#26ce83",
            borderColor: "#47b784",
            borderWidth: 3
          }
        ]
      },
      options: {
        responsive: true,
        lineTension: 1,
        maintainAspectRatio: true
      }
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>