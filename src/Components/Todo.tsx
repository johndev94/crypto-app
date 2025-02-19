import { useIsFetching } from "@tanstack/react-query";
import { useTodosIds } from "../services/queries";

export default function Todo() {
  const todosIdsQuery = useTodosIds();
  const isFetching = useIsFetching();

  return (
    <>
      <p>Query function status: {todosIdsQuery.fetchStatus}</p>
      <p>Query data status: {todosIdsQuery.status}</p>
      <p>Global isFetching: {isFetching}</p>
      {todosIdsQuery.data?.map((id) => (
        <p key={id}>{id}</p>
      ))}
    </>
  );
}
