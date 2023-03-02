import React from 'react'

import { rows } from './helper'

type Props = {
  type: string
  onViewType: (type: string) => void
}

const TaskList: React.FC<Props> = ({ type, onViewType }) => {
  // const onChangeType = (event) => {
  //   console.log('value', event.target.value)
  // }
  return (
    <div className='flex flex-col min-w-[230px]'>
      <div className='flex p-3 border flex justify-center items-center'>
        <select
          className=' w-16 border round-sm'
          onChange={(e) => {
            console.log('value', e.target.value)
            onViewType(e.target.value)
          }}
        >
          <option value='day'>Day</option>
          <option value='month'>Month</option>
        </select>
      </div>
      {rows.map((row) => {
        return (
          <div className='flex p-[14px] border'>
            <div className='h-full flex items-center justify-center mr-2'>
              <div
                className={`h-2 w-2 rounded-full`}
                style={{ backgroundColor: row.color }}
              ></div>
            </div>
            <p className='justify-center text-sm font-bold mr-2'>{row.label}</p>
            <p className='rounded-full px-1 text-sm bg-gray-200'>
              {row.amount}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default TaskList
