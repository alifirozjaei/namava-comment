import React, { useContext, useReducer } from "react";
import Input from "../Form/Input.jsx";
import styles from "./login-form.module.css";
import validateEmail from "../../utils/validateEmail.js";
import validatePassword from "../../utils/validatePassword.js";
import login from "../../services/login.js";
import { ToastContext } from "../../context/ToastContext.jsx";
import FormLink from "../Form/FormLink.jsx";
import SubmitButton from "../Form/SubmitButton.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const FORM_INITIAL_VALUE = {
  email: "",
  password: "",
  loading: false,
};

function formReducer(data, action) {
  switch (action.type) {
    case "change_email": {
      return {
        ...data,
        email: action.value,
      };
    }

    case "change_password": {
      return {
        ...data,
        password: action.value,
      };
    }

    case "change_loading": {
      return {
        ...data,
        loading: action.value,
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const LoginForm = () => {
  const [form, dispatch] = useReducer(formReducer, FORM_INITIAL_VALUE);
  const toasts = useContext(ToastContext);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const changeEmailHandler = (emailValue) => {
    dispatch({ type: "change_email", value: emailValue });
  };

  const changePasswordHandler = (passwordValue) => {
    dispatch({ type: "change_password", value: passwordValue });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const emailIsValid = validateEmail(form.email);
    const passwordIsValid = validatePassword(form.password);

    toasts.clearToasts();

    if (!emailIsValid) {
      toasts.addToast("ایمیل نامعتبر است.", "error");
    }

    if (!passwordIsValid) {
      toasts.addToast("رمزعبور نامعتبر است.", "error");
    }

    if (form.loading == false && passwordIsValid && emailIsValid) {
      dispatch({ type: "change_loading", value: true });
      login({ Password: form.password, UserName: form.email })
        .then((data) => {
          if (data.error) {
            toasts.clearToasts();
            if (data.error.code == 10002) {
              toasts.addToast("ایمیل نامعتبر است.", "error");
            } else if (data.error.code == 10602) {
              toasts.addToast("نام کاربری یا رمز عبور اشتباه است.", "error");
            } else if (data.error.code == 10006) {
              toasts.addToast("ارائه دهنده ایمیل نامعتبر است.", "error");
            } else {
              toasts.addToast(data.error.message, "error");
            }
          } else {
            toasts.addToast("ورود موفقیت آمیز بود.");
            auth.login(data.result);
            navigate("/comments")
          }
        })
        .catch((error) => console.log("Error in login", error))
        .finally(() => {
          dispatch({ type: "change_loading", value: false });
        });
    }
  };

  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      <h3>ورود از طریق ایمیل</h3>
      <p>لطفا ایمیل و رمز عبور خود را وارد کنید</p>

      <Input
        id="email"
        type="text"
        placeholder="ایمیل"
        label="ایمیل"
        changeHandler={changeEmailHandler}
        value={form.email}
      />

      <Input
        id="password"
        type="password"
        placeholder="رمز عبور"
        label="رمز عبور"
        changeHandler={changePasswordHandler}
        value={form.password}
      />

      <SubmitButton
        text="ورود"
        loading={form.loading}
        disabled={!form.email || !form.password || form.loading}
      />

      <FormLink>رمز عبور خود را فراموش کرده ام</FormLink>

      <FormLink>ورود از طریق شماره تلقن همراه</FormLink>
    </form>
  );
};

export default LoginForm;
