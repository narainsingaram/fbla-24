<template>
  <div class="search-filter-bar flex flex-col items-center mx-8">
    <div class="search-input-wrapper relative w-9/12 my-4">
      <input
        id="search"
        v-model="searchQuery"
        @input="handleSearch"
        @focus="showSuggestions = true"
        @blur="hideSuggestions"
        type="text"
        placeholder="Search for Businesses"
        class="input py-3 px-4 block w-full bg-gray-100 border-transparent rounded-xl text-sm disabled:opacity-50 disabled:pointer-events-none  dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600 transition-transform duration-300 transform hover:translate-y-0.5"
      />
      <div class="input-icon absolute inset-y-0 right-0 flex items-center mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </div>
      <button @click="startVoiceSearch" 
        class="input-icon absolute inset-y-0 right-10 flex items-center mr-4 voice-search-button">
        <svg height="21px" version="1.1" viewBox="0 0 14 21" width="14px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Icons-AV" transform="translate(-3.000000, -43.000000)">
          <g id="mic" transform="translate(3.000000, 43.500000)">
            <path d="M7,12 C8.7,12 10,10.7 10,9 L10,3 C10,1.3 8.7,0 7,0 C5.3,0 4,1.3 4,3 L4,9 C4,10.7 5.3,12 7,12 L7,12 Z M12.3,9 C12.3,12 9.8,14.1 7,14.1 C4.2,14.1 1.7,12 1.7,9 L0,9 C0,12.4 2.7,15.2 6,15.7 L6,19 L8,19 L8,15.7 C11.3,15.2 14,12.4 14,9 L12.3,9 L12.3,9 Z" id="Shape"/></g></g></g></svg>      
      </button>
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
import partnersData from '@/backup.json';

export default {
  data() {
    return {
      searchQuery: "",
      showSuggestions: false,
      partners: Array.isArray(partnersData) ? partnersData : []
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
    },
    startVoiceSearch() {
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const voiceInput = event.results[0][0].transcript;
      this.searchQuery = voiceInput;
      this.handleSearch();
      this.hideSuggestions();
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.onnomatch = (event) => {
      console.log('No match found for speech input:', event);
    };

    recognition.start();
  } else {
    console.error('Speech recognition is not supported in this browser.');
  }
}

  }
};
</script>