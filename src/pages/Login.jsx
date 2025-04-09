import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <form className="min-h-[80vh] flex  items-center">
        <div className="flex flex-col items-start gap-3 m-auto p-8 min-w-[340px] sm:min-w-96  rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-2xl font-semibold">
            {state === "Sign up" ? "Create Account" : "Login"}
          </p>
          <p>
            Please {state === "Sign up" ? "sign up" : "login to"} book
            appointment
          </p>
          {state === "Sign up" && (
            <div className="w-full">
              <p>Full Name</p>
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                value={name}
                required
              ></input>
            </div>
          )}

          <div className="w-full">
            <p>Email</p>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              required
              value={email}
            ></input>
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              type="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              value={password}
            ></input>
          </div>
          <button
            onClick={onSubmitHandler}
            className="bg-[#5f7FFF] text-white w-full py-2 rounded-md text-base cursor-pointer"
          >
            {state === "Sign up" ? "Create Account" : "Login"}
          </button>

          {state === "Sign Up" ? (
            <p>
              Create a new account? ?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setState("Login")}
              >
                {" "}
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have an account{" "}
              <span
                className="text-blue-500 cursor-pointer underline"
                onClick={() => setState("Login")}
              >
                Login here
              </span>
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default Login;
