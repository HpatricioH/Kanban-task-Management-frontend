import { useState } from 'react'
import SubtaskInput from './SubtaskInput'
import { Button } from '@/app/core/utils/Button'

interface SubTaskInput {
  id: string
  name: string
  placeholder: string
}

const initialSubTasks = [
  {
    id: 'subtask-0',
    name: 'subtask',
    placeholder: 'e.g. Make coffee'
  },
  {
    id: 'subtask-1',
    name: 'subtask',
    placeholder: 'e.g. Drink a coffee & smile'
  }
]

export default function SubtaskSection ({ subTaskValidation }: { subTaskValidation: boolean }) {
  const [inputList, setInputList] = useState<SubTaskInput[]>(initialSubTasks)
  const [subTaskValues, setSubTaskValues] = useState<string[]>(initialSubTasks.map(() => ''))

  const handleAddSubtask = () => {
    // add a new element to `inputList` array with a new `id` and `placeholder`
    setInputList((prevList) => [
      ...prevList,
      {
        id: `subtask-${prevList.length}`,
        name: 'subtask',
        placeholder: 'e.g. Keep working and smiling :)'
      }
    ])
    //  add a new empty string to `subTaskValues` array to keep the same length as `inputList`
    setSubTaskValues((prevValues) => [...prevValues, ''])
  }

  const handleRemoveSubtask = (index: number) => {
    // remove the element at the specified `index` from `inputList`
    setInputList((prevList) => prevList.filter((_, i) => i !== index))

    // remove the element at the specified `index` from `subTaskValues`
    setSubTaskValues((prevValues) => prevValues.filter((_, i) => i !== index))
  }

  const handleSubtaskChange = (index: number, value: string) => {
    // update the element at the specified `index` from `subTaskValues` with the new `value`
    const newSubtaskValues = [...subTaskValues]
    newSubtaskValues[index] = value
    setSubTaskValues(newSubtaskValues)
  }

  return (
    <>
      <label htmlFor="" className="capitalize">
        Subtasks
      </label>
      {inputList.map((input, index) => {
        // get the value of the subtask at the specified `index` from `subTaskValues`
        const inputValue = subTaskValues[index]
        const isInvalid = subTaskValidation && inputValue === ''

        return (
          <SubtaskInput
            key={input.id}
            input={input}
            value={inputValue}
            onChange={(value) => { handleSubtaskChange(index, value) }}
            onRemove={() => { handleRemoveSubtask(index) }}
            isInvalid={isInvalid}
          />
        )
      })}

      <Button
        icon="./icons/icon-add-task-mobile.svg"
        buttonStyle="bg-[#635fc71a] dark:bg-[#fff] w-[100%] h-[2.5rem] flex justify-center items-center rounded-xl text-[#635FC7] font-bold text-[0.8125rem] leading-[1.4375rem]"
        imageClassName="hidden"
        onClick={handleAddSubtask}
        type="button"
      >
        + Add New Subtask
      </Button>
    </>
  )
}
