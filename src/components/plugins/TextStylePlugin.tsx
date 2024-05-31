import React, { useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $createRedLineNode } from '@/components/nodes/RedLineNode';
import { $getSelection, $isRangeSelection } from 'lexical';
import RedLineModal from '@/components/components/RedLineModal';

const EditorComponent: React.FC = () => {
  const [editor] = useLexicalComposerContext();
  const [showModal, setShowModal] = useState(false);

  const handleApprove = () => {
    editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const selectedText = selection.getTextContent();
          const redLineNode = $createRedLineNode(selectedText);
          selection.insertNodes([redLineNode]);
        }
      });
      setShowModal(false);
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && <RedLineModal onApprove={handleApprove} onCancel={handleCancel} />}
      <button className='stylish-button'  onClick={() => setShowModal(true)}>Open Red Line Modal</button>
    </div>
  );
};

export default EditorComponent;
