"use client";
import { VideoPreview } from "@stream-io/video-react-sdk";
import { FC, useEffect, useState } from "react";

interface MeetingSetupProps {}

const MeetingSetup: FC<MeetingSetupProps> = ({}) => {
  const [isMicCamToggleOn, setIsMicCamToggle] = useState(false);

  useEffect(() => {});

  return (
    <div className="flex h-screen w-full items-center gap-3 flex-col justify-center text-white">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
    </div>
  );
};

export default MeetingSetup;
