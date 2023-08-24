import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { FiUser, FiLogIn } from "react-icons/fi";

export const Header = () => {
  const loadingAuth = false;
  const signed = false;

  return (
    <div className="w-full flex items-center justify-center h-16 mb-4 drop-shadow bg-white">
      <header className="w-full max-w-7xl flex items-center justify-between px-4 mx-auto">
        <Link to="/">
          <Logo />
        </Link>

        {!loadingAuth && signed && (
          <Link to="/dashboard">
            <div className="border-2 rounded-full p-1 border-gray-900">
              <FiUser size={24} color="#000" />
            </div>
          </Link>
        )}

        {!loadingAuth && !signed && (
          <Link to="/login">
            <FiLogIn size={24} color="#000" />
          </Link>
        )}
      </header>
    </div>
  );
};
