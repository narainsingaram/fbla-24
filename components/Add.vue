<!-- YourComponent.vue -->

<template>
    <div>
      <label>Name:</label>
      <input v-model="name" placeholder="Enter business name" />
      <label>Type:</label>
      <input v-model="type" placeholder="Enter business type" />
      <label>Contact:</label>
      <input v-model="contact" placeholder="Enter contact person" />
      <label>Latitude:</label>
      <input v-model="latitude" placeholder="Enter latitude" />
      <label>Longitude:</label>
      <input v-model="longitude" placeholder="Enter longitude" />
  
      <button @click="addItem">Add Business</button>
    </div>
  </template>
  

  <script>
  import { database } from '@/config.js'; // adjust the path accordingly
  
  export default {
    data() {
      return {
        name: '',
        type: '',
        contact: '',
        latitude: '',
        longitude: '',
      };
    },
    methods: {
      async addItem() {
        try {
          // Add item to Firestore
          await database.collection('businesses').add({
            name: this.name,
            type: this.type,
            contact: this.contact,
            latitude: parseFloat(this.latitude),
            longitude: parseFloat(this.longitude),
            // other fields if needed
          });
  
          // Clear input after adding
          this.name = '';
          this.type = '';
          this.contact = '';
          this.latitude = '';
          this.longitude = '';
        } catch (error) {
          console.error('Error adding business: ', error);
        }
      },
    },
  };
  </script>