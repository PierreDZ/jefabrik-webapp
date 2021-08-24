<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['labels', 'dataLabel', 'dataDatas'],
  data () {
    return {
      chartdata: {
        labels: this.labels,
        datasets: [
          {
            label: `Nb of ${this.dataLabel} per days`,
            data: this.dataDatas,
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