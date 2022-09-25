import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "Hooks";
import { useNavigate } from "react-router-dom";

interface InitForm {
  account: string;
  password: string;
}

const Login = () => {
  const { form, onChangeForm } = useForm<InitForm>({
    account: "",
    password: "",
  });
  const navigate = useNavigate();

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
      <h1>관리자</h1>
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
      <Button
        sx={{
          marginTop: "20px",
          backgroundColor: "black",
          color: "white",
          fontWeight: "bold",
        }}
        variant="contained"
      >
        로그인
      </Button>
      <Button
        sx={{
          marginTop: "20px",
          backgroundColor: "black",
          color: "white",
          fontWeight: "bold",
        }}
        variant="contained"
        onClick={() => navigate("/register")}
      >
        가입
      </Button>
    </Box>
  );
};

export { Login };
