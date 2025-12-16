import { useState } from 'react';

interface EditableFieldProps {
  initialValue: string;
  onSave: (newValue: string) => void;
  inputType?: 'input' | 'textarea';
  htmlType?: 'text' | 'date';
  placeholder?: string;
}

export default function EditableField({
  initialValue,
  placeholder,
  onSave,
  inputType = 'input',
  htmlType = 'text',
}: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleFinish = () => {
    setIsEditing(false);
    if (value.trim() !== initialValue) {
      onSave(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputType === 'input') {
      e.preventDefault();
      handleFinish();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setValue(initialValue);
    }
  };
  if (isEditing) {
    return inputType === 'textarea' ? (
      <textarea
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleFinish}
        onKeyDown={handleKeyDown}
      />
    ) : (
      <input
        autoFocus
        type={htmlType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleFinish}
        onKeyDown={handleKeyDown}
      />
    );
  }
  return (
    <div onClick={() => setIsEditing(true)}>
      {initialValue || <span style={{ opacity: 0.5 }}>{placeholder}</span>}
    </div>
  );
}
