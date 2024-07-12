import React, { useState } from "react";
import "./Register.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Link } from "react-router-dom";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm();


const watchPassword= watch('password')
const watchConfirmedPassword= watch('confirmedPassword')



const [isConfirm, setIsConfirm]= useState(true)

  const onsubmit = (data) => {
     if (watchPassword!==watchConfirmedPassword){
      setIsConfirm(false)
     }else{
      setIsConfirm(true)
     }
  console.log(isConfirm)
  };

  function checkPassEqulity(){
    if(watchPassword===watchConfirmedPassword){
      return true
    }

  }

  return (
    <div className="main">
      <h1>ثبت نام کاربر </h1>
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
            required: "برکردن این بخش الزامی است",
            pattern: {
              value:
                /^(?=.*[A-Za-z\d].*[A-Za-z\d])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,8}$/,
              message: "این نام کاربری معتبر نمی باشد",
            },
          })}
        />
        
        <p className="redAlarm">{errors.username?.message}</p>


        <label className="labelForm" htmlFor="email"> ایمیل:</label>
        <input
          className={`${errors.username && "redInput"}`}
          type="text"
          id="email"
          name="email"
          placeholder="ایمیل خود را وارد کنید"
          {...register("email", {
            required: "برکردن این بخش الزامی است",
            pattern: {
              value:
                /^(?=.*[A-Za-z\d].*[A-Za-z\d])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,8}$/,
              message: "این ایمیل معتبر نمی باشد",
            },
          })}
        />
        
        <p className="redAlarm">{errors.email?.message}</p>

        <label className="labelForm" htmlFor="password">رمز عبور:</label>
        <input
          className={`${errors.password && "redInput"}`}
          type="password"
          id="password"
          name="password"
          placeholder="رمز عبور خود را وارد کنید"
          {...register("password", {
            required: "برکردن این بخش الزامی است",
            pattern: {
              value:
                /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{2,13}$/,
              message: "رمز عبور معتبر نمی باشد",
            },
          })}
        />

        <p className="redAlarm">{errors.password?.message}</p>

        <label className="labelForm" htmlFor="confirmedPassword">تایید رمز عبور:</label>
        <input
          className={`${errors.password && "redInput"}`}
          type="password"
          id="confirmedPassword"
          name="confirmedPassword"
          placeholder="رمز عبور خود را مجددا وارد کنید"
          {...register("confirmedPassword", {
            required: "برکردن این بخش الزامی است",
      
          })}
        />

        <p className="redAlarm">{`${!isConfirm ? 'رمز عبور یکسان نیست':'' }`}</p>

        <div className="wrap">
          <button type="submit">ثبت</button>
        </div>
      </form>

      <DevTool control={control} />
      <p className="">
        {" قبلا ثبت نام کرده اید؟ "}
        <Link to="/Login" style={{ textDecoration: "none" }}>
         ورود  
        </Link>
      </p>
    </div>
  );
}

