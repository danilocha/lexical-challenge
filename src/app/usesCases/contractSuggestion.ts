import OpenAI from 'openai';
interface Options {
  prompt: string;
}

export const ContractSuggestion = async (
  openai: OpenAI,
  options: Options,
) => {
  const { prompt } = options;
  console.log(prompt)

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `
        Quiero que respondas como un abogado experto en musica, vas a recibir unas caracteristicas y con eso debes generar un contrato
        `,
      },
      { role: 'user', content: prompt },
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0.3,
  });
  const res = {message: completion.choices[0].message.content}
  return res;
};