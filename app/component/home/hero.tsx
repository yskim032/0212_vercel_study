'use client'
import Link from 'next/link';
export default function Hero() {
    return (


            <div>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 bg-primary text-primary">IT solutions for ordinary people

                    </h1>

                    <p className="mb-8 leading-relaxed">&ldquo;We provide essential IT solutions tailored for everyday individuals who struggle with technology. Moving beyond generic solutions from big tech, we deliver personalized, customized experiences that empower you to build a more fulfilling life.&rdquo;</p>
                    <div className="flex justify-center">

                        <Link href="/Project" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Project</Link>

                    </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">

                </div>
            </div>
 
    )
}
