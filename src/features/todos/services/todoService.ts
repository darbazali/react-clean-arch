import { apiAgent } from "../../../adapters/api/apiAgent";
import { Todo } from "../../../core/models/Todo";

const todoService = {
  getTodos: async (): Promise<Array<Todo>> => {
    const { data } = await apiAgent.get<Array<Todo>>("/todos?limit=10");

    return data;
  },
};

export default todoService;
