import StatusLabel, { Status } from "./components/status-abel";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Main page</h1>
      <StatusLabel status={Status.ACTIVE}>Active</StatusLabel>
    </div>
  );
}
