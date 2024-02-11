import { TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyB0RvW5MieUTO0sCCWaXykGvD9u6g4eA50";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const input = 'hello there';
const promptString = `You are an AI Assistant that helps provide information for users in the following app prompt, KEEP RESPONSES BRIEF:

" a program that allows your school’s Career and Technical Education Department to
collect and store information about local business and community partners. This program
should include information on at least 25 different partners, with details such as, but not
limited to, type of organization, resources available, and direct contact information for an
individual. The program should enable users to search and filter the information as needed. KEEP RESPONSES BRIEF"

So, you should provide any information that the user queries for but make sure it relates to the idea of the app ${input}`;
const stopSequences = [];

client.generateText({
  // required, which model to use to generate the result
  model: MODEL_NAME,
  // optional, 0.0 always uses the highest-probability result
  temperature: 0.7,
  // optional, how many candidate results to generate
  candidateCount: 1,
  // optional, number of most probable tokens to consider for generation
  top_k: 40,
  // optional, for nucleus sampling decoding strategy
  top_p: 0.95,
  // optional, maximum number of output tokens to generate
  max_output_tokens: 1024,
  // optional, sequences at which to stop model generation
  stop_sequences: stopSequences,
  // optional, safety settings
  safety_settings: [{"category":"HARM_CATEGORY_DEROGATORY","threshold":1},{"category":"HARM_CATEGORY_TOXICITY","threshold":1},{"category":"HARM_CATEGORY_VIOLENCE","threshold":2},{"category":"HARM_CATEGORY_SEXUAL","threshold":2},{"category":"HARM_CATEGORY_MEDICAL","threshold":2},{"category":"HARM_CATEGORY_DANGEROUS","threshold":2}],
  prompt: {
    text: promptString,
  },
}).then(result => {
    console.log(JSON.stringify(result, null, 2));
  }).catch(error => {
    console.error("Error:", error);
  });