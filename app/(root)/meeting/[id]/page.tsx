"use client";

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingComponents/MeetingRoom";
import MeetingSetup from "@/components/MeetingComponents/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { redirect, useParams } from "next/navigation";
import { FC, useState } from "react";

const Page: FC = ({}) => {
  const { id } = useParams();
  if (!id) redirect("/");
  const { user, isLoaded } = useUser();

  const [isSetUpComplete, setIsComplete] = useState(false);

  const { call, isCallLoading } = useGetCallById(id);

  if (isCallLoading || !isLoaded) return <Loader />;

  if (!call)
    return (
      <p className="text-center flex justify-center text-3xl font-bold text-white">
        Call Not Found
      </p>
    );

  return (
    <main className="h-screen w-full ">
      <StreamCall call={call}>
        <StreamTheme>
          {isSetUpComplete ? <MeetingSetup /> : <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Page;
