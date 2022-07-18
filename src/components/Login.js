import React, { useEffect } from "react";
import "./Routes.css";
import { useState } from "react";
import { string, object } from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
const regex =
  "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$";
const LoginSchema = object({
  email: string()
    .email("please enter valid mail")
    .required("please Enter Your Valid Email"),
  password: string()
    .min(8)
    .max(15)
    .required()
    .matches(regex, "please enter your password"),
});
// schema ends here

const Login = () => {
  const navigate = useNavigate();
  const [spinner, setspinner] = useState(false);

  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [LoginErr, setLoginErr] = useState({
    email: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setLoginData({
      ...LoginData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginSchema.validate(LoginData, { abortEarly: false })
      .then((resp1) => {
        console.log("Login credential validated successfully");
        // setLoginErr({});
        setspinner(true);
        console.log(resp1);
        axios({
          method: "POST",
          url: "https://api.backendless.com/07AA61C5-4799-9F89-FF92-011767A3B000/24C0C976-E9EB-4CBC-8709-1523EE591A7C/users/login",

          data: {
            login: LoginData["email"],
            password: LoginData["password"],
          },
        })
          .then((res) => {
            if (res.status === 200) {
              toast.success("Login Was Successfully!");
              setspinner(false);
              const token = res.data["user-token"];
              localStorage.setItem("ecommerce-token", token);

              navigate("/Products");
            }
          })
          .catch((error) => {
            setspinner(false);
            toast.error("Login Was Failed!");
          });
      })
      .catch((err) => {
        const LoginerrObj = {};
        console.log("error object is in", err.inner);
        err.inner.map((error) => {
          LoginerrObj[error.path] = error.message;
        });
        setLoginErr(LoginerrObj);
      });
  };

  return (
    <div className="loginform">
      {spinner ? (
        <div className="shadow-lg" id="rowsipper">
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="formdata">
          <form className="form shadow-lg rounded">
            <div>
              <h3 className="heading"> Login form</h3>
            </div>
            <div class="form-group" id="area-dist">
              <label for="exampleInputEmail1" id="password">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={LoginData.email}
                onChange={(e) => {
                  handleChange("email", e.target.value);
                }}
              />
              <p className="errormessage">{LoginErr.email}</p>
            </div>

            <div class="form-group mt-2" id="area-dist1">
              <label for="exampleInputPassword1" id="password">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={LoginData.password}
                onChange={(e) => {
                  handleChange("password", e.target.value);
                }}
              />

              <p className="errormessage">{LoginErr.password}</p>
            </div>
            {/* <div className="d-flex justify-content-center">
            {spinner ? (
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            ) : null}
          </div> */}
            <div className=" d-flex justify-content-center mt-4">
              <button
                type="submit"
                class="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            <div className=" d-flex justify-content-center mt-3 mb-2">
              <p>
                don't have an account please <a href="/SignUP">SignUp </a>here
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
