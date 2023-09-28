import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useEffect, useState } from 'react'
import { type Column, type Task } from '@/app/lib/types/api'
import { type TaskCardsProps } from '@/app/lib/types/tasks'

export default function TaskCards ({ col, taskDetailsModal, setTaskDetailsModal, setTaskSelected, boardColumn }: TaskCardsProps) {
  const [tasks, updateTasks] = useState<Task[]>(col.tasks)

  useEffect(() => {
    updateTasks(col.tasks)
  }, [col.tasks])

  const handleTaskDetailModal = () => {
    !taskDetailsModal ? setTaskDetailsModal(true) : setTaskDetailsModal(false)
  }

  const handleTaskSelected = (id: string) => {
    const task = boardColumn?.flatMap((col: Column) => col.tasks).find((task: any) => task.id === id)
    setTaskSelected(task)
  }

  function handleOnDragEnd (result: any) {
    if (!result.destination) return
    const items = Array.from(tasks)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    updateTasks(items)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='tasks'>
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.flatMap((task: any, index: number) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <li
                    className='bg-[#FFF] z-50 dark:bg-[#2B2C37] rounded-md h-[5.5rem] mb-5 p-4 flex flex-col justify-center gap-2 shadow-md shadow-[#364e7e2e]/25 cursor-pointer [&_h3]:hover:text-[#635FC7]'
                    onClick={() => { handleTaskSelected(task.id); handleTaskDetailModal() }}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    <h3 className='text-[#000112] dark:text-white text-[0.9375rem] font-bold leading-normal'>{task.title}</h3>
                    <p className='text-[0.75rem] font-bold leading-normal text-[#828FA3]'>
                      <span>
                        {task.subTasks.flatMap((subtask: any) => subtask.isCompleted ? subtask : []).length}
                      </span> of {task.subTasks.length} Subtasks
                    </p>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}
