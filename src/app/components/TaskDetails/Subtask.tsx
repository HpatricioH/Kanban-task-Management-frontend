import { type SubTask } from '../form/SubtaskSection'
import { updateSubtask } from '@/app/core/services/updateSubtask'
import { subtaskUpdated } from '@/app/lib/store/subtaskUpdatedStore'
import { useCallback, useState } from 'react'

interface SubtaskProps {
  subtask: SubTask
}

export function Subtask ({ subtask }: SubtaskProps) {
  const [isCompleted, setIsCompleted] = useState(subtask.isCompleted)
  const { setSubtaskUpdate } = subtaskUpdated()

  const toggleCheckbox = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const { id, title, taskId } = subtask
    updateSubtask({ id, title, taskId, isCompleted: target.checked })
    setIsCompleted(target.checked)
    setSubtaskUpdate(true)
  }, [subtask, setSubtaskUpdate])

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded h-[3.6875rem] bg-[#20212c] ${isCompleted ? '' : 'hover:bg-[#635FC7] font-bold'}`}
    >
      <input
        type='checkbox'
        className={`w-4 h-4 border rounded-[0.125rem] ${isCompleted ? 'checked:bg-[#635FC7]' : 'bg-[#2B2C37] border border-[#828fa340]'}`}
        checked={isCompleted}
        onChange={toggleCheckbox}
      />
      <label
        className={`text-[0.75rem] font-bold leading-normal ${isCompleted ? 'text-[#fff] opacity-50 line-through font-bold ' : 'text-[#fff] font-bold'}`}
      >
        {subtask.title}
      </label>
    </div>
  )
}
