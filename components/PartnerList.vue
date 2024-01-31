<template>
  <div class="bg-base-200 p-8 m-4 rounded-2xl">
    <h2 class="flex-grow text-3xl mb-6 font-bold text-indigo-500">Partners</h2>
    <div class="flex items-center mb-4 space-x-4">
      <button
        @click="changeView('grid')"
        :class="{ 'text-indigo-500 font-semibold underline': viewMode === 'grid' }"
        class="transition-transform transform hover:rounded-xl hover:scale-110 hover:bg-indigo-200 hover:text-white hover:underline"
      >
        <img src="@/assets/grid.png" class="rounded-xl" />
      </button>
      <button
        @click="changeView('list')"
        :class="{ 'text-indigo-500 font-semibold underline': viewMode === 'list' }"
        class="transition-transform transform hover:rounded-xl hover:scale-110 hover:bg-indigo-200 hover:text-white hover:underline"
      >
        <img src="@/assets/list.png" class="rounded-xl" />
      </button>
      <button
        @click="changeView('table')"
        :class="{ 'text-indigo-500 font-semibold underline': viewMode === 'table' }"
      >
        Table
      </button>
      <button
      @click="changeView('map')"
      :class="{ 'text-indigo-500 font-semibold underline': viewMode === 'map' }"
      class="transition-transform transform hover:rounded-xl hover:scale-110 hover:bg-indigo-200 hover:text-white hover:underline"
    >
      Map
    </button>
      
    </div>

    <ul v-if="viewMode === 'grid'" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="partner in partners" :key="partner.id" class="rounded-xl bg-base-300 p-4">
        <!-- Content for Grid View -->
        <h3 class="text-2xl text-base-content font-semibold">{{ partner.name }}</h3>
        <div class="mt-2 text-sm">
          <p class="">ID: {{ partner.id }}</p>
          <p class="text-neutral-content mt-2">Type: {{ partner.type }}</p>
          <p class="text-neutral-content">Contact: {{ partner.contact }}</p>
          <p class="text-neutral-content">Latitude: {{ partner.latitude }}</p>
          <p class="text-neutral-content">Longitude: {{ partner.longitude }}</p>
          <div class="map-container">
            <div :id="'map_' + partner.id" class="h-64"></div>
          </div>
        </div>
        <a :href="'#my_modal_' + partner.id" class="btn btn-primary my-6 lowercase mr-2">View in Detail</a>
        <button class="btn btn-secondary ml-2 lowercase">
          Export
          <div class="badge badge-accent">beta</div>
        </button>
        <section>
          <div class="badge badge-info gap-2 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-4 h-4 stroke-current"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            {{ partner.type }}
          </div>
          <div class="badge badge-success gap-2 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-4 h-4 stroke-current"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            {{ partner.contact }}
          </div>
          <div class="badge badge-warning gap-2 mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-4 h-4 stroke-current"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            {{ partner.latitude }}
          </div>
          <div class="badge badge-error gap-2 mx-2 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-4 h-4 stroke-current"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            {{ partner.longitude }}
          </div>
        </section>
        <!-- Modal for this grid item -->
        <div class="modal" :id="'my_modal_' + partner.id">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Business: {{ partner.name }}</h3>
            <p class="py-4">Type: {{ partner.type }}</p>
            <p class="py-4">Contact: {{ partner.contact }}</p>
            <p class="py-4">Latitude: {{ partner.latitude }}</p>
            <p class="py-4">Longitude: {{ partner.longitude }}</p>
            <div class="modal-action">
              <a href="#" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</a>
            </div>
          </div>
        </div>
      </li>
    </ul>

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
  mounted() {
  this.loadMapScript().catch(error => {
    console.error('Error loading Google Maps API:', error);
  });
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
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAFq69d34t2H2ufrWFgwJYIjqPYZGoq03w`;
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
    }
  }
};
</script>
