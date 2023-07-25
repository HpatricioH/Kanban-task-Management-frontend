import { useState } from 'react'
import SubtaskInput from './SubtaskInput'
import { Button } from '@/app/core/utils/Button'

interface SubTaskInput {
  id: string
  name: string
  placeholder: string
}

const subTasksInputs = [
  {
    id: 'subtask',
    name: 'subtask',
    placeholder: 'e.g. Make coffee'
  },
  {
    id: 'subtask',
    name: 'subtask',
    placeholder: 'e.g. Drink a coffee & smile'
  }
]

export default function SubtaskSection () {
  const [inputList, setInputList] = useState<SubTaskInput[]>(subTasksInputs)

  const handleAddSubtask = () => {
    setInputList((prevList) => [...prevList, {
      id: 'subtask',
      name: 'subtask',
      placeholder: 'e.g. Keep working and smiling :)'
    }])
  }

  const handleRemoveSubtask = (index: number) => {
    setInputList((prevList) => prevList.filter((_, i) => i !== index))
  }

  return (
    <>
      <label htmlFor="" className="capitalize">Subtasks</label>
      {
        inputList.map((input, index) => {
          return (
            <SubtaskInput key={index} input={input} onRemove={() => { handleRemoveSubtask(index) }} />
          )
        })
      }

      <Button
        icon='./icons/icon-add-task-mobile.svg'
        buttonStyle={'bg-[#635fc71a] dark:bg-[#fff] w-[100%] h-[2.5rem] flex justify-center items-center rounded-xl text-[#635FC7] font-bold text-[0.8125rem] leading-[1.4375rem]'}
        imageClassName='hidden'
        onClick={handleAddSubtask}
        type='button'
      >
        + Add New Subtask
      </Button>
    </>
  )
}
