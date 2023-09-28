import { type Column } from './api'

export interface AddNewBoardFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  titleFormValidation: boolean
  subtaskFormValidation?: boolean
  columns?: Column[]
  typeOfForm?: string
  activeBoardName?: string
  boardColumnsValues?: string[]
}

export interface AddNewBoardProps {
  setAddTaskModal: (value: boolean) => void
}

export interface BoardColumnsSectionProps {
  columns?: Column[]
  typeOfForm?: string
}

export interface BoardSettings {
  setBoardSettingsModal: (value: boolean) => void
  setEditBoardModal: (value: boolean) => void
  setDeleteBoardModal: (value: boolean) => void
  editBoardModal: boolean
}

export interface ShowModal {
  setShowModal?: (value: boolean) => void
  showAddNewBoardModal?: boolean
  setShowAddNewBoardModal?: (value: boolean) => void
}

export interface DeleteBoardProps {
  setDeleteBoardModal?: (value: boolean) => void
  setDeleteTaskModal?: (value: boolean) => void
  taskId?: string
  typeOfForm?: string
  boardName?: string
  taskName?: string
}

export interface EditBoardProps {
  setEditBoardModal: (value: boolean) => void
}

export interface showModalBoardState {
  showAddNewBoardModal: boolean
  setShowAddNewBoardModal: React.Dispatch<React.SetStateAction<boolean>>
}
