
interface UpdateBoardProps {
  id: string
  name: string | object
}

const updateBoard = async ({ id, name }: UpdateBoardProps) => {
  const URL = 'https://kanban-task-management-api.vercel.app/api/v1/boards/'

  const response = await fetch(`${URL}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  })

  const data = await response.json()
  return data
}

export default updateBoard
