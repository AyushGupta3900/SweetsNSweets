import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ isAdmin }) {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const linkClass = (path) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      location.pathname === path
        ? "bg-indigo-600 text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div
          onClick={() => navigate("/dashboard")}
          className="text-lg font-semibold text-indigo-600 cursor-pointer"
        >
          SweetsNSweets
        </div>

        <div className="flex items-center gap-2">
          <Link to="/dashboard" className={linkClass("/dashboard")}>
            Dashboard
          </Link>

          {isAdmin && (
            <Link
              to="/admin"
              className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                location.pathname === "/admin"
                  ? "border border-indigo-600 text-indigo-600 bg-indigo-50"
                  : "border border-indigo-300 text-indigo-600 hover:bg-indigo-50"
              }`}
            >
              Admin
            </Link>
          )}

          <button
            onClick={logout}
            className="ml-3 px-4 py-2 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
