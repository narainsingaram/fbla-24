<template>
  <div class="bg-base-200 p-8 m-4 rounded-2xl">
    <h2 class="flex-grow text-3xl mb-6 font-bold text-indigo-500">Partners</h2>
    <div class="flex items-center mb-4 space-x-4">
      <button
        @click="changeView('grid')"
        :class="{ 'text-indigo-500 font-semibold underline': viewMode === 'grid' }"
        class="transition-transform transform hover:rounded-xl hover:scale-110 hover:bg-indigo-200 hover:text-white hover:underline"
      >
        Grid
      </button>
      <button
        @click="changeView('list')"
        :class="{ 'text-indigo-500 font-semibold underline': viewMode === 'list' }"
        class="transition-transform transform hover:rounded-xl hover:scale-110 hover:bg-indigo-200 hover:text-white hover:underline"
      >
        List
      </button>
      <button
        @click="changeView('table')"
        :class="{ 'text-indigo-500 font-semibold underline': viewMode === 'table' }"
      >
        Table
      </button>
    </div>

    <div v-if="viewMode === 'grid'" class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card Blog -->
        <div v-for="partner in displayedPartners" :key="partner.id" class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] transition duration-300 ease-in-out transform hover:shadow-lg">
          <div class="h-52 relative rounded-t-xl overflow-hidden">
            <img :src="partner.image" alt="Partner Image" class="w-full h-full object-cover">
          </div>
          <div class="p-4 md:p-6">
            <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
              {{ partner.type }}
            </span>
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
              {{ partner.name }}
            </h3>
            <p class="mt-3 text-white">
              {{ partner.description }}
            </p>
          </div>
          <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <a :href="'#my_modal_' + partner.id" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              View in Detail
            </a>
            <button @click="exportPartner(partner)" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Export Info
            </button>
          </div>
          <!-- Modal for this grid item -->
          <div :id="'my_modal_' + partner.id" class="modal flex items-center justify-center bg-black bg-opacity-50">
            <div class="modal-box bg-white p-8 rounded-lg shadow-lg">
              <h3 class="font-bold text-2xl mb-4">Business: {{ partner.name }}</h3>
              <p class="py-2">Type: {{ partner.type }}</p>
              <p class="py-2">Description: {{ partner.description }}</p>
              <p class="py-2">Contact: {{ partner.contact }}</p>

              <!-- Add more details as needed -->
              <h4 class="py-2 text-2xl">Any Questions?</h4>
              <FeedbackAi></FeedbackAi>
              <div class="modal-action">
                <a href="#" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</a>
              </div>
            </div>
          </div>
        </div>
        <!-- End Card Blog -->
      </div>
    </div>

    <!-- Your existing list, map, and table views remain unchanged -->

    <ul v-else-if="viewMode === 'list'" class="space-y-4">
      <li v-for="partner in partners" :key="partner.id" class="bg-blue-100 rounded-lg shadow-md p-4">
        <!-- Content for List View -->
        <h3 class="text-xl text-black font-semibold">{{ partner.name }}</h3>
        <p class="text-gray-600">Type: {{ partner.type }}</p>
        <p class="text-gray-600">Contact: {{ partner.contact }}</p>
        <p class="text-gray-600">Latitude: {{ partner.latitude }}</p>
        <p class="text-gray-600">Longitude: {{ partner.longitude }}</p>
      </li>
    </ul>

    <!-- Map View-->

    <div v-if="viewMode === 'map'" class="map-container">
      <div id="map" class="h-64"></div>
    </div>

    <!-- Table view -->
    <table v-else-if="viewMode === 'table'" class="min-w-full divide-y divide-gray-200">
      <thead class="bg-indigo-700 text-white p-4">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Contact</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Latitude</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Longitude</th>
        </tr>
      </thead>
      <tbody class="bg-gray-900 divide-y divide-indigo-700">
        <tr v-for="partner in partners" :key="partner.id">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-indigo-100">{{ partner.name }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-indigo-300">{{ partner.type }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-indigo-300">{{ partner.contact }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-indigo-300">{{ partner.latitude }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-indigo-300">{{ partner.longitude }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
</style>
