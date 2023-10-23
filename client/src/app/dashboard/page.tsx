import { getServerAuthSession } from '@/utils/auth';

export default function page() {
  // const session = await getServerAuthSession();
  // console.log(session);
  return <div className='text-slate-800 dark:text-white'>dashboard</div>;
}
