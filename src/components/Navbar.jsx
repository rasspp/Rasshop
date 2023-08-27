import { NavLink, Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-main-color fixed flex w-full justify-between px-14 py-3 shadow-sm shadow-gray-950">
      <Link to={"/"} className="reverse-main-button">
        Rasshop
      </Link>

      <div className="search flex w-6/12 items-center justify-center">
        <input
          type="text"
          className="text-main-color placeholder-main-color/70 w-full rounded-sm border px-3 py-2 text-sm font-semibold outline-none transition-all md:w-6/12 md:focus:w-full "
          placeholder="Search..."
        />
      </div>

      <div className="nav-link flex items-center gap-3 text-white">
        <NavLink to="/cart">
          <FaShoppingCart />
        </NavLink>
        <p>|</p>
        <NavLink to="/login" className="main-button border-white">
          Login
        </NavLink>
      </div>
    </nav>
  );
}
