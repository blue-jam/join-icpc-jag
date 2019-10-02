import React from 'react';

interface Props {
  value: string;
  id: string;
  placeholder?: string;
  setValue: (value: string) => void;
}

const TextInput: React.FunctionComponent<Props> = ({
  value,
  id,
  placeholder,
  setValue
}) => {
  return (
    <input
      type="text"
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export default TextInput;
