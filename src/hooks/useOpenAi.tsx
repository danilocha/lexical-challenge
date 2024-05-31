import { useState } from 'react';
import axios from 'axios';

interface UseOpenAiReturn {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  setResponse: React.Dispatch<React.SetStateAction<string>>;
  response: string;
  loading: boolean;
  fetchResponse: () => Promise<void>;
}

const useOpenAi = (): UseOpenAiReturn => {
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchResponse = async () => {
    setLoading(true);
    setResponse('');

    try {
      const result = await axios.post('/api/openai', { prompt });
      setResponse(result.data.result.message);
    } catch (error) {
      console.error('Error fetching response from OpenAI:', error);
      setResponse('Error fetching response');
    } finally {
      setLoading(false);
    }
  };

  return {
    prompt,
    setPrompt,
    response,
    loading,
    fetchResponse,
    setResponse
  };
};

export default useOpenAi;
