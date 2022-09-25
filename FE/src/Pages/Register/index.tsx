import React, { useCallback } from "react";
import { useForm } from "Hooks";
// import { onRegister } from "Apis";
import { Box, Button, TextField } from "@mui/material";
import { toast } from "react-toastify";

interface InitialForm {
  account: string;
  name: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const { form, onChangeForm } = useForm<InitialForm>({
    account: "",
    name: "",
    password: "string",
    confirmPassword: "",
  });

  const onSubmitForm = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (form.password !== form.confirmPassword) {
        toast.error("비밀번호가 일치하지 않습니다.");
        return;
      }
      // onRegister(form.account, form.password);
    },
    [form]
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 500,
        height: 500,
        border: "3px solid black",
        padding: "10px",
        margin: "20vh auto",
      }}
      component="form"
    >
      <h1>회원가입</h1>
      <TextField
        id="outlined-required"
        label="Account"
        variant="outlined"
        name="account"
        onChange={onChangeForm}
        value={form.account}
      />
      <TextField
        sx={{ marginTop: "20px" }}
        id="outlined-password-input"
        label="Password"
        type="password"
        name="password"
        autoComplete="current-password"
        onChange={onChangeForm}
        value={form.password}
      />
      <TextField
        sx={{ marginTop: "20px" }}
        id="outlined-password-input"
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        autoComplete="current-password"
        onChange={onChangeForm}
        value={form.confirmPassword}
      />
      <Button
        sx={{
          marginTop: "20px",
          backgroundColor: "black",
          color: "white",
          fontWeight: "bold",
        }}
        variant="contained"
        onClick={onSubmitForm}
      >
        가입하기
      </Button>
    </Box>
  );
};

export { Register };
