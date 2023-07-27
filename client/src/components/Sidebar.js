import React from 'react'
import logo from '../assets/logo-mp3.svg'
import { sidebarMenu } from '../ultis/menu'
import { NavLink } from 'react-router-dom'

const notActiveStyle = ' py2 px-[25px] text-[#32323d]  flex gap-[12px] items-center'
const activetStyle = 'py2 px-[25px] text-[#0e8080]  flex gap-[12px] items-center'

const SidebarLeft = () => {
    return (
        <div className='bg-[#DDE4E4]'>
            <div className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center '>
                <img src={logo} alt='logo' className='w-[120px] h-10' />
            </div>
            <div className='flex flex-col'>
                {sidebarMenu.map(item => (
                    <NavLink
                        to={item.path}
                        KEY={item.path}
                        end={item.end}
                        className={({ isActive }) => isActive ? activetStyle : notActiveStyle}>
                        {item.icons}
                        <span>
                            {item.text}
                        </span>
                    </NavLink>
                ))}
            </div>

        </div>
    )
}

export default SidebarLeft