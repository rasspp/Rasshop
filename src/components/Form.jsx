import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

export default function Form({ isPage }) {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/dashboard");
  };
  return (
    <div className="mx-auto w-1/2 rounded-sm  border-2 border-main-color bg-main-color p-8 text-white">
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
          onClick={handleLogin}
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
