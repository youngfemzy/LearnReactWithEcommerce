import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [mode, setMode] = useState("signup");
  const [authError, setAuthError] = useState(null);

  const navigate = useNavigate();

  // use auth context
  const { user, signup, logout, login } = useContext(AuthContext);

  // use form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function AuthSubmitFunction(data) {
    setAuthError(null);
    let result;
    if (mode === "signup") {
      result = signup(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (!result.success) {
      setAuthError(result.error);
    } else {
      setAuthError(null);
      navigate("/");
    }

    console.log(result);
  }

  return (
    <>
      <div className="page">
        <div className="container">
          <div className="auth-container">
            {user && <p className="auth-success">Welcome, {user.email}!</p>}
            <h1 className="page-title">
              {mode === "signup" ? "Sign Up" : "Login"}
            </h1>

            <form
              className="auth-form"
              onSubmit={handleSubmit(AuthSubmitFunction)}
            >
              {/* error */}
              {authError && <p className="form-error">{authError}</p>}
              {/* error */}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  id="email"
                  type="email"
                  {...register("email", { required: "email is required" })}
                />
                <p className="form-error">{errors.email?.message}</p>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-input"
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "password must be at least 6 characters",
                    },
                  })}
                />
                <p className="form-error">{errors.password?.message}</p>
              </div>

              <button className="btn btn-primary btn-large" type="submit">
                {mode === "signup" ? "Sign Up" : "Login"}
              </button>
            </form>

            <div className="auth-switch">
              {mode == "signup" ? (
                <p>
                  Already have an account?
                  <span className="auth-link" onClick={() => setMode("login")}>
                    {" "}
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Dont have an account?
                  <span className="auth-link" onClick={() => setMode("signup")}>
                    {" "}
                    Sign Up
                  </span>
                </p>
              )}
              <button onClick={() => logout()}>logout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auth;
