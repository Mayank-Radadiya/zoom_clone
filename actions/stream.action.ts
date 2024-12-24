"use server";

import { currentUser } from "@clerk/nextjs/server"; 
import { StreamClient } from "@stream-io/node-sdk"; 

// Function to validate the necessary environment variables.
const validateEnvVariables = () => {
  const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY; // Public Stream API Key.
  const apiSecret = process.env.STREAM_SECRET_KEY; // Secret Stream API Key.

  // Throw error if either API Key or Secret is missing.
  if (!apiKey)
    throw new Error("Stream API key (NEXT_PUBLIC_STREAM_API_KEY) is missing.");
  if (!apiSecret)
    throw new Error("Stream API secret (STREAM_SECRET_KEY) is missing.");

  return { apiKey, apiSecret }; // Return the validated keys.
};

// Token provider function to generate a user token for Stream.io.
export const tokenProvider = async () => {
  // Fetch the current authenticated user from Clerk.
  const user = await currentUser();
  if (!user) throw new Error("User is not authenticated."); // Throw an error if no user is logged in.

  // Validate and fetch the Stream API credentials.
  const { apiKey, apiSecret } = validateEnvVariables();

  // Initialize the Stream client with the API Key and Secret.
  const client = new StreamClient(apiKey, apiSecret);

  // Generate a user token for the logged-in user.
  // Corrected: Pass only the `user_id` directly as per the Stream SDK's expected usage.
  const token = client.generateUserToken({ user_id: user.id});

  // Return the generated token.
  return token;
};
