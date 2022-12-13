import React, { ReactNode } from 'react'


type Props = {
    children: ReactNode 
}
const Layout = ({children}: Props) => {
    return (
        <div className='app'>
            {children}
        </div>
    )
}
export default Layout