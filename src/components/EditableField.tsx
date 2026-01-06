import { useState } from 'react';

interface EditableFieldProps {
  initialValue: string;
  onSave: (newValue: string) => void;
  inputType?: 'input' | 'textarea';
  htmlType?: 'text' | 'date';
  placeholder?: string;
  required?: boolean;
}

export default function EditableField({
  initialValue,
  placeholder,
  onSave,
  inputType = 'input',
  htmlType = 'text',
  required = false,
}: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleFinish = () => {
    if (required && value.trim() === '') {
      alert('This field cannot be empty!');
      setValue(initialValue);
      setIsEditing(false);
      return;
    }
    setIsEditing(false);
    if (value !== initialValue) {
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
