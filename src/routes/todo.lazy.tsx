import BaseButton from "@/components/base/button/BaseButton";
import { useTodoStore } from "@/store";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/todo")({
  component: RouteComponent,
});

function RouteComponent() {
  const { todo, addTodo } = useTodoStore();

  return (
    <div>
      Todo List Here
      <ul className="border-b mt-3 py-2">
        {todo.map((item) => (
          <li key={item.id}>
            title: <b>{item.title}</b>
          </li>
        ))}
      </ul>
      <BaseButton
        onClick={() =>
          addTodo({ title: "test2", desc: "test2", id: 2, status: "done" })
        }
      >
        Add Test Todo
      </BaseButton>
    </div>
  );
}
