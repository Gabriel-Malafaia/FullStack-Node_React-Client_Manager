export interface TextMaskCustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export interface IPasswordInputProps {
  register: any;
  inputLabel: string;
  error: any;
}
