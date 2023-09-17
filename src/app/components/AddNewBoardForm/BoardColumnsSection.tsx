import { useState, useMemo } from 'react'
import BoardColumnInput from './BoardColumnInput'
import { Button } from '@/app/core/utils/Button'
import { type Column } from '@/app/lib/hooks/useGetBoards'

interface BoardColumnsSectionProps {
  columns?: Column[]
  typeOfForm?: string
}

const initialColumns = [
  { id: 'boardColumn-0', name: 'BoardColumn', placeholder: 'e.g. Todo' },
  { id: 'boardColumn-1', name: 'BoardColumn', placeholder: 'e.g. Doing' }
]

export default function BoardColumnsSection ({ columns, typeOfForm }: BoardColumnsSectionProps) {
  const [inputList, setInputList] = useState(initialColumns)
  const [columnValues, setColumnValues] = useState<string[]>(initialColumns.map(() => ''))

  const computedValues = useMemo(() => {
    const newInputList = [...inputList]
    const newColumnValues = [...columnValues]

    if (columns) {
      for (let i = inputList.length; i < columns.length; i++) {
        newInputList.push({
          id: `boardColumn-${i}`,
          name: 'BoardColumn',
          placeholder: 'e.g. Done'
        })
        newColumnValues.push('')
      }
    }

    return { newInputList, newColumnValues }
  }, [columns, inputList, columnValues])

  const handleAddColumn = () => {
    setInputList(prevList => [
      ...prevList,
      {
        id: `boardColumn-${prevList.length}`,
        name: 'BoardColumn',
        placeholder: 'e.g. Done'
      }
    ])
    setColumnValues(prevValues => [...prevValues, ''])
  }

  const handleRemoveColumn = (index: number) => {
    setInputList(prevList => prevList.filter((_, i) => i !== index))
    setColumnValues(prevValues => prevValues.filter((_, i) => i !== index))
  }

  const handleColumnChange = (index: number, value: string) => {
    const newColumnValues = [...columnValues]
    newColumnValues[index] = value
    setColumnValues(newColumnValues)
  }

  return (
    <>
      <label htmlFor="" className="capitalize pt-3">
        Board Columns
      </label>
      {computedValues.newInputList.map((input, index) => {
        const value = columns ? columns[index]?.name : computedValues.newColumnValues[index]

        return (
          <BoardColumnInput
            key={input.id}
            input={input}
            value={value}
            onChange={value => { handleColumnChange(index, value) }}
            onRemove={() => { handleRemoveColumn(index) }}
            typeOfForm={typeOfForm}
          />
        )
      })}
      <Button
        icon="./icons/icon-add-task-mobile.svg"
        buttonStyle="bg-[#635fc71a] dark:bg-[#fff] w-[100%] h-[2.5rem] flex justify-center items-center rounded-[1.25rem] text-[#635FC7] font-bold text-[0.8125rem] leading-[1.4375rem]"
        imageClassName="hidden"
        onClick={handleAddColumn}
        type="button"
      >
        + Add New Column
      </Button>
    </>
  )
}
