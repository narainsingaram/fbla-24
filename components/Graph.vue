<template>
  <div class="card">
    <div class="card-body">
      <canvas ref="chart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import backupData from '@/backup.json'; // Import the JSON data from backup.json

export default {
  data() {
    return {
      organizations: backupData.__collections__.businesses,
    };
  },
  computed: {
    organizationTypes() {
      const types = new Set();
      for (const org of Object.values(this.organizations)) {
        types.add(org.type);
      }
      return Array.from(types);
    },
    organizationCounts() {
      return this.organizationTypes.map(type => {
        return Object.values(this.organizations).filter(org => org.type === type).length;
      });
    }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chart.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.organizationTypes,
          datasets: [{
            label: 'Number of Organizations',
            data: this.organizationCounts,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                precision: 0 // Removes decimal places from the y-axis
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
            title: {
              display: true,
              text: 'Organization Types Distribution',
              font: {
                size: 18
              }
            },
            tooltip: {
              enabled: true,
              mode: 'index',
              intersect: false,
              bodySpacing: 8,
              titleSpacing: 6,
              titleMarginBottom: 10,
              footerMarginTop: 6,
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          
        }
      });
    }
  }
}
</script>

<style>
/* Styling for the card */
.card {
  width: 100%; /* Adjust the width as needed */
  border: 1px solid #e2e8f0; /* Border color */
  border-radius: 0.5rem; /* Rounded corners */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
}

.card-body {
  padding: 1.25rem; /* Padding inside the card */
}

canvas {
  width: 100%; /* Make the canvas responsive */
  height: auto; /* Allow height to adjust according to width */
}
</style>
