<template>
  <div>
    <canvas id="planet-chart3"></canvas>
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
          labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
          datasets: [
            {
              label: "Number of Moons",
              data: [20, 80, 600, 2, 79, 82, 27, 14],
              backgroundColor: "rgba(54,73,93,.5)",
              borderColor: "#36495d",
              borderWidth: 3
            },
            {
              label: "Numbers of croissants sold in one day",
              data: [0.166, 285.886, 3.003, 0.323, 954.792, 285.886, 43.662, 300.000],
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
    const ctx = document.getElementById('planet-chart3');
    new Chart(ctx, this.planetChartData);
  }
}
</script>

<style>
  #app > div > div.tracking-content > div:nth-child(3) {
    height: 50%;
    grid-column: 1/3;
    grid-row: 2/3;
  }

  #planet-chart3 {
    height: 200px;
  }
</style>