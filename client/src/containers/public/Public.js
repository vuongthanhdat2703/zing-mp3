import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components'
const Public = () => {
    return (
        <div className='w-full flex bg-[#CED9D9]'>
            <div className='w-[240px] flex-none border border-blue-500'>
                <Sidebar />
            </div>

            <div className=' flex-auto border border-green-500' >
                <Outlet />
            </div>
            {/* <div className='w-[329px] flex-none border border-red-500'>
                <SidebarRight />
            </div> */}
        </div>

    )
}

export default Public