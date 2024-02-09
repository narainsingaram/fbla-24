<template>
  <div class="relative mt-2 fixed bottom-0 left-0 w-full">
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative">
        <input v-model="userInput" type="text" class="p-4 w-full border-2 border-slate-200 rounded-full text-sm focus:border-blue-200" placeholder="Ask me anything...">
        <div class="absolute top-1/2 end-2 -translate-y-1/2">
          <button @click="generateResponse" type="button" class="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
            <svg class="w-5 h-5 text-slate-600 hover:text-slate-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
    <div>
    </div>
    <div v-if="loading" class="mt-6">
      <!-- Loading skeleton -->
      <div role="status" class="max-w-sm animate-pulse">
        <div class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
        <span class="sr-only">Loading...</span>
    </div>
    </div>
    <div v-else-if="generatedContent" class="mt-6 flex justify-center items-center">
      <!-- Display generated content when available -->
        <div role="alert" class="alert bg-blue-400 text-blue-100 mx-4 text-center">{{ generatedContent }}</div>
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
    getCurrentTime() {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      return `${hours}:${minutes}`;
    },
  },
};
</script>
