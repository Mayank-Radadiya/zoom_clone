import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export function useGetCallById(id: string | string[]) {
  const [call, setCall] = useState<Call | null>(null); // Ensure call starts as null
  const [isCallLoading, setIsCallLoading] = useState(true);

  const client = useStreamVideoClient();

  useEffect(() => {
    if (!client || !id) return;

    (async function fetchCall() {
      try {
        const { calls } = await client.queryCalls({
          filter_conditions: { id },
        });

        if (calls.length > 0) {
          setCall(calls[0]); // Set the first call found
        } else {
          setCall(null); // No call found
        }
      } catch (error) {
        console.error("Error fetching call:", error);
        setCall(null);
      } finally {
        setIsCallLoading(false);
      }
    })();
  }, [client, id]);

  return { call, isCallLoading };
}
