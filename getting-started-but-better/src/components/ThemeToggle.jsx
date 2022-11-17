import { useEffect, useState } from 'preact/hooks'

export default function ThemeToggle() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark')

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <label className="absolute right-3 inline-flex cursor-pointer items-center">
            <input
                type="checkbox"
                value=""
                className={theme + ' peer sr-only'}
            />
            <div
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="peer h-6 w-11 rounded-full bg-gray-700 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 peer-[.dark]:bg-indigo-600 peer-[.dark]:after:translate-x-full peer-[.dark]:after:border-white dark:border-gray-600 dark:peer-focus:ring-indigo-800"
            ></div>
        </label>
    )
}
