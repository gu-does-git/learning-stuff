import { useEffect, useState } from 'preact/hooks'

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light')

    useEffect(() => {
        console.log(theme)
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <label className="absolute right-3 inline-flex cursor-pointer items-center">
            <input type="checkbox" value="" className="peer sr-only" />
            <div
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="peer h-6 w-11 rounded-full bg-gray-200 bg-gray-700 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-sky-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:peer-focus:ring-blue-800"
            ></div>
        </label>
    )
}
