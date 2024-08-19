"use client";

import { JitsuProvider } from "@jitsu/jitsu-react";
import ToDo from "@/components/ToDo";
import { jitsuHost, jitsuWriteKey } from "@/env";

export default function ToDoClientWrapper({ data }: any) {
  return (
    <JitsuProvider options={{ host: jitsuHost, writeKey: jitsuWriteKey }}>
      <ToDo data={data} />
    </JitsuProvider>
  );
}
