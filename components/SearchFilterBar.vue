<template>
  <div class="search-filter-bar flex flex-col items-center w-full"> <!-- Added w-full to make the container span the entire page -->
    <div class="search-input-wrapper relative w-full my-4"> <!-- Changed w-80 to w-full -->
      <input
        id="search"
        v-model="searchQuery"
        @input="handleSearch"
        @focus="showSuggestions = true"
        @blur="hideSuggestions"
        type="text"
        placeholder="Search for Businesses"
        class="input bg-neutral-focus transition w-full rounded-full pl-4 pr-10 mx-auto"
      />
      <div class="input-icon absolute inset-y-0 right-0 flex items-center">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          aria-hidden="true"
        >
          <path d="M17 10 A7 7 0 0 1 10 17 A7 7 0 0 1 3 10 A7 7 0 0 1 17 10 z" />
          <path d="M21 21l-6-6" />
        </svg>
      </div>
    </div>
    <div v-if="showNoResultsMessage" class="w-96 mx-auto my-4 alert alert-error">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>
        No Results Found.
        <span class="cursor-pointer text-warning-content underline" @click="reloadPage">Try Again</span>
      </span>
    </div>
  </div>
</template>

<script>
import partnersData from '@/assets/partners.json';

export default {
  data() {
    return {
      searchQuery: "",
      showSuggestions: false,
      partners: partnersData
    };
  },
  computed: {
    autocompleteSuggestions() {
      return this.partners
        .filter(partner =>
          partner.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
        .map(partner => partner.name);
    },
    showNoResultsMessage() {
      return this.showSuggestions && this.searchQuery.length > 0 && this.autocompleteSuggestions.length === 0;
    }
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.length > 0) {
        this.showSuggestions = true;
      } else {
        this.showSuggestions = false;
      }
      this.$emit("search", this.searchQuery);
    },
    selectSuggestion(suggestion) {
      this.searchQuery = suggestion; // Set the search query to the selected suggestion
      this.handleSearch(); // Trigger the search to filter the list
      this.hideSuggestions();
    },
    hideSuggestions() {
      setTimeout(() => {
        this.showSuggestions = false;
      }, 200);
    },
    reloadPage() {
      // Reload the page
      location.reload();
    }
  }
};
</script>
