import React from 'react'

function NewsItem({title, desc, src, url}) {
  return (
    <div className='flex flex-column-reverse m-12 container'>
        <div className="flex flex-wrap bg-black text-white blockline m-50 max-w-sm rounded overflow-hidden shadow-lg">
            
        <img class="flex h-auto max-w-full" src={src || 'default-path-of-the-image' }/>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{title}</div>
                <p class="text-gray-700 text-base">
                {desc}
                </p>
            </div>
            <div class="px-6 pt-4 pb-8">
                <a href = {url} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Read More</a>
            </div>
        </div>
    </div>
  )
}

export default NewsItem;