import { Avatar, Typography } from 'antd'
import React from 'react'
import { formatRelative } from 'date-fns/esm';

function Message({ text, displayName, createdAt, photoURL }) {
    function formatDate(seconds) {
        let formattedDate = '';

        if (seconds) {
            formattedDate = formatRelative(new Date(seconds * 1000), new Date());

            formattedDate =
                formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        }

        return formattedDate;
    }
    return (
        <div className=' ml-6 my-4'>
            <div className='flex items-center' >
                <Avatar className='' src={photoURL}> {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}</Avatar>
                <Typography.Text className='text-white ml-4 text-lg '>{displayName}</Typography.Text>
                <Typography.Text className='text-white ml-8 italic '>    {formatDate(createdAt?.seconds)}</Typography.Text>
            </div>
            <div className='mt-2 ml-[50px]'>
                <Typography.Text className='text-white text-base '>{text}</Typography.Text>

            </div>



        </div>
    )
}

export default Message