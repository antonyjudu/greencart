import React from 'react'

function NewsLetter() {
  return (
    <div className="w-full bg-emerald-100/40 px-2 text-center py-20 flex flex-col items-center justify-center mt-4">
        <p className="text-gray-600 font-bold text-3xl">Get Updated!</p>
        <h1 className="max-w-lg font-semibold text-4xl/[44px] mt-2">Subscribe to our News Letter & Get the Latest News</h1>
        <div className="flex items-center justify-center mt-10 border border-slate-600 focus-within:outline focus-within:outline-primary text-sm rounded-full h-14 max-w-md w-full">
            <input type="text" className="bg-transparent outline-none rounded-full px-4 h-full flex-1" placeholder="Enter your email address"/>
            <button className="bg-primary hover:bg-primary-dull cursor-pointer text-gray-700 rounded-full h-11 mr-1 px-8 flex items-center justify-center">
                Subscribe now
            </button>
        </div>
    </div>
  )
}

export default NewsLetter
