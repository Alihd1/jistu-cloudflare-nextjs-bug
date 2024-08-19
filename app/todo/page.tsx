import ToDoClientWrapper from "@/components/ToDoClientWrapper";

export const runtime = "edge";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();

  return <ToDoClientWrapper data={data} />;
}
