<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['labelsCtry', 'dataLabelCtry', 'dataDatasCtry'],
  data () {
    return {
      chartdata: {
        labels: this.labelsCtry,
        datasets: [
          {
            label: `Nb of ${this.dataLabelCtry} by Countries`,
            data: this.dataDatasCtry,
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