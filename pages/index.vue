<template>
  <div data-theme="winter">
    <!-- Assuming Header, AiChat, SearchFilterBar, and PartnerList components are properly defined -->
    <Header></Header>
      <!-- Content -->
  <div class="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
    <!-- Page Heading -->
      <SearchFilterBar @search="performSearch" />
      <PartnerList :partners="filteredPartners" />
    <!-- End Page Heading -->
  </div>
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
