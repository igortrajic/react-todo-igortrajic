export function ErrorPopUp({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) {
  return (
    <div className="ErrorMessage">
      <span>{message}</span>
      <button onClick={onClose} className="errorMessageButton">
        Close
      </button>
    </div>
  );
}
