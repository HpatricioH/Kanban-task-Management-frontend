import { useGetBoards } from '@/app/lib/hooks/useGetBoards'
import IconBoard from '@/app/core/utils/svgIcons'
import { Spinner } from '@/app/core/utils/Spinner'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

export function BoardsData () {
  const boardsData = useGetBoards()
  const loading = boardsData?.loading
  const pathname = usePathname()
  const router = useRouter()
  const id = pathname.slice(1)

  // TODO: add feature to close modal when select a board
  const handleClick = (boardId: string) => {
    if (id === boardId) {
      router.push('/')
    }
  }

  return (
    <>
      <h1 className='uppercase px-4 pt-4 text-[#828FA3] font-bold text-xs tracking-[0.15rem] leading-[0.938rem]'>
        All Boards {!loading ? `(${boardsData.boards?.length ?? 0})` : '(0)'}
      </h1>
      {loading
        ? (
          <div className='flex justify-center items-center pt-3'>
            <Spinner />
          </div>
          )
        : (
            boardsData.boards?.map((board) => {
              const isActive = pathname.startsWith(`/${board.id}`)

              return (
              <div
                key={board.id}
                className={`w-[15rem] rounded-r-3xl  font-semibold  text-[0.938rem] leading-[1.188rem] 
                ${isActive
                  ? 'text-[#FFFFFF] bg-[#635FC7]'
                  : 'text-[#828FA3]'}`}
                onClick={() => { handleClick(board.id) }}
              >
                <div className='flex pl-4 gap-3 py-4'>
                  <IconBoard fill={isActive ? '#FFF' : '#828FA3'} />
                  <Link href={`/${board.id}`}>{board.name}</Link>
                </div>
              </div>
              )
            })
          )}
    </>
  )
}
