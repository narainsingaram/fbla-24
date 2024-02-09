<template>
      <ul class="mt-8 flex flex-col justify-center items-center sm:flex-row">
        <li class="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg">
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
          <button
          @click="changeView('grid')"
          :class="{ 'text-indigo-600 font-semibold': viewMode === 'grid' }"
          class="transition-transform transform hover:rounded-xl hover:scale-110 hover:text-indigo-700"
        >
          Grid
        </button>
        </li>
        <li class="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg">
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
          <button
          @click="changeView('list')"
          :class="{ 'text-indigo-600 font-semibold underline': viewMode === 'list' }"
          class=""
        >
          List
        </button>
        </li>
        <li class="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg">
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <button
          @click="changeView('table')"
          :class="{ 'text-indigo-600 font-semibold underline': viewMode === 'table' }"
        >
          Table
        </button>
        </li>
      </ul>

      <div v-if="viewMode === 'grid'" class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card Blog -->
          <div v-for="partner in displayedPartners" :key="partner.id" class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl transition duration-300 ease-in-out transform hover:shadow-lg">
            <div class="h-52 relative rounded-t-xl overflow-hidden">
              <img :src="partner.image" alt="Partner Image" class="w-full h-full object-cover">
            </div>
            <div class="p-4 md:p-6">
            <a :href="partner.link" target="_blank" style="text-decoration: none; color: inherit;">
              <span class="block mb-1 text-xs font-semibold uppercase text-blue-600">
                {{ partner.type }}
              </span>
              <h3 class="text-xl font-semibold text-gray-800">
                {{ partner.name }}
              </h3>
              <p class="mt-3 text-black">
                {{ partner.description }}
              </p>
          </a>
            </div>
            <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
              <a :href="'#my_modal_' + partner.id" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                View in Detail
              </a>
              <button @click="exportPartner(partner)" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                Export Info
              </button>
            </div>
          </div>
          <!-- End Card Blog -->
        </div>
      </div>
      
      <!-- Modal outside of the loop -->
      <div v-if="viewMode === 'grid'">
        <div v-for="partner in displayedPartners" :key="'modal_' + partner.id">
          <div :id="'my_modal_' + partner.id" class="modal flex items-center justify-center bg-black bg-opacity-50 fixed inset-0 z-50">
            <div class="modal-box bg-white p-8 rounded-lg shadow-lg">
              <h3 class="font-bold text-2xl mb-4">Business: {{ partner.name }}</h3>
              <p class="py-2">Type: {{ partner.type }}</p>
              <p class="py-2">Description: {{ partner.description }}</p>
              <p class="py-2">Contact: {{ partner.contact }}</p>
              <u><a :href="partner.link" target="_blank" style="text-decoration: none; color:blue;">{{ partner.name }}</a></u> <!-- Make the name clickable -->
              <!-- Add more details as needed -->
              <div class="bg-slate-200 p-4 my-4 rounded-2xl relative">
                <h4 class="py-2 text-2xl font-extrabold text-center">Any Questions?
                  <div class="badge badge-primary badge-md absolute top-0 right-0 mt-2 mr-2">✧ AI</div>
                </h4>
                <FeedbackAi></FeedbackAi>
              </div>              
              <div class="modal-action">
                <a href="#" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    <!-- Your existing list, map, and table views remain unchanged -->

    <ul v-else-if="viewMode === 'list'" class="partners-list">
    <li v-for="partner in partners" :key="partner.id" class="partner-item">
        <div class="partner-content">
            <!-- Updated part: Wrapped the name inside an <a> tag with :href binding -->
            <h3 class="partner-name">
                <a :href="partner.link" target="_blank" class="partner-link">{{ partner.name }}</a>
            </h3>
            <div class="partner-details">
                <p><i class="fas fa-industry"></i> Type: {{ partner.type }}</p>
                <p><i class="fas fa-phone"></i> Contact: {{ partner.contact }}</p>
                <div class="location-info">
                    <p><i class="fas fa-map-marker-alt"></i> Location:</p>
                    <p>Lat: {{ partner.latitude }}, Long: {{ partner.longitude }}</p>
                </div>
            </div>
        </div>
    </li>
</ul>



    <!-- Map View-->

    <div v-if="viewMode === 'map'" class="map-container">
      <div id="map" class="h-64"></div>
    </div>

    <!-- Table view -->
