import React, { useState } from "react";
import { object, string } from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const regex =
  "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$";

// schema for form validate
let userSchema = object({
  Name: string()
    .min(4, "please enter your sirname if you are name is less than 4 char")
    .max(20)
    .required(),
  email: string().email().required(),
  password: string()
    .min(8)
    .max(15)
    .required()
    .matches(regex, "please enter strong password"),
  cnfpassword: string()
    .min(8)
    .max(15)
    .required()
    .matches(regex, "please enter strong cnfpassword")
    .test(
      "confirm-password",
      "confirm password must be equal to password",
      function (cnfpassword) {
        const bool = cnfpassword === this.parent.password ? true : false;
        return bool;
      }
    ),
});
const SignUp = () => {
  const navigate = useNavigate();

  const [SignUpData, setSignUpdata] = useState({
    Name: "",
    email: "",
    password: "",
    cnfpassword: "",
  });
  const [SignUpErrData, setSignErrUpdata] = useState({
    Name: "",
    email: "",
    password: "",
    cnfpassword: "",
  });

  const handleChange = (key, value) => {
    setSignUpdata({
      ...SignUpData,
      [key]: value,
    });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    userSchema
      .validate(SignUpData, { abortEarly: false })
      .then((res) => {
        setSignErrUpdata({});

        // api call to send the data to the server
        axios({
          method: "POST",
          // https://api.backendless.com/07AA61C5-4799-9F89-FF92-011767A3B000/24C0C976-E9EB-4CBC-8709-1523EE591A7C/users/register
          url: "https://api.backendless.com/07AA61C5-4799-9F89-FF92-011767A3B000/24C0C976-E9EB-4CBC-8709-1523EE591A7C/users/register",

          data: {
            name: SignUpData["Name"],
            email: SignUpData["email"],
            password: SignUpData["password"],
          },
        })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              toast.success("SignUp  Was Successfully!");
              navigate("/Login");
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error("SignUp Was Failed!");
          });
        // setSignUpdata({});
      })
      .catch((error) => {
        console.log(error);
        let errObj = {};
        error.inner.map((valEr) => {
          errObj[valEr.path] = valEr.message;
        });
        setSignErrUpdata(errObj);
      });
  };
  return (
    <div className="Signform">
      <div className="formdata">
        <form className="form1 shadow-lg rounded">
          <div>
            <h3 className="heading"> SignUp</h3>
          </div>
          <div class="form-group" id="area-dist">
            <label for="exampleInputEmail1" id="password">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              // id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={SignUpData.Name}
              onChange={(e) => {
                handleChange("Name", e.target.value);
              }}
            />
            <p className="errormessage">{SignUpErrData.Name}</p>
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
              value={SignUpData.email}
              onChange={(e) => {
                handleChange("email", e.target.value);
              }}
            />
            <p className="errormessage">{SignUpErrData.email}</p>
          </div>
          <div class="form-group" id="area-dist1">
            <label for="exampleInputPassword1" id="password">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={SignUpData.password}
              onChange={(e) => {
                handleChange("password", e.target.value);
              }}
            />
            <p className="notepara">
              Note:atleast UppCase:1;LowCase:2;dgt:2;one spl char:!@#$*
            </p>
            <p className="errormessage">{SignUpErrData.password}</p>
          </div>
          <div class="form-group" id="area-dist">
            <label for="exampleInputPassword1" id="password">
              Conform Password
            </label>
            <input
              type="password"
              class="form-control"
              // id="exampleInputPassword1"
              placeholder="Password"
              value={SignUpData.cnfpassword}
              onChange={(e) => {
                handleChange("cnfpassword", e.target.value);
              }}
            />
            <p className="errormessage">{SignUpErrData.cnfpassword}</p>
          </div>
          <div class="form-check mb-1" id="checkme">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <div className=" d-flex justify-content-center">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={SubmitHandler}
            >
              Submit
            </button>
          </div>
          <div className=" d-flex justify-content-center mt-1 mb-2">
            <p>
              Alredy have an account please <a href="/Login">Login </a>here
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
