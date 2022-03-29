import { Avatar, Button, Tooltip } from 'antd'
import React from 'react'

function Header() {
    return (
        <div className='h-[80px] flex items-center justify-between  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='ml-5 text-white'>
                <p className='text-lg'>Room1</p>
                <span className='text-gray-200 truncate'> Room description</span>
            </div>
            <div className='flex mr-5 items-center'>
                <Button className='mr-3 text-white text-base px-6'> <i class="fa fa-plus mr-2" aria-hidden="true"></i> Invite </Button>
                <Avatar.Group size='small' maxCount={2}>
                    <Tooltip title='A'>
                        <Avatar>A</Avatar>
                    </Tooltip>
                    <Tooltip title='A'>
                        <Avatar>A</Avatar>
                    </Tooltip>
                    <Tooltip title='A'>
                        <Avatar>A</Avatar>
                    </Tooltip>
                </Avatar.Group>
            </div>
        </div>
    )
}

export default Header