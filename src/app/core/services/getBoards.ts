
export async function getBoards () {
  const URL = 'https://kanban-task-management-api.vercel.app/api/v1/boards'

  try {
    const response = await fetch(URL)
    return await response.json()
  } catch (error: any) {
    throw new Error(error.message)
  }
}
