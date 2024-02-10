<template>
  <div class="card">
    <div class="card-body">
      <canvas ref="scatterChart"></canvas>
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
  mounted() {
    this.renderScatterChart();
  },
  methods: {
    renderScatterChart() {
      const ctx = this.$refs.scatterChart.getContext('2d');
      new Chart(ctx, {
        type: 'scatter',
        data: {
          datasets: [{
            label: 'Organization Locations',
            data: Object.values(this.organizations).map(org => {
              return { x: org.longitude, y: org.latitude, label: org.name };
            }),
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            pointRadius: 8
          }]
        },
        options: {
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
              title: {
                display: true,
                text: 'Longitude'
              }
            },
            y: {
              type: 'linear',
              position: 'left',
              title: {
                display: true,
                text: 'Latitude'
              }
            }
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.dataset.data[context.dataIndex].label;
                  return label;
                }
              }
            }
          }
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
