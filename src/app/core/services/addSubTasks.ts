
export interface SubTask {
  taskId: string | undefined
  title: string | object
  isCompleted: boolean
}

const addSubTasks = async ({ title, isCompleted, taskId }: SubTask) => {
  const URL = 'https://kanban-task-management-api.vercel.app/api/v1/subtasks'

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, isCompleted, taskId })
  })

  return await response.json()
}

export default addSubTasks
