import { useContext } from "react";
import { Outlet, NavLink } from "react-router";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-9/10 mx-auto">
        <h2>React Blog</h2>
        <nav className="space-x-2 p-4 border-b">
          <NavLink
            to="."
            className={({ isActive }) =>
              isActive ? "bg-sky-500 p-2 rounded-md text-white" : undefined
            }
          >
            Home
          </NavLink>
          {!isAuthenticated ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "bg-sky-500 p-2 rounded-md text-white" : undefined
              }
            >
              Login
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/create"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 p-2 rounded-md text-white" : undefined
                }
              >
                Create
              </NavLink>
              <NavLink 
              onClick={()=> logout()}
              className="bg-red-500 p-2 rounded-md text-white"
              >
                Logout
              </NavLink>
            </>
          )}
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
