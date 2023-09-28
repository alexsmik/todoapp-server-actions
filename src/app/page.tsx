import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";
import { getTodos } from "@/lib/todos_db";


export default async function Home() {
  const { todos, results } = await getTodos();
  return (
    <div className="container mx-auto max-w-md p-4">
      <TodoForm />
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      {results === 0 ? (
        <p className="text-center">No Todos</p>
      ) : (
        todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      )}
    </div>
  )
}
