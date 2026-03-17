// file:    src/components/customYN.tsx

interface Props {
  message: React.ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function CustomConfirm({ message, onConfirm, onCancel }: Props) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <p>{message}</p>
        <div className="modal-buttons">
          <button className="my-buttonYN" onClick={onConfirm}>Yes</button>
          <button className="my-buttonYN" onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}