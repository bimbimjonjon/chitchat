import React from 'react'
import { auth, db } from '../../firebase/Config'
import { AuthContext } from '../../Context/AuthProvider'

function UserInfo() {
    const {
        user: { displayName, photoURL },
    } = React.useContext(AuthContext);



    return (
        <div className='flex items-center justify-between  my-4 text-white  '>
            <div className='flex  items-center ml-4 '>
                <img
                    alt='profile-picture'
                    src={photoURL}
                    className='object-cover rounded-full h-12 w-12'
                />
                <h2 className='ml-2 mr-6 text-white text-lg'>{displayName}</h2>
            </div>
            <button className='mr-4 px-6 py-2 border rounded-[2px]  flex items-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                <i class="fa fa-sign-out mr-2"></i>
                <h3 className='text-white text-base ' onClick={() => auth.signOut()}>Log Out</h3>

            </button>
        </div>
    )
}

export default UserInfo