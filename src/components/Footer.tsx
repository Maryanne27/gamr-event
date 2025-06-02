import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 px-6 md:px-20 bg-black text-center text-sm text-white/60">
    &copy; {new Date().getFullYear()} Gamr Africa. All rights reserved.
  </footer>
  )
}
