<template>
    <div>
    <div>
        <label for="prompt">Enter a prompt:</label>
        <textarea id="prompt" v-model="prompt" rows="5" cols="40"></textarea>
    </div>
    <div>
        <button @click="generateText">Generate Text</button>
    </div>
    <div>
        <h2>Generated Text:</h2>
        <pre>{{ generatedText }}</pre>
    </div>
    </div>
</template>
<!-- 
<script>
import indexModule from '../index.js';

export default {
    data() {
    return {
        prompt: '', // Store user input here
        generatedText: '', // Store generated text here
    };
    },
    methods: {
  generateText() {
    // Send user input to index.js and receive the response
    const userInput = this.prompt; // Get user input
    // Call the generateTextFromInput function from index.js and handle the response
    indexModule.generateTextFromInput(userInput)
      .then((response) => {
        this.generatedText = response; // Update generatedText with the response
      })
      .catch((error) => {
        console.error(error);
        this.generatedText = 'Error generating text.';
      });
  },
},

};
</script> -->

<style>
/* Add your CSS styles here if needed */
</style>
