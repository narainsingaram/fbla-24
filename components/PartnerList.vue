<template>
  <div class="bg-base-200 p-8 m-4 rounded-2xl">
      <h2 class="flex-grow text-3xl mb-6 font-bold text-indigo-500">Partners</h2>
    <div class="flex items-center mb-4 space-x-4">
      <button @click="changeView('grid')" :class="{ 'text-indigo-500 font-semibold underline': viewMode === 'grid' }">Grid</button>
      <button @click="changeView('list')" :class="{ 'text-indigo-500 font-semibold underline': viewMode === 'list' }">List View</button>
      <button @click="changeView('card')" :class="{ 'text-indigo-500 font-semibold underline': viewMode === 'card' }">Card</button>
      <button @click="changeView('table')" :class="{ 'text-indigo-500 font-semibold underline': viewMode === 'table' }">Table</button>
    </div>
    
      <ul v-if="viewMode === 'grid'" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li v-for="partner in partners" :key="partner.id" class="rounded-xl bg-base-300 p-4">
          <!-- Content for Grid View -->
          <h3 class="text-2xl text-base-content font-semibold">{{ partner.name }}</h3>
          <div class="mt-2 text-sm">
            <p class="text-neutral-content mt-2">Type: {{ partner.type }}</p>
            <p class="text-neutral-content">Contact: {{ partner.contact }}</p>
            <p class="text-neutral-content">Latitude: {{ partner.latitude }}</p>
            <p class="text-neutral-content">Longitude: {{ partner.longitude }}</p>
          </div>
          <a :href="'#my_modal_' + partner.id" class="btn btn-primary my-6 lowercase">View in Detail</a>
            <section>
            <div class="badge badge-info gap-2 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              {{ partner.type }}
            </div>
            <div class="badge badge-success gap-2 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              {{ partner.contact }}
            </div>
            <div class="badge badge-warning gap-2 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              {{ partner.latitude }}
            </div>
            <div class="badge badge-error gap-2 mx-2 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              {{ partner.longitude }}
            </div>
          </section>
          <!-- Modal for this grid item -->
          <div class="modal" :id="'my_modal_' + partner.id">
            <div class="modal-box">
              <h3 class="font-bold text-lg">Business: {{ partner.name }}</h3>
              <p class="py-4">Contact: {{ partner.contact }}</p>
              <div class="modal-action">
                <a href="#" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">x</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      
    <ul v-else-if="viewMode === 'list'" class="space-y-4">
      <li v-for="partner in partners" :key="partner.id" class="bg-white rounded-lg shadow-md p-4">
        <!-- Content for List View -->
        <h3 class="text-xl font-semibold">{{ partner.name }}</h3>
        <p class="text-gray-600">Type: {{ partner.type }}</p>
        <p class="text-gray-600">Contact: {{ partner.contact }}</p>
      </li>
    </ul>
    <ul v-else-if="viewMode === 'card'" class="space-y-4">
      <li v-for="partner in partners" :key="partner.id" class="bg-white border rounded-xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-l-xl sm:max-w-[15rem] md:rounded-tr-none md:max-w-xs">
          <!-- Image -->
          <img class="w-full h-full absolute top-0 left-0 object-cover" :src="partner.imageSrc" :alt="partner.name">
        </div>
        <div class="flex flex-wrap">
          <div class="p-4 flex flex-col h-full sm:p-7">
            <!-- Content for Card View -->
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
              {{ partner.name }}
            </h3>
            <p class="mt-1 text-gray-800 dark:text-gray-400">
              {{ partner.description }}
            </p>
            <div class="mt-5 sm:mt-auto">
              <p class="text-xs text-gray-500 dark:text-gray-500">
                Last updated 5 mins ago
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- Table view -->
<table v-else-if="viewMode === 'table'" class="min-w-full divide-y divide-gray-200">
  <thead class="bg-gray-100">
    <tr>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Name
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Type
      </th>
      <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Contact
      </th>
    </tr>
  </thead>
  <tbody class="bg-white divide-y divide-gray-200">
    <tr v-for="partner in partners" :key="partner.id">
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-900">{{ partner.name }}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-500">{{ partner.type }}</div>
      </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="text-sm text-gray-500">{{ partner.contact }}</div>
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
      viewMode: 'grid'
    };
  },
  methods: {
    changeView(mode) {
      this.viewMode = mode;
    }
  }
};
</script>
