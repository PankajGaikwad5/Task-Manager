import React from 'react';
import TopicsList from '../../components/TopicsList';
import Navbar from '../../components/Navbar';

export default function Topics() {
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <Navbar />
      <TopicsList />
    </div>
  );
}
