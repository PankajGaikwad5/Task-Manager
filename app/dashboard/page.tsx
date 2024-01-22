import Navbar from '../../components/Navbar';
import UserInfo from '../../components/UserInfo';

export default function Dashboard() {
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <Navbar />
      <UserInfo />
    </div>
  );
}
