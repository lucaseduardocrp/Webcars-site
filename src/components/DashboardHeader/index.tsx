import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';

export const DashboardHeader = () => {
  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <div className="w-full items-center flex h-10 bg-red-600 rounded-md text-white font-medium gap-4 px-4 p-6 mb-4">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/new">Cadastrar carro</Link>

      <button className="ml-auto" onClick={handleLogout}>
        Sair da conta
      </button>
    </div>
  );
};
