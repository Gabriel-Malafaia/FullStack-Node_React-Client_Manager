import StyledErrorMessage from "./style";
import { VisibilityOff } from "@mui/icons-material";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";
import { IPasswordInputProps } from "../../interfaces/pages/components";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";

const PasswordInput = ({
  register,
  inputLabel,
  error,
}: IPasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <FormControl fullWidth variant="standard">
      <InputLabel error={!!error} htmlFor="standard-adornment-password">
        {inputLabel}
      </InputLabel>
      <Input
        error={!!error}
        {...register}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {!!error && <StyledErrorMessage>{error?.message}</StyledErrorMessage>}
    </FormControl>
  );
};

export default PasswordInput;
