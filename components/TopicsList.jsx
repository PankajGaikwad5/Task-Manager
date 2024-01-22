import RemoveBtn from './RemoveBtn';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';

const getTopics = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/topics`,
      {
        method: 'GET',
        cache: 'no-store',
      }
    );
    if (!res.ok) {
      throw new Error('failed to fetch topics');
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function TopicsList() {
  const { topic } = await getTopics();
  return (
    <>
      {topic.map((t) => {
        return (
          <div
            key={t._id}
            className='p-4 border border-slate-300 my-3 flex justify-between gap-5'
          >
            <div>
              <h2 className='font-bold text-2xl'>{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div className='flex gap-2 items-start'>
              <RemoveBtn id={t._id} />
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        );
      })}
      {/* <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5'>
        <div>
          <h2 className='font-bold text-2xl'>Topic Title</h2>
          <div>Topic Description</div>
        </div>

        <div className='flex gap-2 items-start'>
          <RemoveBtn />
          <Link href={'/editTopic/123'}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div> */}
    </>
  );
}
