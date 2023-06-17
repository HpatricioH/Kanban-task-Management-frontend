import Image from 'next/image'
import { useState } from 'react'
import { useTheme } from 'next-themes'

export const ThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()

  const handleToggle = () => {
    setIsDarkTheme(true)
    !isDarkTheme ? setTheme('dark') : setTheme('light')
  }

  console.log(theme + ' ' + isDarkTheme)

  return (
    <div className='flex bg-[#20212C] m-4 p-4 rounded-md justify-center items-center gap-6'>
      <Image
        src='./icons/icon-light-theme.svg'
        alt='board icon'
        width={18}
        height={18}
      />
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleFour"
            className="sr-only"
            checked={isDarkTheme}
            onChange={handleToggle}
          />
          <div
            className={'box bg-[#635FC7] block h-6 w-12 rounded-full transition '}
          ></div>
          <div
            className={`dot absolute ${theme === 'light' ? 'left-1' : 'right-1'
              } top-[0.25rem] flex h-[1.05rem] w-[1.05rem] items-center justify-center rounded-full bg-white transition`}
          ></div>
        </div>
      </label>
      <Image
        src='./icons/icon-dark-theme.svg'
        alt='board icon'
        width={18}
        height={18}
      />
    </div>
  )
}
