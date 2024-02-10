<template>
  <div class="flex justify-center items-center h-full">
    <div class="w-full h-full">
      <h1 class="text-center text-black text-4xl mb-6">Map of Community Organizations/Businesses</h1>
      <div ref="map" class="w-full h-screen rounded-xl"></div>
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
  <div class="info-window-content flex font-sans overflow-hidden">
    ${business.image ? `<img src="${business.image}" alt="${business.name}" class="w-24 mask mask-squircle rounded-xl h-auto mb-2 mr-4 self-center">` : ''}
    <div>
      <h2 class="text-xl font-bold mt-0 mb-1">${business.name}</h2>
      <span class='badge items-center'>${business.type}</span>
      <p role="alert" class="alert bg-slate-200 alert-info my-2"> Description: <br> ${business.description}</p>
      <p class="mb-2"><strong>Contact:</strong> ${business.contact}</p>
      ${business.link ? `<p><a href="${business.link}" target="_blank" class="text-blue-600 hover:underline">Visit Website</a></p>` : ''}
      <p class="text-sm"><small>Lat: ${latitude}, Lng: ${longitude}</small></p>
    </div>
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
  
