import { useState } from 'react'
import { type SubTaskInput } from '../form/SubtaskSection'
import { Button } from '@/app/core/utils/Button'
import BoardColumnInput from './BoardColumnInput'

const BoardColumns = [
  {
    id: 'boardColumn-0',
    name: 'Todo',
    placeholder: 'e.g. Todo'
  },
  {
    id: 'boardColumn-1',
    name: 'Doing',
    placeholder: 'e.g. Doing'
  }

]

export default function BoardColumnsSection () {
  const [inputList, setInputList] = useState<SubTaskInput[]>(BoardColumns)
  const [subTaskValues, setSubTaskValues] = useState<string[]>(BoardColumns.map(() => ''))

  const handleAddSubtask = () => {
    // add a new element to `inputList` array with a new `id` and `placeholder`
    setInputList((prevList) => [
      ...prevList,
      {
        id: `boardColumn-${prevList.length}`,
        name: '',
        placeholder: 'e.g. Done'
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
      // const subtask = taskSelected?.subTasks?.[index]
      // const inputValue = subtask?.title ?? ''
      // const isInvalid = subTaskValidation && inputValue === ''

      return (
        <BoardColumnInput
          key={input.id}
          input={input}
          // value={input.name}
          onChange={(value) => { handleSubtaskChange(index, value) }}
          onRemove={() => { handleRemoveSubtask(index) }}
          // isInvalid={isInvalid}
          // typeOfForm={typeOfForm}
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
