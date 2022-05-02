import React from 'react';
import {BiHomeHeart} from 'react-icons/bi'
import {BiSearchAlt} from 'react-icons/bi'
import {BiHeart} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'



export const Navbar = ({theme}) => {
  return (
        <nav className='flex justify-around items-center fixed bottom-0 w-full py-3 border-t-4 border-zinc-700 bg-slate-100'>
            <BiHomeHeart className='w-8 h-8'/>
            <BiSearchAlt className='w-8 h-8'/>
            <BiHeart className='w-8 h-8'/>
            <BiUser className='w-8 h-8'/>
        </nav>
  )
}