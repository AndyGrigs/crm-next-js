import React from 'react'
import clsx from 'clsx'

export enum Status {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
  SUSPENDED = "suspended"
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean
}

const StatusLabel = ({children, status, disabled}: StatusLabelProps) => {
  return (
    <div className={clsx('inline-flex items-center px-3.5 py-1 rounded-3xl text-sm font-medium',
     status === Status.ACTIVE && 'bg-green-100 text-green-800',
     status === Status.INACTIVE && 'bg-red-100 text-red-800',
     status === Status.PENDING && 'bg-yellow-100 text-yellow-800',
     status === Status.SUSPENDED && 'bg-gray-100 text-gray-800',
      {
        ['opacity-50 pointer-events-none']: disabled
      }
      )}>
        <div className='w-1 h-1 mr-2 bg-current rounded-full'></div>
        {children}
    </div>
  )
}



export default StatusLabel