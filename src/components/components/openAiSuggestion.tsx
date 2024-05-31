import useOpenAi from '@/hooks/useOpenAi';
import { useEffect } from 'react';
import { FormEvent } from 'react';

interface Props {
  setSuggestionText: (text: string) => void;
}
const OpenAiComponent = ({setSuggestionText}: Props) => {
  const { prompt, setPrompt, response, loading, fetchResponse, } = useOpenAi();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchResponse();
  };
  useEffect(() => {
    if(response)setSuggestionText(response)
  }, [response, setSuggestionText])
  

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <textarea
          className='textarea'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className='stylish-button' type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'generate suggestion'}
        </button>
      </form>
      {response && <div className='suggest-container'>{response}</div>}
      
    </div>
  );
};

export default OpenAiComponent;
