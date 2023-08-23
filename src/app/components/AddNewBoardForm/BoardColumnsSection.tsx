import { useState } from 'react'
import { type SubTaskInput } from '../form/SubtaskSection'
import { Button } from '@/app/core/utils/Button'
import BoardColumnInput from './BoardColumnInput'

interface BoardColumnsSectionProps {
  boardColumnsValues: string[]
}

const BoardColumns = [
  {
    id: 'boardColumn-0',
    name: 'BoardColumn',
    placeholder: 'e.g. Todo'
  },
  {
    id: 'boardColumn-1',
    name: 'BoardColumn',
    placeholder: 'e.g. Doing'
  }

]

export default function BoardColumnsSection ({ boardColumnsValues }: BoardColumnsSectionProps) {
  const [inputList, setInputList] = useState<SubTaskInput[]>(BoardColumns)
  const [boardUpdateColumnsValues, setBoardUpdateColumnsValues] = useState<string[]>(BoardColumns.map(() => ''))

  const handleAddBoard = () => {
    // add a new element to `inputList` array with a new `id` and `placeholder`
    setInputList((prevList) => [
      ...prevList,
      {
        id: `boardColumn-${prevList.length}`,
        name: 'BoardColumn',
        placeholder: 'e.g. Done'
      }
    ])
    //  add a new empty string to `boardUpdateColumnsValues` array to keep the same length as `inputList`
    setBoardUpdateColumnsValues((prevValues) => [...prevValues, ''])
  }

  const handleRemoveSubtask = (index: number) => {
    // remove the element at the specified `index` from `inputList`
    setInputList((prevList) => prevList.filter((_, i) => i !== index))

    // remove the element at the specified `index` from `boardUpdateColumnsValues`
    setBoardUpdateColumnsValues((prevValues) => prevValues.filter((_, i) => i !== index))
  }

  const handleSubtaskChange = (index: number, value: string) => {
    // update the element at the specified `index` from `boardUpdateColumnsValues` with the new `value`
    const newBoardColumnValues = [...boardUpdateColumnsValues]
    newBoardColumnValues[index] = value
    setBoardUpdateColumnsValues(newBoardColumnValues)
  }

  return (
    <>
    <label htmlFor="" className="capitalize pt-3">
      Board Columns
    </label>
    {inputList.map((input, index) => {
      // get the value of the corresponding input from `boardColumnsValues` to check if it's empty
      const value = boardUpdateColumnsValues[index]
      const isInvalid = boardColumnsValues.includes('') && value === ''

      return (
        <BoardColumnInput
          key={input.id}
          input={input}
          // value={input.name}
          onChange={(e) => { handleSubtaskChange(index, value) }}
          onRemove={() => { handleRemoveSubtask(index) }}
          isInvalid={isInvalid}
          // typeOfForm={typeOfForm}
        />
      )
    })}

    <Button
      icon="./icons/icon-add-task-mobile.svg"
      buttonStyle="bg-[#635fc71a] dark:bg-[#fff] w-[100%] h-[2.5rem] flex justify-center items-center rounded-xl text-[#635FC7] font-bold text-[0.8125rem] leading-[1.4375rem]"
      imageClassName="hidden"
      onClick={handleAddBoard}
      type="button"
    >
      + Add New Column
    </Button>
  </>
  )
}
