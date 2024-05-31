import React from 'react';

interface RedLineModalProps {
  onApprove: () => void;
  onCancel: () => void;
}

const RedLineModal: React.FC<RedLineModalProps> = ({ onApprove, onCancel }) => {
  return (
    <div className="modal-background" onClick={onCancel}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <p>Do you want to apply a red line style?</p>
        <button className='stylish-button-modal' onClick={onApprove}>Approve</button>
        <button className='stylish-button-modal' onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default RedLineModal;