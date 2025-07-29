import React from "react";
import todos from "../data/todos.json";

const formatDate = (dateStr) => {
  const options = { month: "short", day: "numeric" };
  const dateObj = new Date(dateStr);
  return dateObj.toLocaleDateString("en-US", options);
};

const isOverdue = (dateStr) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dateStr);
  return due < today;
};

const TodoList = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg font-semibold mb-3">To-Do List</h2>
      <ul className="space-y-4">
        {todos.map((todo) => {
          const overdue = isOverdue(todo.dueDate);
          return (
            <li key={todo.id} className="flex flex-col">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-sm font-medium">{todo.task}</span>
              </div>
              <span
                className={`text-xs pl-6 ${overdue ? "text-red-500" : "text-gray-500"
                  }`}
              >
                Due by: {formatDate(todo.dueDate)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
