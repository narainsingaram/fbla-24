<template>
  <div data-theme="coffee">
    <!-- Assuming Header, AiChat, SearchFilterBar, and PartnerList components are properly defined -->
    <Header></Header>
    <Add></Add>
    <router-link to="/qa">Go to New Page</router-link>
    <SearchFilterBar @search="performSearch" />
    <PartnerList :partners="filteredPartners" />
  </div>
</template>

<script setup lang="ts">
import testData from "@/backup.json";

const organizations = ref(testData.__collections__?.businesses || {});
const searchQuery = ref("");

const filteredPartners = computed(() => {
  return Object.values(organizations.value).filter(partner => {
    return (
      partner.contact.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      partner.type.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      partner.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});

function performSearch(query: string) {
  searchQuery.value = query;
}
</script>
