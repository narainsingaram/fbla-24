<template>
  <div class="flex justify-center items-center h-full">
    <div class="w-full h-full">
      <h1 class="text-center text-black text-4xl mb-6">Map of Community Organizations/Businesses</h1>
      <div ref="map" class="w-full h-screen"></div>
    </div>
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
          center: { lat: 34, lng: -84 }, // Set the initial center of the map
          zoom: 9 // Set the initial zoom level
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
          const contentString = `
        <div class="info-window-content" style="font-family: Arial, sans-serif; overflow-hidden">
            <h2 style="margin-top: 0;">${business.name}</h2>
            ${business.image ? `<img src="${business.image}" alt="${business.name}" style="max-width: 100%; height: auto; margin-bottom: 8px;">` : ''}
            <p><strong>Type:</strong> ${business.type}</p>
            <p style="text-align: justify;"><strong>Description:</strong> ${business.description}</p>
            <p><strong>Contact:</strong> ${business.contact}</p>
            ${business.link ? `<p><a href="${business.link}" target="_blank" style="color: #007bff;">Visit Website</a></p>` : ''}
            <p><small>Lat: ${latitude}, Lng: ${longitude}</small></p>
        </div>
        `;

        const infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
        }
      }
    }
  };
  </script>
  
