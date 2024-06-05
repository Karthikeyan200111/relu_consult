import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="p-6 text-white " >
        <ul className="flex justify-between">
          <div>
            <h1 className="font-bold uppercase text-xl hover:text-yellow-300">Relu consultancy</h1>
          </div>
          <div className="flex gap-3">
            <li>
              <Link to="/"  className="font-bold uppercase text-xl hover:text-yellow-300">Home</Link>
            </li>
            <li>
              <Link to="/login"  className="font-bold uppercase text-xl hover:text-yellow-300">Login</Link>
            </li>
            <li>
              <Link to="/signup"  className="font-bold uppercase text-xl hover:text-yellow-300">SignUp</Link>
            </li>
          </div>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;