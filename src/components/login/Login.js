import React from 'react';
import firebase, { auth, db } from '../../firebase/Config'
import { addDocument, generateKeywords } from '../../firebase/Service';


const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function Login() {

    const handleLogin = async (provider) => {
        const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

        if (additionalUserInfo?.isNewUser) {
            addDocument('users', {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: additionalUserInfo.providerId,
                keywords: generateKeywords(user.displayName?.toLowerCase()),
            });
        }


    }


    return (
        <div className='text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh] overflow-hidden flex flex-col'>
            <h1 className='text-6xl m-4  '>Chit Chat Room</h1>
            <h3 className='text-lg italic mb-2'>Login with</h3>
            <div className=' flex flex-col   '>
                <button className='py-6 px-28 cursor-pointer hover:text-white text-xl hover:border'
                    onClick={() => handleLogin(googleProvider)}>
                    <i class="fa fa-google mr-4 " ></i>
                    Google
                </button>
                <button className='py-6 px-28 cursor-pointer hover:text-white text-xl hover:border '
                    onClick={() => handleLogin(fbProvider)}
                >
                    <i class="fa fa-facebook mr-4" ></i>
                    Facebook
                </button>
            </div>

        </div>

    )
}

