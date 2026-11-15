import React from "react";

type inputFieldProps = {
  type: "textarea" | "text" | "link";
  label: string;
  placeholder: string;
  value?: string;
  errorMessage?: string;
} & (
  | {
      type: "text";
      textInputRef?: React.RefObject<HTMLInputElement | null>;
      textAreaRef?: never;
    }
  | {
      type: "textarea";

      textAreaRef?: React.RefObject<HTMLTextAreaElement | null>;
      textInputRef?: never;
    }
  | {
      type: "link";
      textInputRef?: React.RefObject<HTMLInputElement | null>;
      textAreaRef?: never;
    }
);

export const TextInput: React.FC<inputFieldProps> = ({
  type,
  label,
  textAreaRef,
  textInputRef,
  placeholder,
  value,
  errorMessage,
}) => {
  switch (type) {
    case "textarea":
      return (
        <div className="input-container">
          <label htmlFor="description-label" className="label">
            {label} <span className="chars">{"300 characters max"}</span>
          </label>
          <textarea
            name="description"
            id="description"
            className="description-input"
            ref={textAreaRef}
            placeholder={placeholder}
            rows={3}
            maxLength={300}
            value={value}
          />
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      );

    case "text":
      return (
        <div className="input-container">
          <label className="label" htmlFor="text-input">
            {label} <span className="chars">{"50 characters max"}</span>
          </label>
          <input
            name="text-input"
            className="text-input"
            id="text-input"
            type="text"
            ref={textInputRef}
            placeholder={placeholder}
            maxLength={50}
            value={value}
          />
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      );

    case "link":
      return (
        <div className="input-container">
          <label className="label" htmlFor="link-input">
            {label} <span className="chars">{"100 characters max"}</span>
          </label>
          <input
            name="link-input"
            className="text-input"
            id="link-input"
            type="text"
            ref={textInputRef}
            placeholder={placeholder}
            maxLength={100}
            value={value}
          />
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      );
  }
};
