import { type PropsWithChildren } from 'react'


const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted">

        <main className="">{children}</main>
     
    </div>
  )
}

export default Layout