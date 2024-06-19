import React from 'react'

const Card = ({data,handleClick,index}) => {
    const {image, artist,added,name}=data;
  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative mt-10'>
        <div className='w-20 h-20 bg-orange-600 rounded-md '>
            <img className='w-full h-full object-cover' src={image} overflow-hidden/>
        </div>
        <div className=''>
            <h3 className='text-xl leading-none font-bold'> {name}</h3>
            <h6 className='text-sm'>{artist}</h6>
            <button onClick={()=>handleClick(index)} className={`px-4 py-3 whitespace-nowrap ${added===false ? "bg-orange-600" : "bg-teal-700"} absolute bottom-0 left-1/2 -translate-x-[50%] text-white rounded-full translate-y-[50%] text-xs`}>{added===false ? "Add To Favourites":"Added"}</button>
        </div>
    </div>
  )
}

export default Card