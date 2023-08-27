import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Form({ isPage }) {
  return (
    <div className="border-main-color bg-main-color mx-auto mt-5 w-1/2 rounded-sm border-2 p-8 text-white">
      <form action="#" className="flex flex-col gap-2">
        {isPage === "register" ? (
          <input
            type="text"
            placeholder="Nickname"
            className="input"
            required
          />
        ) : null}

        <input type="email" placeholder="Email" className="input" required />
        <input
          type="password"
          placeholder="Password"
          className="input"
          required
        />
        <button
          type="submit"
          className="main-button mt-10 w-full border-white font-semibold"
        >
          Submit
        </button>
      </form>

      <p>
        {`Don't have an account? `}
        <Link to={`/${isPage === "register" ? "login" : "register"}`}>
          <span className="font-semibold hover:underline">
            <span className="capitalize">
              {isPage === "register" ? "login" : "register"}
            </span>{" "}
            now!
          </span>
        </Link>
      </p>
    </div>
  );
}

Form.propTypes = {
  isPage: PropTypes.string,
};
