export default function Header() {
  return (
    <div>
          <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img 
                    src="/ys_logo.png"
                    alt="YS Tech Logo" 
                    width={150}
                    height={150}
                    className="p-2 rounded-full"
                />


                <span className="ml-3 text-3xl font-bold">YS Tech</span>
              </a>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900">Home</a>
                <a className="mr-5 hover:text-gray-900">Android Tester</a>
                <a className="mr-5 hover:text-gray-900">APP</a>
                <a className="mr-5 hover:text-gray-900">WEB</a>
              </nav>
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Portfolio
                <svg fill="none" stroke="currentColor" strokeLinecap="round" stroklinejoin-="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
    </header>
    </div>
  )
}
