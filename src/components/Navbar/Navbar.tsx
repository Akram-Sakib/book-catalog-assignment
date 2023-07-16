import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Book Catalog</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {" "}
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <li>
            <Link to={"/add-new-book"}>Add New Book</Link>
          </li>
          <li>
            <Link to={"/sign-in"}>Sign In</Link>
          </li>
          <li>
            <Link to={"/sign-up"}>Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
