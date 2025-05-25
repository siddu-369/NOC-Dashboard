import React, { useState, useEffect } from "react";
import {
  Trash,
  CheckCircleFill,
  Circle,
  Plus,
  Calendar,
} from "react-bootstrap-icons";
console.log(Trash);

export default function Todos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text: newTodo.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
        <form onSubmit={addTodo} className="flex gap-3 mb-8">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-1 px-6 py-3 bg-white border border-indigo-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400 text-gray-600"
          />
          <button type="submit" className="btn btn-outline-primary ">
            + Add Task
          </button>
        </form>

        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`group transition-all duration-200 ${
                todo.completed ? "opacity-75" : ""
              }`}
            >
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all duration-200">
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="text-gray-400 hover:text-indigo-600 transition-colors"
                >
                  {todo.completed ? (
                    <CheckCircleFill className="text-success" size={24} />
                  ) : (
                    <Circle size={24} />
                  )}
                </button>

                <div className="flex-1">
                  <p
                    className={`text-lg ${
                      todo.completed
                        ? "line-through text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    {todo.text}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-400">
                      {formatDate(todo.createdAt)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="btn btn-outline-danger"
                >
                  - Delete -{/* <Trash size={20} /> */}
                </button>
              </div>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Your task list is empty</p>
            <p className="text-gray-400 mt-1">Add a new task to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}
