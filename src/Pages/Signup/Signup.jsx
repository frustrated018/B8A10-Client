import { BiSolidLockAlt } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FaUser } from "react-icons/fa6";

const Signup = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/vvrLrsZ/Wave.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        position: "relative",
        backgroundColor: "#F5F5F5", // Soft Gray
      }}
    >
      <div className="hero-content">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#F5F5F5] backdrop-blur-lg border-2 border-[rgba(255, 255, 255, .5)]">
          <form className="card-body">
            <h1 className="text-2xl font-bold text-center text-[#333333]">
              Sign Up
            </h1>

            {/* Input box */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#333333] font-semibold">
                  Email
                </span>
              </label>
              <input
                type="text"
                placeholder="User Name"
                className="px-3 py-3 rounded-lg bg-transparent border-2 border-[#333333] text-[#333333] focus:outline-none"
                required
              />
              <label className="text-[#333333] text-base absolute right-12 top-[125px]">
                <FaUser />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#333333] font-semibold">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-3 rounded-lg bg-transparent border-2 border-[#333333] text-[#333333] focus:outline-none"
                required
              />
              <label className="text-[#333333] text-lg absolute right-12 top-[220px]">
                <IoIosMail />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#333333] font-semibold">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="px-3 py-3 rounded-lg bg-transparent border-2 border-[#333333] text-[#333333] focus:outline-none"
                required
              />
              <label className="text-[#333333] text-lg absolute right-12 top-[315px]">
                <BiSolidLockAlt />
              </label>
            </div>

            <div className="flex flex-col mt-4">
              <button className="bg-[#007B7D] py-3 rounded-lg text-white font-semibold text-lg hover:bg-[#00A8A9]">
                Sign Up
              </button>
            </div>
            <label className="mt-3 text-[#333333]">
              <a href="/login">
                Already have an account?{" "}
                <span className="text-sm hover:underline hover:text-blue-700 font-semibold">
                  Login
                </span>
              </a>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
