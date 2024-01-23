import Login from './login/page';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import Dashboard from './dashboard/page';
import Navbar from '../components/Navbar';
import Topics from './topics/page';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/topics');

    return;
  }
  return <Login />;
}
