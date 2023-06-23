import React from "react";


interface InputSectionProps {
  type: string;
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSection: React.FC<InputSectionProps> = (props) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange || undefined}
        required
      />
    </div>
  );
}
export default InputSection