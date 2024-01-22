'use client';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
      <Link className='text-white font-bold' href={'../topics'}>
        CRUD.
      </Link>
      <div className='flex gap-2 items-center'>
        <Link
          className='bg-white font-bold px-3 md:px-6 py-2'
          href={'../addTopic'}
        >
          Add Topic
        </Link>
        <button
          onClick={() => signOut()}
          className='bg-red-500 text-white font-bold px-3 md:px-6 py-2'
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
