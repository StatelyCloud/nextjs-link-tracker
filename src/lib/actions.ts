"use server";

import { keyPath } from "@stately-cloud/client";
import { statelyClient } from "./stately";
import { Profile } from "./generated/stately_pb";

export async function fetchProfileWithLinks() {
  const iter = statelyClient.beginList(
    keyPath`/p-${process.env.PROFILE_SLUG!}`
  );
  let profile: Profile | null = null;
  const links = [];
  for await (const item of iter) {
    if (statelyClient.isType(item, "Link")) {
      links.push(item);
    }
    if (statelyClient.isType(item, "Profile")) {
      profile = item;
    }
  }
  return { profile, links };
}

export async function createLink(formData: FormData) {
  const title = formData.get("title") as string;
  const url = formData.get("url") as string;
  const emoji = formData.get("emoji") as string;
  const link = statelyClient.create("Link", {
    title,
    url,
    profileId: process.env.PROFILE_SLUG!,
    emoji,
  });
  await statelyClient.put(link);
}

export async function deleteLink(id: bigint) {
  await statelyClient.del(keyPath`/p-${process.env.PROFILE_SLUG!}/l-${id}`);
}

export async function renameProfile(newFullName: string) {
  const profile = statelyClient.create("Profile", {
    id: process.env.PROFILE_SLUG!,
    fullName: newFullName,
  });
  await statelyClient.put(profile)
}
