import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [logInError, setLogInError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      setLogInError("Password should be at least 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setLogInError("Password should have at least 1 uppercase character");
      return;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setLogInError("Password should contain at least 1 special character");
      return;
    }

    logInUser(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire("Login Successful", "Welcome back!", "success");
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLogInError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res);
        Swal.fire("Login Successful", "Welcome back!", "success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/kMFcGFr/Sprinkle-1.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // height: "100vh",
          position: "relative",
        }}
      >
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#f5f5f5]">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              {logInError && (
                <div className="text-red-700 text-center font-bold text-sm">
                  {logInError}
                </div>
              )}
              <div className="form-control mt-6">
                <button className="bg-[#007B7D] py-3 rounded-lg text-white font-semibold text-lg hover:bg-[#00A8A9]">
                  Login
                </button>
              </div>
              <button
                onClick={handleGoogleSignIn}
                className="bg-[#007B7D] py-3 rounded-lg text-white font-semibold text-lg hover:bg-[#00A8A9]"
              >
                Google
              </button>
            </form>

            {/* Registration and Login toggle */}

            <p className="text-center text-sm px-2 py-2 font-semibold">
              Don&apos;t have an account?
            </p>
            <p className="text-center text-sm px-2 mb-2 font-semibold">
              Consider {""}
              <Link to="/signup">
                <span className="text-sm hover:underline hover:text-blue-700 font-semibold">
                  Signing Up!
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
