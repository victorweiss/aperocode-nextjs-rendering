type Todo = {
  id: number
  userId: number
  title: string
  completed: boolean
}

export default async function Dynamic({
  params
}: {
  params: any
}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
  const todo: Todo = await response.json()

  return <div>
    <h1>Ceci est une page dynamique</h1>

    <div>{JSON.stringify(todo)}</div>
  </div>
}
