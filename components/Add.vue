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

