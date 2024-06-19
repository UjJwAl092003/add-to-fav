import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full px-20 py-3 flex justify-between items-center'>
        <h3>
            Orange
        </h3>
        <div className='flex p-2 px-4 rounded-md text-sm gap-3 bg-orange-600 text-white'>
            <h3>Favourites</h3>
            <h4>{data.filter(item=>item.added).length}</h4>
        </div>
    </div>
  )
}

export default Navbar