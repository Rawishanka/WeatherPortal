import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t backdrop-blur text-sm text-teal-600 supports-[backdrop-filter]:bg-background/60 flex justify-center"><p>
    © {new Date().getFullYear()} WeatherPortal. Built with ♥ using React, Shadcn UI, and WeatherAPI.
  </p></footer>
  )
}

export default Footer