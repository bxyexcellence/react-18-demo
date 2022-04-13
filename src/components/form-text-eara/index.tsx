import React from "react";

interface ItextArea {
  onChange?: (value: string) => void;
  onBlur?: (value: any) => void;
  value?: string;
}
const TextArea: React.FC<ItextArea> = ({ onChange, onBlur, value }) => {
  return (
    <div>
      <textarea
        className="rounded-sm border"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange?.(e.target.value)
        }
        onBlur={(e) => onBlur?.(e.target.value)}
      />
    </div>
  );
};
TextArea.displayName = "TextEara";
export default TextArea;
