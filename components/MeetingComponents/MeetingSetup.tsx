"use client";
import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import { FC, useEffect, useState } from "react";
import { Button } from "../ui/button";

interface MeetingSetupProps {
  setIsSetupComplete: (value: boolean) => void;
}

const MeetingSetup: FC<MeetingSetupProps> = ({ setIsSetupComplete }) => {
  const [isMicCamToggleOn, setIsMicCamToggle] = useState(false);

  // Get access of Mic and Camera
  const call = useCall();

  if (!call) {
    throw new Error("call is not available for MeetingSetup");
  }

  // https://getstream.io/video/docs/react/ui-cookbook/replacing-call-controls/
  useEffect(() => {
    if (isMicCamToggleOn) {
      call?.microphone.disable();
      call?.camera.disable();
    } else {
      call?.microphone.enable();
      call?.camera.enable();
    }
  }, [isMicCamToggleOn, call?.microphone, call?.camera]);

  return (
    <div className="flex h-screen w-full items-center gap-3 flex-col justify-center text-white">
      <h1 className="text-2xl font-bold">Setup Your Camera and Microphone </h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label className="flex items-center justify-center gap-2 font-medium">
          <input
            type="checkbox"
            checked={isMicCamToggleOn}
            onChange={(e) => setIsMicCamToggle(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-blue-1 px-4 py-2.5"
        onClick={() => {
          call.join();

          setIsSetupComplete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
