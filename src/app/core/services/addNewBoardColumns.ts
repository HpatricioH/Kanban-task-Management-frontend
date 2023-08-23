export interface AddNewBoardColumnsProps {
  name: string
  boardId: string
}

const addNewBoardColumns = async ({ name, boardId }: AddNewBoardColumnsProps) => {
  const URL = 'https://kanban-task-management-api.vercel.app/api/v1/columns'

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, boardId })
  })

  return await response.json()
}

export default addNewBoardColumns
