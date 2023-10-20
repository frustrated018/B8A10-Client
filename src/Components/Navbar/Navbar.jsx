import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#F5F5F5] justify-around flex-wrap">
        {/* Logo */}
        <div className="">
          <a className="btn btn-ghost normal-case text-xl text-[#333333]">
            Clothing Cove
          </a>
        </div>
        {/* Navlinks */}
        <div className="flex gap-5 flex-wrap">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              `px-4 py-2 rounded-md text-center font-semibold ${
                isPending
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : isActive
                  ? "bg-[#00A8A9] text-white"
                  : "bg-transparent text-[#007B7D] hover:bg-[#00A8A9] hover:text-[#333333]"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
              `px-4 py-2 rounded-md text-center font-semibold ${
                isPending
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : isActive
                  ? "bg-[#00A8A9] text-white"
                  : "bg-transparent text-[#007B7D] hover:bg-[#00A8A9] hover:text-[#333333]"
              }`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/addproduct"
            className={({ isActive, isPending }) =>
              `px-4 py-2 rounded-md text-center font-semibold ${
                isPending
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : isActive
                  ? "bg-[#00A8A9] text-white"
                  : "bg-transparent text-[#007B7D] hover:bg-[#00A8A9] hover:text-[#333333]"
              }`
            }
          >
            Add Product
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              `px-4 py-2 rounded-md text-center font-semibold ${
                isPending
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : isActive
                  ? "bg-[#00A8A9] text-white"
                  : "bg-transparent text-[#007B7D] hover:bg-[#00A8A9] hover:text-[#333333]"
              }`
            }
          >
            Login
          </NavLink>
        </div>
        {/* Cart And User Image */}
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <Link to={`/cart`}>
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </label>
            </Link>
          </div>
          <div className="dropdown dropdown-end">
            {/* User Image and dropdown */}
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/0VZsNLh/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#FFFFFF] rounded-box w-52"
            >
              <li>
                <a className="text-[#333333]">User Name</a>
              </li>
              <li>
                <a className="text-[#333333]">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
