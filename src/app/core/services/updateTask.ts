interface UpdateTaskProps {
  id: string
  title: string | object
  description: string | object
  status: string | object
  columnId?: string | object
}

export const updateTask = async ({ id, title, description, status, columnId }: UpdateTaskProps) => {
  const URL = 'https://kanban-task-management-api.vercel.app/api/v1/tasks/task/'

  const response = await fetch(`${URL}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description, status, columnId })
  })

  return await response.json()
}
