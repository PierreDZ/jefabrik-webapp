<template>
  <div>
    <canvas id="planet-chart2"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'PlanetChart',
  data() {
    return {
      planetChartData: {
        type: "line",
        data: {
          labels: ["Mercury", "Venus", "Earth", "Mars"],
          datasets: [
            {
              label: "Number of Moons",
              data: [79, 82, 27, 14],
              backgroundColor: "rgba(54,73,93,.5)",
              borderColor: "#36495d",
              borderWidth: 3
            },
            {
              label: "Planetary Mass (relative to the Sun x 10^-6)",
              data: [0.166, 2.081, 3.003, 0.323],
              backgroundColor: "#26ce83",
              borderColor: "#47b784",
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }
            ]
          }
        }
      }
    }
  },
  mounted() {
    const ctx = document.getElementById('planet-chart2');
    new Chart(ctx, this.planetChartData);
  }
}
</script>

<style>
  #app > div > div.tracking-content > div:nth-child(2) {
    height: 50%;
    grid-column: 2/3;
  }
  #planet-chart2 {
    height: 192px;
  }
</style>