import { SubmitHandler, useForm } from "react-hook-form";
import { createTodo } from "../services/api";
import { useCreateTodo } from "../services/mutations";
import { useTodos, useTodosIds } from "../services/queries";
import { Todo } from "../types/todo";

export default function Todos() {
  const todosIdsQuery = useTodosIds();
  const todosQueries = useTodos(todosIdsQuery.data);
  const createTodoMutation = useCreateTodo();

  const { register, handleSubmit } = useForm<Todo>();

  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
    createTodoMutation.mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleCreateTodoSubmit)}>
        <h4>New Todo:</h4>
        <input placeholder="Title" {...register("title")} />
        <br />
        <input placeholder="Description" {...register("description")} />
        <br />
        <input type="submit" />
      </form>

      <ul>
        {todosQueries.map(({ data }) => (
          <li key={data?.id}>
            <div>ID: {data?.id}</div>
            <span>
              <strong>Title: </strong> {data?.title}, {""}
              <strong>Description</strong> {data?.description}, {""}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