<!-- Table view -->
<table v-else-if="viewMode === 'table'" class="mt-8 min-w-full bg-white shadow-md rounded-lg overflow-hidden divide-y divide-gray-200">
  <thead class="bg-indigo-700 text-white">
    <tr>
      <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase">Name</th>
      <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase">Type</th>
      <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase">Contact</th>
      <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase">Latitude</th>
      <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase">Longitude</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-gray-200">
    <tr v-for="partner in partners" :key="partner.id" class="bg-white hover:bg-gray-100">
      <td class="px-6 py-4 whitespace-nowrap">{{ partner.name }}</td>
      <td class="px-6 py-4 whitespace-nowrap">{{ partner.type }}</td>
      <td class="px-6 py-4 whitespace-nowrap">{{ partner.contact }}</td>
      <td class="px-6 py-4 whitespace-nowrap">{{ partner.latitude }}</td>
      <td class="px-6 py-4 whitespace-nowrap">{{ partner.longitude }}</td>
    </tr>
  </tbody>
</table>

</template>

<script>
export default {
  props: {
    partners: Array
  },
  data() {
    return {
      viewMode: 'grid',
      maps: {} // Use an object to store individual maps
    };
  },
  computed: {
    displayedPartners() {
      return this.partners;
    }
  },
  mounted() {
    if (typeof window !== 'undefined') {
      this.loadMapScript().catch(error => {
        console.error('Error loading Google Maps API:', error);
      });
    }
  },
  methods: {
    changeView(mode) {
      this.viewMode = mode;
      if (mode === 'map') {
        this.initMaps();
      }
    },
    loadMapScript() {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY`;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      }).then(() => this.initMaps());
    },
    initMaps() {
      if (Object.keys(this.maps).length === 0) {
        this.partners.forEach(partner => {
          const mapElement = document.getElementById('map_' + partner.id);

          const partnerMap = new google.maps.Map(mapElement, {
            center: { lat: parseFloat(partner.latitude), lng: parseFloat(partner.longitude) },
            zoom: 10
          });

          new google.maps.Marker({
            position: { lat: parseFloat(partner.latitude), lng: parseFloat(partner.longitude) },
            map: partnerMap,
            title: partner.name
          });

          // Store the map in the maps object
          this.$set(this.maps, partner.id, partnerMap);
        });
      }
    },
    exportPartner(partner) {
      const content = `
        Business: ${partner.name}
        Type: ${partner.type}
        Description: ${partner.description}
        Contact: ${partner.contact}
        Latitude: ${partner.latitude}
        Longitude: ${partner.longitude}
        Link: ${partner.link}
      `;

      if (typeof window !== 'undefined') {
        // Only execute the export if in a client-side environment
        this.exportAsText(content, partner.name);
        // this.exportAsPdf(content, partner.name);
      } else {
        console.warn('Export functionality skipped in non-client environment.');
      }
    },

    exportAsText(content, fileName) {
      const blob = new Blob([content], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${fileName}_info.txt`;
      link.click();
    },

    async exportAsPdf(content, fileName) {
      const pdfOptions = {
        margin: 10,
        filename: `${fileName}_info.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      const pdf = await toPdf(content, pdfOptions);
      const blob = new Blob([pdf], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = pdfOptions.filename;
      link.click();
    },
  }
};

</script>

<style scoped>
/* ... (existing styles) */

/* Additional styles for hover effect */
.group:hover {
  transform: scale(1.05); /* Adjust the scale factor for the desired zoom effect on hover */
}
.partners-list {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.partner-item {
    background-color: #ebf8ff;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    overflow: hidden;
}

.partner-item:hover {
    transform: translateY(-5px);
}

.partner-content {
    padding: 1rem;
    color: #1a202c;
}

.partner-name {
    font-size: 1.25rem;
    color: #2b6cb0;
    font-weight: bold;
}

.partner-details p {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: #4a5568;
    margin: 0.25rem 0;
}

.partner-details p i {
    margin-right: 0.5rem;
}

.location-info {
    display: flex;
    flex-direction: column;
}

@media (prefers-reduced-motion: no-preference) {
    .partner-item {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .partner-item:hover {
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    }
}
.partner-link {
    color: #2b6cb0; /* Adjust the color to fit your design */
    text-decoration: none; /* Removes underline from links */
    transition: color 0.3s ease; /* Smooth color transition for hover effect */
}

.partner-link:hover, .partner-link:focus {
    color: #2c5282; /* Darker shade on hover/focus for better visibility */
    text-decoration: underline; /* Adds underline on hover/focus for clarity */
}


</style>
