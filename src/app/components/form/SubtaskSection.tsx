import { useMemo, useState } from 'react'
import SubtaskInput from './SubtaskInput'
import { Button } from '@/app/core/utils/Button'
import { deleteSubTasks } from '@/app/core/services/deleteSubTasks'
import { type SubtaskSectionProps } from '@/app/lib/types/subtasks'

const initialSubTasks = [
  { id: 'subtask-0', name: 'subtask', placeholder: 'e.g. Make coffee' },
  { id: 'subtask-1', name: 'subtask', placeholder: 'e.g. Drink a coffee & smile' }
]

export default function SubtaskSection ({ subTaskValidation, taskSelected, typeOfForm }: SubtaskSectionProps) {
  const [inputList, setInputList] = useState(initialSubTasks)
  const [subTaskValues, setSubTaskValues] = useState<string[]>(initialSubTasks.map(() => ''))

  const computedValues = useMemo(() => {
    const newInputList = [...inputList]
    const newSubTaskValues = [...subTaskValues]

    if (taskSelected) {
      for (let i = inputList.length; i < taskSelected.subTasks.length; i++) {
        newInputList.push({
          id: `subtask-${i}`,
          name: 'subtask',
          placeholder: 'e.g. Keep working and smiling :)'
        })
        newSubTaskValues.push('')
      }
    }

    return { newInputList, newSubTaskValues }
  }, [taskSelected, inputList, subTaskValues])

  const addSubtask = () => {
    setInputList(prevList => [
      ...prevList,
      {
        id: `subtask-${prevList.length}`,
        name: 'subtask',
        placeholder: 'e.g. Keep working and smiling :)'
      }
    ])
    setSubTaskValues(prevValues => [...prevValues, ''])
  }

  const removeSubtask = (index: number) => {
    setInputList(prevList => prevList.filter((_, i) => i !== index))
    setSubTaskValues(prevValues => prevValues.filter((_, i) => i !== index))
  }

  const handleAddSubtask = () => {
    addSubtask()
  }

  const handleRemoveSubtask = (index: number) => {
    const selectedSubtask = taskSelected?.subTasks?.[index]

    if (typeOfForm === 'Edit Task' && selectedSubtask) {
      deleteSubTasks(selectedSubtask.id)
    } else {
      removeSubtask(index)
    }
  }

  const handleSubtaskChange = (index: number, value: string) => {
    const newSubtaskValues = [...subTaskValues]
    newSubtaskValues[index] = value
    setSubTaskValues(newSubtaskValues)
  }

  return (
    <>
      <label htmlFor="" className="capitalize">
        Subtasks
      </label>
      {computedValues.newInputList.map((input, index) => {
        const subtask = taskSelected?.subTasks?.[index]
        const inputValue = subtask?.title ?? ''
        const isInvalid = subTaskValidation && inputValue === ''

        return (
          <SubtaskInput
            key={input.id}
            input={input}
            value={inputValue}
            onChange={value => { handleSubtaskChange(index, value) }}
            onRemove={() => { handleRemoveSubtask(index) }}
            isInvalid={isInvalid}
            typeOfForm={typeOfForm}
          />
        )
      })}

      <Button
        icon="./icons/icon-add-task-mobile.svg"
        buttonStyle="bg-[#635fc71a] dark:bg-[#fff] w-[100%] h-[2.5rem] flex justify-center items-center rounded-[1.25rem] text-[#635FC7] font-bold text-[0.8125rem] leading-[1.4375rem]"
        imageClassName="hidden"
        onClick={handleAddSubtask}
        type="button"
      >
        + Add New Subtask
      </Button>
    </>
  )
}
