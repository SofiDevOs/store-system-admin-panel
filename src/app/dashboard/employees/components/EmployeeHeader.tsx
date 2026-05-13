import Link from 'next/link'
import React from 'react'

const EmployeeHeader = () => {
  return (
    <header className='flex w-full  p-4  items-center justify-end'>
        <Link
        className='px-3 py-1.5 font-bold rounded-sm bg-emerald-600 text-white hover:bg-emerald-700 transition-colors dark:bg-emerald-600 dark:hover:bg-emerald-500'
        href={'/dashboard/employees/register'}>
            Agregar nuevo empleado
        </Link>
    </header>
  )
}

export default EmployeeHeader
