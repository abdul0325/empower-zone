import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogHeader() {
    return (
        <div className=' flex justify-between items-center py-20'>
            <div className=' p-3'>
                <h1 className=' text-xl sm:text-4xl  font-semibold'>Blog</h1>
                <div className=' w-full flex text-xl font-serif  sm:w-4/12 py-3'>
                    <Link to='/'><span className='flex '>  Home <span>/</span></span></Link>
                    <span className=' px-2 text-[#A48E66]'>Blog</span>
                </div>
            </div>
            <div className=' w-full sm:w-4/12 hidden sm:flex h-[400px] bg-red-500'>
                <img src="https://img.freepik.com/free-vector/hand-drawn-asian-family-illustration_23-2149425676.jpg?ga=GA1.1.1146211304.1754028702&semt=ais_hybrid&w=740&q=80" alt="missing " className=' h-full w-full' />
            </div>
        </div>
    )
}
