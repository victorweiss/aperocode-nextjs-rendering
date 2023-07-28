'use client'

import {useState} from "react";

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

async function getTodo(id: number): Promise<Todo> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  return await response.json()
}

export default function Todo() {
  const [todo, setTodo] = useState<Todo | null>(null)

  async function showNext() {
    const nextTodo = await getTodo((todo?.id ?? 0) + 1)
    setTodo(nextTodo)
  }

  if (!todo) {
    showNext()
  }

  return <>
    <button onClick={showNext}>Next Todo : {todo?.id}</button>
    <div>{JSON.stringify(todo)}</div>
  </>
}
