export interface NewBoardProps {
  name: string | object
}

const addNewBoard = async ({ name }: NewBoardProps) => {
  const URL = 'https://kanban-task-management-api.vercel.app/api/v1/boards'

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name })
  })

  return await response.json()
}

export default addNewBoard
