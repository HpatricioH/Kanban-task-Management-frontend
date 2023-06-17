import MainColumn from './components/Main/MainColumn'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F4F7FD] dark:bg-[#20212C] ">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm  lg:flex">
       <MainColumn />
      </div>
    </main>
  )
}
