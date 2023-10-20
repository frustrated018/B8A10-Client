import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");

  const hadnleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const img = e.target.img.value;

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 Characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegisterError("Password should have at least 1 uppercase character");
      return;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setRegisterError("Password should contain at least 1 speacial character");
      return;
    }

    setRegisterError("");
    // create user with email and password
    createUser(email, password)
      .then((res) => {
        console.log(res);

        // Updateing profile
        updateUserProfile({
          displayName: name,
          photoURL: img,
        })
          .then(() => {
            e.target.reset();
            Swal.fire("Sign Up Successful", "Welcome To our site!", "success");
            navigate("/");
          })
          .catch();
      })

      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    setRegisterError("");
    signInWithGoogle()
      .then((res) => {
        console.log(res);
        Swal.fire("Sign Up Successful", "Welcome To our site!", "success");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/vvrLrsZ/Wave.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
          backgroundColor: "#F5F5F5",
        }}
      >
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#f5f5f5]">
            <form className="card-body" onSubmit={hadnleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  name="img"
                  type="text"
                  placeholder="Optional: Enter a Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              {registerError && (
                <div className="text-red-700 text-center font-bold text-sm">
                  {registerError}
                </div>
              )}
              <div className="form-control mt-6">
                <button className="bg-[#007B7D] py-3 rounded-lg text-white font-semibold text-lg hover:bg-[#00A8A9]">
                  Sign Up
                </button>
              </div>

              <p className="text-center font-bold">Or</p>

              <button
                onClick={handleGoogleSignIn}
                className="bg-[#007B7D] py-3 rounded-lg text-white font-semibold text-lg hover:bg-[#00A8A9]"
              >
                Google
              </button>
            </form>

            {/* Registration and SignUp toggle */}

            <p className="text-center text-sm px-2 py-2 font-semibold">
              Already a Member?
            </p>
            <p className="text-center text-sm px-2 mb-2 font-semibold">
              Click here to {""}
              <Link to="/signup">
                <span className="text-sm hover:underline hover:text-blue-700 font-semibold">Login!</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
