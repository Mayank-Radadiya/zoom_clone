// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";
import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MeetingCard from "./MeetingCard";
import { toast } from "@/hooks/use-toast";
import Loader from "../Loader";

const CallList = ({ type }: { type: "ended" | "upcoming" | "recordings" }) => {
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);
  const router = useRouter();

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "upcoming":
        return upcomingCalls;
      case "recordings":
        return recordings;
      default:
        return [];
    }
  };

  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No Previous calls";
      case "upcoming":
        return "No Upcoming calls";
      case "recordings":
        return "No Recordings";
      default:
        return "";
    }
  };

 useEffect(() => {
   const fetchRecordings = async () => {
     try {
       const callData = await Promise.all(
         callRecordings?.map(async (meeting) => {
           try {
             return await meeting.queryRecordings();
           } catch (error) {
             console.error(
               `Error querying recordings for meeting: ${
                 meeting?.id || "unknown"
               }`,
               error
             );
             return null; // Return null for failed queries to filter later
           }
         }) ?? []
       );

       const recordings = callData
         .filter(
           (call): call is { recordings: CallRecording[] } =>
             call && call.recordings?.length > 0
         )
         .flatMap((call) => call.recordings);

       setRecordings(recordings);
     } catch (error) {
       console.error("Error in fetchRecordings:", error);
       toast({ title: "Error fetching recordings. Try Again Later." });
     }
   };

   if (type === "recordings") {
     fetchRecordings();
   }
 }, [type, callRecordings]);


  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  if (isLoading) return <Loader />;
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording) => (
          <MeetingCard
            key={
              "id" in meeting
                ? meeting.id
                : meeting.filename || `recording-${index}` // Fallback key
            }
            icon={
              type === "ended"
                ? "/icons/previous.svg"
                : type === "upcoming"
                ? "/icons/upcoming.svg"
                : "/icons/recordings.svg"
            }
            title={
              (meeting as Call).state?.custom?.description ||
              meeting.filename?.substring(0, 20) ||
              "Personal Meeting"
            }
            date={
              (meeting as Call).state?.startsAt?.toLocaleString() ||
              (meeting as CallRecording).start_time?.toLocaleString()
            }
            isPreviousMeeting={type === "ended"}
            buttonIcon1={type === "recordings" ? "/icons/play.svg" : undefined}
            handleClick={
              type === "recordings"
                ? () => {
                    router.push(`${meeting.url}`);
                  }
                : () => {
                    router.push(`/meeting/${meeting.id}`);
                  }
            }
            link={
              type === "recordings"
                ? meeting.url
                : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meeting.id}`
            }
            buttonText={type === "recordings" ? "Play" : "Start"}
          />
        ))
      ) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
