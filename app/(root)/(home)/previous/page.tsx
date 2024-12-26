import CallList from '@/components/MeetingComponents/CallList';
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Previous</h1>
      <CallList type="ended" />
    </section>
  );
}

export default page