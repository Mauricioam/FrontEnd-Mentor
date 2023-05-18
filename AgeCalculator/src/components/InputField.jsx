import React from "react";
import LabelInput from "./LabelInput";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const StyledInput = styled.input`
  width: 80px;
  height: 20px;
  padding: 0.5rem 1rem;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  border-radius: 5px;
  border: 1px solid
    ${(props) =>
      props.error ? "var(--font-error)" : "var(--background-color)"};
  &:focus {
    border-color: var(--font-secondary);
  }
`;

function InputField({
  error,
  name,
  labelText,
  placeholder,
  entries,
  handleChange,
}) {
  return (
    <InputWrapper>
      <LabelInput spacing={"4px"} fontSize={"13px"}>
        {labelText}
      </LabelInput>
      <StyledInput
        error={error}
        name={name}
        value={entries[name]}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
      {error && (
        <LabelInput fontSize={"10px"} color={"var(--font-error)"}>
          {error}
        </LabelInput>
      )}
    </InputWrapper>
  );
}

export default InputField;
