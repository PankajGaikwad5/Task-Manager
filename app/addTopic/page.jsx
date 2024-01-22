'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';

export default function AddTopic() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('please enter title and description');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push('/');
      } else {
        throw new Error('Failed to create the topic');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        action=''
        className='flex flex-col gap-3 mt-8'
      >
        <input
          className='border border-slate-500 w-full md:px-8 py-2'
          type='text'
          placeholder='Topic Title'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className='border border-slate-500 w-full md:px-8 py-2'
          type='text'
          placeholder='Topic Description'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button
          type='submit'
          className='bg-green-600 font-bold text-white px-6 py-3 w-fit'
        >
          Add Topic
        </button>
      </form>
    </div>
  );
}
