import Image from 'next/image';
import Link from 'next/link';
import DarkMode from './home/darkmode';


export default function Header() {
  return (
    <div>
          <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Image 
                    src="/ys_logo.png"
                    alt="YS Tech Logo" 
                    width={150}
                    height={150}
                    className="p-2 rounded-full"
                />
                <span className="ml-3 text-3xl font-bold text-primary">YS Tech</span>
              </a>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
               
                <Link href="/" className="mr-5 hover:text-gray-900 dark:hover:text-yellow-500">Home</Link>

                <Link href="/Project" className="mr-5 hover:text-gray-900 dark:hover:text-yellow-500">Project</Link>

                <Link href="/Android_Tester" className="mr-5 hover:text-gray-900 dark:hover:text-yellow-500">Android Tester</Link>
       
                <Link href="/app_solution" className="mr-5 hover:text-gray-900 dark:hover:text-yellow-500">App_solution</Link>
                <Link href="/WEB" className="mr-5 hover:text-gray-900 dark:hover:text-yellow-500">WEB</Link>
              </nav>

                {/* 버튼작업공간 */}
                <DarkMode />


            </div>
          </header>
    </div>
  )
}
