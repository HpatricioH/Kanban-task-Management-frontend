import AddNewColumn from './components/Main/columns/AddNewColumn'

export default function Home () {
  // TODO: add a button to create a new board if the board is not selected or the board is empty

  return (
    <main className={'min-h-screen p-4 bg-[#F4F7FD] dark:bg-[#20212C] overflow-x-scroll'}>
      <div className="z-10 text-sm flex justify-center items-center min-h-screen">
        <AddNewColumn />
      </div>
    </main>
  )
}
