<template>
    <div class="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 class="text-2xl font-bold mb-4">AI Chat</h1>
      <div class="mb-4">
        <input v-model="userInput" placeholder="Enter your input" class="w-full p-2 border border-gray-300 rounded-md" />
      </div>
      <div>
        <button @click="generateResponse" class="bg-blue-500 text-white py-2 px-4 rounded-md">Generate Response</button>
      </div>
      <div v-if="loading" class="mt-6">
        <!-- Loading skeleton -->
        <div class="animate-pulse">
          <p class="font-bold text-gray-700">User Input: Loading...</p>
          <p class="font-bold text-gray-700">Generated Response: Loading...</p>
        </div>
      </div>
      <div v-else-if="generatedContent" class="mt-6">
        <!-- Display generated content when available -->
        <p class="font-bold text-gray-700">User Input: {{ userInput }}</p>
        <p class="font-bold text-gray-700">Generated Response: {{ generatedContent }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
  
  export default {
    data() {
      return {
        userInput: "",
        generatedContent: null,
        loading: false,
      };
    },
    methods: {
      async generateResponse() {
        this.loading = true;
  
        const MODEL_NAME = "gemini-pro";
        const API_KEY = "AIzaSyB0RvW5MieUTO0sCCWaXykGvD9u6g4eA50";
  
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  
        const generationConfig = {
          temperature: 0.9,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        };
  
        const safetySettings = [
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
          },
        ];
  
        const parts = [{ text: this.userInput }];
  
        try {
          const result = await model.generateContent({
            contents: [{ role: "user", parts }],
            generationConfig,
            safetySettings,
          });
  
          const response = result.response;
          this.generatedContent = response.text();
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  