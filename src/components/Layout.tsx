import React, { type PropsWithChildren } from 'react'
import Header from './Header'

const Layout = ({children}:PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">footer</footer>
    </div>
  )
}

export default Layout