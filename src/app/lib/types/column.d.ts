import { type Column } from './api'

export interface ColumnCardsProps {
  boardColumn: Column[]
  taskDetailsModal: boolean
  setTaskDetailsModal: (value: boolean) => void
  setTaskSelected: (value: any) => void
}
