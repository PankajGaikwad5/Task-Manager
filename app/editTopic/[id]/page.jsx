import EditTopicForm from '../../../components/EditTopicForm';
import Navbar from '../../../components/Navbar';

const getTopicById = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/topics/${id}`,
      {
        cache: 'no-store',
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch topic');
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);

  if (!topic) {
    return;
  }

  const { title, description } = topic;
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <Navbar />
      <EditTopicForm id={id} title={title} description={description} />
    </div>
  );
}
