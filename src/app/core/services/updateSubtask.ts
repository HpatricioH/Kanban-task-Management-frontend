interface UpdateSubtaskProps {
  taskId: string
  title: string | object
  id: string
  isCompleted: boolean
}

export const updateSubtask = async ({ taskId, title, id, isCompleted }: UpdateSubtaskProps) => {
  const URL = `https://kanban-task-management-api.vercel.app/api/v1/subtasks/task/${taskId}/subtask/`

  const response = await fetch(`${URL}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, isCompleted })
  })

  return await response.json()
}
