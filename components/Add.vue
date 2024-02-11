<template>
  <form @submit.prevent="submitForm">
    <label>Address: <input type="text" v-model="address" /></label><br/>
    <label>Contact: <input type="text" v-model="contact" /></label><br/>
    <label>Description: <textarea v-model="description"></textarea></label><br/>
    <label>ID: <input type="text" v-model="id" /></label><br/>
    <label>Image: <input type="text" v-model="image" /></label><br/>
    <label>Latitude: <input type="number" v-model="latitude" /></label><br/>
    <label>Link: <input type="text" v-model="link" /></label><br/>
    <label>Longitude: <input type="number" v-model="longitude" /></label><br/>
    <label>Name: <input type="text" v-model="name" /></label><br/>
    <label>Type: <input type="text" v-model="type" /></label><br/>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

import { db } from '@/config'; // Path to your firebase.js file

export default {
  data() {
    return {
      address: '',
      contact: '',
      description: '',
      id: '',
      image: '',
      latitude: null,
      link: '',
      longitude: null,
      name: '',
      type: ''
    };
  },
  methods: {
    submitForm() {
      // Generate a unique ID using Firebase's Firestore ID generator
      const generatedId = db.collection('business').doc().id;

      db.collection('business').doc(generatedId).set({
        address: this.address,
        contact: this.contact,
        description: this.description,
        id: generatedId,
        image: this.image,
        latitude: this.latitude,
        link: this.link,
        longitude: this.longitude,
        name: this.name,
        type: this.type
      })
      .then(() => {
        console.log('Document successfully written!');
        // Reset form fields if needed
        this.address = '';
        this.contact = '';
        this.description = '';
        this.id = '';
        this.image = '';
        this.latitude = null;
        this.link = '';
        this.longitude = null;
        this.name = '';
        this.type = '';
      })
      .catch(error => {
        console.error('Error writing document: ', error);
      });
    }
  }
}
</script>
