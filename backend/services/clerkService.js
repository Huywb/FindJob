// services/clerkService.js

import User from "../models/User.js";

// import { Clerk } from '@clerk/clerk-sdk-node'; // nếu cần gọi Clerk API

// nếu muốn dùng Clerk SDK để fetch user: 
// const clerk = new Clerk({ apiKey: process.env.CLERK_API_KEY });

export async function upsertUserFromPayload(userPayload) {
  // userPayload: object chứa user data từ webhook (shape: id, emailAddresses, firstName,...)
  const clerkId = userPayload.id;
  const email = userPayload.emailAddresses?.[0]?.emailAddress || userPayload.primaryEmailAddress || null;
  const firstName = userPayload.firstName || null;
  const lastName = userPayload.lastName || null;
  const avatarUrl = userPayload.profileImageUrl || null;
  const metadata = userPayload.privateMetadata || {};

  const doc = await User.findOneAndUpdate(
    { clerkId },
    {
      $set: {
        clerkId,
        email,
        firstName,
        lastName,
        avatarUrl,
        metadata,
      },
    },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  ).exec();

  return doc;
}

export async function deleteUserByClerkId(clerkId) {
  return User.deleteOne({ clerkId }).exec();
}
