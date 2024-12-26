import CallList from "@/components/MeetingComponents/CallList";
import { FC } from "react";

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Recording</h1>
      <CallList type="recordings" />
    </section>
  );
};

export default Page;
