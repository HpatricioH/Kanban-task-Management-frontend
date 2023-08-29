interface UpdateColumnPros {
  id: string
  name: string | object
}

const updateColumn = async ({ id, name }: UpdateColumnPros) => {
  const URL = `https://kanban-task-management-api.vercel.app/api/v1/columns/${id}`

  const response = await fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, name })
  })

  const data = await response.json()

  return data
}

export default updateColumn
