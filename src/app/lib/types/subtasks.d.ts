import { type Column, type Task } from '@/app/lib/types/api'

export interface SubtaskInputProps {
  input: {
    id: string
    name: string
    placeholder: string
  }
  value?: string
  onChange: (value: string) => void
  onRemove: () => void
  isInvalid?: boolean
  typeOfForm?: string
}

export interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  titleFormValidation: boolean
  descriptionFormValidation: boolean
  subtaskFormValidation?: boolean
  column: Column[]
  typeOfForm?: string
  taskSelected?: Task
}

export interface SubTask {
  id: string
  isCompleted: boolean
  taskId: string
  title: string
}

export interface SubtaskSectionProps {
  taskSelected?: {
    columnId: string
    description: string
    id: string
    status: string
    subTasks: SubTask[]
    title: string
  }
  subTaskValidation?: boolean
  typeOfForm?: string
}

export interface SubtaskProps {
  subtask: SubTask
}
