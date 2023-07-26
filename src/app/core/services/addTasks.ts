
interface TaskProps {
  title: string | object
  description: string | object
  status: string | object
  columnId: string | undefined
}

const addTasks = async ({ title, description, status, columnId }: TaskProps) => {
  const URL = 'https://kanban-task-management-api.vercel.app/api/v1/tasks'

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description, status, columnId })
  })

  return await response.json()
}

export default addTasks
