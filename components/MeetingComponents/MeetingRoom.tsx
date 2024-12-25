"use client";
import { cn } from "@/lib/utils";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { FC, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList, Loader, Users } from "lucide-react";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";

interface MeetingRoomProps {}
type CallLayout = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom: FC<MeetingRoomProps> = ({}) => {
  const [layout, setLayout] = useState<CallLayout>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);

  // If Call room is personal, then get a personal state and it can show call end Button

  const searchParams = useSearchParams();
  const isPersonal = !!searchParams.get("personal");

  const MenuItem = ["Grid", "Speaker-Left", "Speaker-Right"];

  const { useCallCallingState } = useCallStateHooks();

  // for more detail about types of CallingState see: https://getstream.io/video/docs/react/ui-cookbook/ringing-call/#incoming-call-panel
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-right":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className=" flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          {/* Get all Participants List From Stream */}
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      {/* video layout and call controls */}
      <div className="fixed bottom-0 flex w-full items-center justify-center gap-5">
        <CallControls />
        <DropdownMenu>
          <div className="flex items-center ">
            <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              {" "}
              <LayoutList size={20} className="text-white" />{" "}
            </DropdownMenuTrigger>
          </div>

          <DropdownMenuContent className=" border-dark-1 bg-dark-1 text-white">
            {MenuItem.map((item, index) => (
              <div key={index}>
                <DropdownMenuItem
                  onClick={() => setLayout(item.toLowerCase() as CallLayout)}
                >
                  {item}
                </DropdownMenuItem>
                <DropdownMenuSeparator className="border-dark-1" />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <CallStatsButton />

        <Button onClick={() => setShowParticipants((prev) => !prev)}>
          <div className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
            <Users size={20} className="text-white" />
          </div>
        </Button>
        {!isPersonal && <EndCallButton />}
      </div>
    </section>
  );
};

export default MeetingRoom;
