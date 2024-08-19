"use client";

import { JitsuProvider } from "@jitsu/jitsu-react";
import { jitsuHost, jitsuWriteKey } from "@/env";
import ToDo from "@/components/ToDo";

export const runtime = "edge";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return (
    <JitsuProvider options={{ host: jitsuHost, writeKey: jitsuWriteKey }}>
      <ToDo data={data} />
    </JitsuProvider>
  );
}
