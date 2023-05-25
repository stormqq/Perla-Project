'use client'
import React from 'react'
import {signIn, signOut, useSession } from 'next-auth/react'
import Button from '@mui/base/Button';
function page() {
    const {data} = useSession()
    console.log(data)
  return (
    <div>
        {data ? <div>
            Signed in as {data.user.email} <br/>
            <button onClick={() => signOut()}>Sign out</button>
            <Button>Click Me</Button>;
            </div> : <div>
                Not signed in <br/>
                <button onClick={() => signIn()}>Sign in</button>
            </div>

        }

    </div>
  )
}

export default page