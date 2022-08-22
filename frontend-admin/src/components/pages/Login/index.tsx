import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import useStyles from "./styles";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
interface State {
  username: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const Login = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [values, setValues] = React.useState<State>({
    username: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    //TODO: validate
    localStorage.setItem("user", values.username);
    navigate("/dashboard");
  };

  return (
    <div className={styles.loginWrap}>
      <div className={styles.loginContainer}>
        <p className="login-title">Authentication</p>
        <FormControl sx={{ m: 1, width: "auto" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-username">
            Username
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-username"
            type="text"
            value={values.username}
            onChange={handleChange("username")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle username visibility" edge="end">
                  <PersonIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Username"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "auto" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
