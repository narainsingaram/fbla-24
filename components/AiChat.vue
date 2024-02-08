<template>
  <div class="relative h-screen">
    <div class="py-10 lg:py-14">
      <!-- Title -->
      <div class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
        <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">
          Welcome to Preline AI
        </h1>
        <p class="mt-3 text-gray-600">
          Your AI-powered copilot for the web
        </p>
      </div>
      <!-- End Title -->

      <!-- Chat Content -->
      <div class="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto mt-8 space-y-8">
        

        <div class="relative fixed bottom-0 left-0 w-full">
          <div class="mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative">
              <input v-model="userInput" type="text" class="p-4 w-full border-2 border-slate-200 rounded-full text-sm focus:border-blue-200" placeholder="Ask me anything...">
              <div class="absolute top-1/2 end-2 -translate-y-1/2">
                <button @click="generateResponse" type="button" class="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                  <svg class="flex-shrink-0 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        

        <!-- Loading Skeleton -->
        <div v-if="loading" class="max-w-sm animate-pulse">
          <div role="status" class="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          <div class="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
          <div class="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
          <span class="sr-only">Loading...</span>
        </div>

        <!-- Chat History -->
        <div v-if="chatHistory.length" class="space-y-4">
          <div v-for="chatItem in chatHistory" :key="chatItem.id" :class="{'chat-start': chatItem.role === 'bot', 'chat-end': chatItem.role === 'user'}">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                <img :alt="chatItem.role === 'bot' ? 'Bot Avatar' : 'User Avatar'" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div class="chat-header">
              {{ chatItem.role === 'bot' ? 'AI Bot' : 'User' }}
              <time class="text-xs opacity-50">{{ chatItem.time }}</time>
            </div>
            <div class="bg-slate-100 border border-gray-200 rounded-2xl p-3 space-y-2">{{ chatItem.text }}</div>
          </div>
        </div>
      </div>
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
      chatHistory: [],
      originalUserInput: "", // Store original user input separately
    };
  },
  methods: {
    async generateResponse() {
      this.loading = true;
      this.originalUserInput = this.userInput; // Store original user input before generating response

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

      const parts = [
        { text: "Kyle, as an AI assisting CTAE (Career, Technical, and Agricultural Education) individuals in schools, provide concise yet informative responses about business and community organizations relevant to their field" },
        { text: this.userInput }
      ];

      try {
        const result = await model.generateContent({
          contents: [{ role: "user", parts }],
          generationConfig,
          safetySettings,
        });

        const response = result.response;
        // Format the generated content with HTML markup
        const generatedText = response.text()
          .replace(/\n/g, "<br>") // Convert newline characters to HTML line breaks
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // Wrap text between double asterisks with <strong> tags
        
        // Add the user's input to chat history
        this.chatHistory.push({
          id: Date.now(), // Unique identifier for each chat item
          role: 'user',
          time: this.getCurrentTime(),
          text: this.userInput
        });
        // Add the bot's response to chat history
        this.chatHistory.push({
          id: Date.now() + 1,
          role: 'bot',
          time: this.getCurrentTime(),
          text: generatedText
        });
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
