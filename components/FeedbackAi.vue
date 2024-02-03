<template>
    <div class="join mb-4">
      <input v-model="userInput" placeholder="Enter your input" class="w-full p-2 border border-gray-300 rounded-md" />
      <button @click="generateResponse" class="bg-blue-500 text-white py-2 px-4 rounded-md">Generate Response</button>
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
    <div v-else-if="generatedContent" class="mt-6">
      <!-- Display generated content when available -->
      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="User Avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div class="chat-header">
          User
          <time class="text-xs opacity-50">{{ getCurrentTime() }}</time>
        </div>
        <div class="chat-bubble">{{ userInput }}</div>
      </div>
      <div class="chat chat-end">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img alt="Bot Avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div class="chat-header">
          AI Bot
          <time class="text-xs opacity-50">{{ getCurrentTime() }}</time>
        </div>
        <div class="chat-bubble">{{ generatedContent }}</div>
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
    getCurrentTime() {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      return `${hours}:${minutes}`;
    },
  },
};
</script>
