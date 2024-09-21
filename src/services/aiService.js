import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const checkFactsWithAI = async (content, facts) => {
  try {
    const prompt = `This is the context from the notion document:
${facts}

This is the user content that has to be fact checked:
${content}

If there is anything in the user content that does not match or contradicts the context from the notion document, please point them out and suggest corrections.Do not use external knowledge in determining contradictions. If there are no contradictions, please respond with "No contradictions found."`;

    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: prompt,
      max_tokens: 150,
    });

    return response.choices[0].text.trim().split('\n');
  } catch (error) {
    console.error('Error checking facts with AI:', error);
    return ['Error checking facts. Please try again.'];
  }
};