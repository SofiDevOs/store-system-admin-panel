import Link from 'next/link'
import React from 'react'

const EmployeeHeader = () => {
  return (
    <header className='flex w-full shadow shadow-foreground/10 p-4  items-center justify-end'>
        <Link
        className='px-2 py-1 text-white font-bold bg-slate-700 rounded-sm '
        href={'/employee/register'}>
            Agregar nuevo empleado
        </Link>
    </header>
  )
}

export default EmployeeHeader
