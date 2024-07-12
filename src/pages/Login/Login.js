import React from "react";
import "./Login.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Link } from "react-router-dom";

export default function NewLoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="main">
      <h1>ورود کاربر </h1>
      <h3>اطلاعات خود را وارد نمایید</h3>

      <form action="" method="post" onSubmit={handleSubmit(onsubmit)}>
        <label className="labelForm" htmlFor="username">نام کاربری:</label>
        <input
          className={`${errors.username && "redInput"}`}
          type="text"
          id="first"
          name="first"
          placeholder="نام کاربری خود را وارد کنید"
          {...register("username", {
            required: "this field is required",
            pattern: {
              value:
                /^(?=.*[A-Za-z\d].*[A-Za-z\d])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,8}$/,
              message: "این نام کاربری معتبر نمی باشد",
            },
          })}
        />
        
        <p>{errors.username?.message}</p>

        <label className="labelForm" htmlFor="password">رمز عبور:</label>
        <input
          className={`${errors.password && "redInput"}`}
          type="password"
          id="password"
          name="password"
          placeholder="رمز عبور خود را وارد کنید"
          {...register("password", {
            required: "this field is required",
            pattern: {
              value:
                /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{2,13}$/,
              message: "رمز عبور معتبر نمی باشد",
            },
          })}
        />

        <p>{errors.password?.message}</p>

        <div className="wrap">
          <button type="submit">ثبت</button>
        </div>
      </form>

      <DevTool control={control} />
      <p>
        هنوز ثبت نام نکرده اید؟{" "}
        <Link to="/Register" style={{ textDecoration: "none" }}>
          ثبت نام
        </Link>
      </p>
    </div>
  );
}
