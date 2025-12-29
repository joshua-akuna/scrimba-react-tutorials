import { InferenceClient } from '@huggingface/inference';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Accessing the variable using Vite's specific syntax
const GeminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GeminiApiKey);

export const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

const userPromt = `You are an assistant that receives a list of ingredients that a user has and suggests a Nigerian recipe they could make with some or all of those ingredients. You dont need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page. The following ingredients include:`;

export const getGeminiRecipe = async function (ingredients) {
  try {
    // creates a prompt for a AI
    const newPrompt = `${userPromt} ${ingredients.join(', ')}.`;
    /* console.log(newPrompt); */
    // pass the propmt to the gemini api model
    const result = await model.generateContent(newPrompt);
    // get a response
    const response = await result.response;
    // return the response
    return response.text;
  } catch (error) {
    // error handling
    console.error('Gemini API Error:', error);
    return `# 500: Error generating recipe`;
  }
};

const HfAccessToken = import.meta.env.VITE_HF_ACCESS_TOKEN;
// checks for an access token
if (!HfAccessToken) {
  console.error('HF token not found.');
}
const client = new InferenceClient(HfAccessToken);

export async function getHFRecipe(ingredients) {
  try {
    // console.log(`${HfAccessToken}`);
    // We use the text generation task for open ended creative tasks like recipe generation
    const recipe = await client.textGeneration({
      model: 'gpt2',
      inputs: `${userPromt} ${ingredients.join(', ')}`,
      parameters: { max_new_tokens: 100 },
    });
    return recipe.generated_text;
  } catch (error) {
    console.error(`Error generating recipe: ${error}`);
    return 'Failed to generate recipe.';
  }
}

import { GoogleGenAI } from '@google/genai';
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
console.log('GEMINI_API_KEY: ', GEMINI_API_KEY);

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function geminiRecipe(ingredients) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `${userPromt} ${ingredients.join(', ')}`,
    });
    return response.text;
  } catch (error) {
    // error handling
    console.error('Gemini API Error:', error);
    return `# 500: Error generating recipe`;
  }
}
