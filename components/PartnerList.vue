<template>
      <ul class="mt-8 flex flex-col justify-center items-center sm:flex-row">
        <li class="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg">
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path fill="none" d="M7.228,11.464H1.996c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232
		c0.723,0,1.308-0.586,1.308-1.308v-5.232C8.536,12.051,7.95,11.464,7.228,11.464z M7.228,17.351c0,0.361-0.293,0.654-0.654,0.654
		H2.649c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z
		 M17.692,11.464H12.46c-0.723,0-1.308,0.587-1.308,1.309v5.232c0,0.722,0.585,1.308,1.308,1.308h5.232
		c0.722,0,1.308-0.586,1.308-1.308v-5.232C19,12.051,18.414,11.464,17.692,11.464z M17.692,17.351c0,0.361-0.293,0.654-0.654,0.654
		h-3.924c-0.361,0-0.654-0.293-0.654-0.654v-3.924c0-0.361,0.293-0.654,0.654-0.654h3.924c0.361,0,0.654,0.293,0.654,0.654V17.351z
		 M7.228,1H1.996C1.273,1,0.688,1.585,0.688,2.308V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232c0.723,0,1.308-0.585,1.308-1.308
		V2.308C8.536,1.585,7.95,1,7.228,1z M7.228,6.886c0,0.361-0.293,0.654-0.654,0.654H2.649c-0.361,0-0.654-0.292-0.654-0.654V2.962
		c0-0.361,0.292-0.654,0.654-0.654h3.924c0.361,0,0.654,0.292,0.654,0.654V6.886z M17.692,1H12.46c-0.723,0-1.308,0.585-1.308,1.308
		V7.54c0,0.723,0.585,1.308,1.308,1.308h5.232C18.414,8.848,19,8.263,19,7.54V2.308C19,1.585,18.414,1,17.692,1z M17.692,6.886
		c0,0.361-0.293,0.654-0.654,0.654h-3.924c-0.361,0-0.654-0.292-0.654-0.654V2.962c0-0.361,0.293-0.654,0.654-0.654h3.924
		c0.361,0,0.654,0.292,0.654,0.654V6.886z"></path>
            </svg>
          <button
          @click="changeView('grid')"
          :class="{ 'text-indigo-600 font-semibold underline': viewMode === 'grid' }"
          class="transition-transform transform hover:rounded-xl hover:scale-110 hover:text-green-600"
        >
          Card
        </button>
        </li>
        <li class="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg">
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.6 18.6" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10,1.529c-4.679,0-8.471,3.792-8.471,8.471c0,4.68,3.792,8.471,8.471,8.471c4.68,0,8.471-3.791,8.471-8.471C18.471,5.321,14.68,1.529,10,1.529 M10,17.579c-4.18,0-7.579-3.399-7.579-7.579S5.82,2.421,10,2.421S17.579,5.82,17.579,10S14.18,17.579,10,17.579 M14.348,10c0,0.245-0.201,0.446-0.446,0.446h-5c-0.246,0-0.446-0.201-0.446-0.446s0.2-0.446,0.446-0.446h5C14.146,9.554,14.348,9.755,14.348,10 M14.348,12.675c0,0.245-0.201,0.446-0.446,0.446h-5c-0.246,0-0.446-0.201-0.446-0.446s0.2-0.445,0.446-0.445h5C14.146,12.229,14.348,12.43,14.348,12.675 M7.394,10c0,0.245-0.2,0.446-0.446,0.446H6.099c-0.245,0-0.446-0.201-0.446-0.446s0.201-0.446,0.446-0.446h0.849C7.194,9.554,7.394,9.755,7.394,10 M7.394,12.675c0,0.245-0.2,0.446-0.446,0.446H6.099c-0.245,0-0.446-0.201-0.446-0.446s0.201-0.445,0.446-0.445h0.849C7.194,12.229,7.394,12.43,7.394,12.675 M14.348,7.325c0,0.246-0.201,0.446-0.446,0.446h-5c-0.246,0-0.446-0.2-0.446-0.446c0-0.245,0.2-0.446,0.446-0.446h5C14.146,6.879,14.348,7.08,14.348,7.325 M7.394,7.325c0,0.246-0.2,0.446-0.446,0.446H6.099c-0.245,0-0.446-0.2-0.446-0.446c0-0.245,0.201-0.446,0.446-0.446h0.849C7.194,6.879,7.394,7.08,7.394,7.325"></path>          
          </svg>  
            <button
            @click="changeView('list')"
          :class="{ 'text-indigo-600 font-semibold underline': viewMode === 'list' }"
          class="transition-transform transform hover:rounded-xl hover:scale-110 hover:text-green-600"
        >
          List
        </button>
        </li>
        <li class="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg">
          <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <button
          @click="changeView('table')"
          :class="{ 'text-indigo-600 font-semibold underline': viewMode === 'table' }"
          class="transition-transform transform hover:rounded-xl hover:scale-110 hover:text-green-600 "
        >
          Directory
        </button>
        </li>
      </ul>

      <div v-if="viewMode === 'grid'" class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Card Blog -->
          <div v-for="partner in displayedPartners" :key="partner.id" class="group flex flex-col h-full bg-slate-50 border-4 border-black-200 shadow-sm rounded-xl transition duration-300 ease-in-out transform hover:shadow-lg">
            <div class="h-52 relative rounded-t-xl overflow-hidden">
              <img :src="partner.image" alt="Partner Image" class="w-full h-full object-cover">
            </div>
            <div class="p-4 md:p-6">
            <a :href="partner.link" target="_blank" style="text-decoration: none; color: inherit;">
              <span :class="{
                'text-green-500': partner.type === 'Non-Profit Organization',
                'text-yellow-500': partner.type === 'Restaurant',
                'text-red-500': partner.type === 'Attraction'
              }" class="block mb-1 text-xs font-semibold uppercase">
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

      hi
      
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
      <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase">Contact</th>
      <th scope="col" class="px-6 py-3 text-left text-sm font-semibold uppercase">Address</th>
    </tr>
  </thead>
  <tbody class="divide-y divide-gray-200">
    <tr v-for="partner in partners" :key="partner.id" class="bg-white hover:bg-gray-100">
      <td class="px-6 py-4 whitespace-nowrap">{{ partner.name }}</td>
      <td class="px-6 py-4 whitespace-nowrap">{{ partner.contact }}</td>
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

.group {
  border: 2px solid transparent; /* Add a transparent border */
  transition: border-color 0.3s ease; /* Smooth transition for border color change */
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
