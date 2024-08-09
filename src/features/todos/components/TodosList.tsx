import useGetTodos from "../hooks/useGetTodos";

const TodosList = () => {
  const { todos = [], loading, error } = useGetTodos();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default TodosList;
