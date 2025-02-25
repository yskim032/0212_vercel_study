import { useTheme } from 'next-themes'


export default function DarkMode() {

    const { theme, setTheme } = useTheme()
    
    return (
        <div>

                <button 
                    className="inline-flex items-center bg-gray-100 dark:bg-gray-800 dark:text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-base mt-4 md:mt-0" 
                    type="button"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}   
                >
                    {theme === 'dark' ? '라이트 모드' : '다크 모드'}
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>

        </div>
    )
}   
