import MainColumn from './components/Main/MainColumn'

export default function Home () {
  return (
    <main className={'min-h-screen p-4 bg-[#F4F7FD] dark:bg-[#20212C] overflow-x-scroll'}>
      <div className="z-10 text-sm">
       <MainColumn />
      </div>
    </main>
  )
}
