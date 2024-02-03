<template>
    <div>
      <div ref="map" style="width: 100%; height: 400px;"></div>
    </div>
  </template>
  
  <script>
  import businessData from '@/backup.json'; // Import the JSON data from backup.json
  
  export default {
    data() {
      return {
        businesses: businessData.__collections__.businesses,
        map: null
      };
    },
    mounted() {
      this.loadGoogleMapsAPI();
    },
    methods: {
      loadGoogleMapsAPI() {
        // Create a script element to load the Google Maps JavaScript API
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAFq69d34t2H2ufrWFgwJYIjqPYZGoq03w&callback=initMap`;
        script.defer = true;
        script.async = true;
        script.addEventListener('load', this.renderMap);
        document.head.appendChild(script);
      },
      renderMap() {
        const map = new google.maps.Map(this.$refs.map, {
          center: { lat: 35, lng: -80 }, // Set the initial center of the map
          zoom: 4 // Set the initial zoom level
        });
  
        for (const businessId in this.businesses) {
          const business = this.businesses[businessId];
          const latitude = parseFloat(business.latitude);
          const longitude = parseFloat(business.longitude);
  
          const marker = new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map,
            title: business.name
          });
  
          const infowindow = new google.maps.InfoWindow({
            content: `<div><strong>${business.name}</strong><br>Lat: ${latitude}, Lng: ${longitude}</div>`
          });
  
          marker.addListener("click", () => {
            infowindow.open(map, marker);
          });
        }
      }
    }
  };
  </script>
  
  <style>
  /* Add any necessary styles for the map container */
  </style>