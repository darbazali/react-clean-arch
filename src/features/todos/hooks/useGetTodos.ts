import useSWR from "swr";
import todoService from "../services/todoService";

const useGetTodos = () => {
  const { data, isLoading, error } = useSWR("/todos", todoService.getTodos);
  return { loading: isLoading, error, todos: data?.slice(0, 10) };
};

export default useGetTodos;
