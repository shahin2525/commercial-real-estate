import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/AuthProvider";
import("./Navbar.css");
const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  console.log(user);
  console.log(user?.photoURL);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li>
        <NavLink to="/update-profile">Update Profile</NavLink>
      </li> */}
    </>
  );
  return (
    <div className="navbar bg-black text-white fixed bg-opacity-30 z-10 pb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" style={{ color: "#ff4800" }}>
          Commercial-Real-Estate
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* {user && <p>{user.displayName}</p>}  */}
        <div className="tooltip tooltip-left " data-tip={user?.displayName}>
          <button
            className="btn font-bold text-[18px]"
            style={{ color: "#ff4800" }}
          >
            {user ? (
              <>
                <p onClick={logout}>Logout</p>
                <div className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user.photoURL}
                    />
                  </div>
                </div>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
