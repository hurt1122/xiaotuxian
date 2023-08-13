<template>
  <div>
    <textarea v-model="prompt" rows="5" cols="50"></textarea>
    <button @click="generateText">Generate Text</button>
    <p>{{ generatedText }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      prompt: "",
      generatedText: ""
    };
  },
  methods: {
    async generateText() {
      const api_key = "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"; // 替换为您的API密钥
      const endpoint = "https://api.openai.com/v1/engines/davinci/completions"; // 使用 davinci 引擎

      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${api_key}`
      };

      const data = {
        prompt: this.prompt,
        max_tokens: 50
      };

      try {
        const response = await axios.post(endpoint, data, { headers });
        this.generatedText = response.data.choices[0].text;
      } catch (error) {
        console.error("Error generating text:", error);
        this.generatedText = "An error occurred.";
      }
    }
  }
};
</script>
<!-- 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 -->