export const deleteColumn = async (id: string) => {
  const URL = 'https://kanban-task-management-api.vercel.app/api/v1/columns/'

  const response = await fetch(`${URL}${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  })

  return await response.json()
}
