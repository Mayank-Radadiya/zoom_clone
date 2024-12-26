"use client";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { FC } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const EndCallButton: FC = ({}) => {
  const call = useCall(); // get current call info
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();
  // if call end then navigate to home Page
  const router = useRouter();

  if (!call)
    throw new Error(
      "useStreamCall must be used within a StreamCall component."
    );

  const endCall = async () => {
    await call.endCall();
    router.push("/");
  };

  // call id  === current user id
  const isMeetingOwner =
    localParticipant &&
    call?.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return;

  return (
    <Button
      onClick={endCall}
      className="bg-red-500 hover:bg-red-400  border-e-dark-2 rounded-[3px]"
    >
      End Call for Everyone
    </Button>
  );
};

export default EndCallButton;
