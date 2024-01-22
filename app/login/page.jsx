// 'use client';
import LoginForm from '../../components/LoginForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
// import { authOptions } from '../api/auth/auth';
import { redirect } from 'next/navigation';

export default async function Login() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/topics');
  }
  return <LoginForm />;
}
