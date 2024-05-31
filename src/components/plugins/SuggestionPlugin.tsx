import React, { useState } from 'react';
import { $createSuggestionNode } from '../nodes/SuggestionNode';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection } from 'lexical';
import OpenAiComponent from '../components/openAiSuggestion';
import useOpenAi from '@/hooks/useOpenAi';

const InsertSuggestionComponent: React.FC = () => {
  const [editor] = useLexicalComposerContext();
  const [suggestionText, setSuggestionText] = useState('');

  const insertSuggestion = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const suggestionNode = $createSuggestionNode(suggestionText);
        selection.insertNodes([suggestionNode]);
      }
    });
  };

  return (
    <div className='suggestionContainer'>
      <h2>Hello, I&apos;m floubot AI</h2>
      <p>I&apos;m here to help you with your contract, tell me who is involved and what you want to achieve with your agreement.</p>
      <OpenAiComponent setSuggestionText={(value: string) => setSuggestionText(value)} />
      {suggestionText && (
        <div>
        <button className='stylish-button' onClick={insertSuggestion}>Insert Suggestion</button>
        </div>
      )}
    </div>
  );
};

export default InsertSuggestionComponent;