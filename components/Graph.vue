<template>
    <div>
        <canvas ref="chart"></canvas>
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
              label: 'Organization Types',
              data: this.organizationTypes.map(type => {
                return Object.values(this.organizations).filter(org => org.type === type).length;
              }),
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
      }
    }
  }
</script>