import { GetServerSideProps } from "next";

import { JitsuProvider } from "@jitsu/jitsu-react";
import { jitsuHost, jitsuWriteKey } from "@/env";
import ToDo from "@/components/ToDo";

export const runtime = "experimental-edge";

export const getServerSideProps: GetServerSideProps<{
  data: any;
}> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function TodoPage(data: any) {
  return (
    <JitsuProvider options={{ host: jitsuHost, writeKey: jitsuWriteKey }}>
      <ToDo data={data} />
    </JitsuProvider>
  );
}
