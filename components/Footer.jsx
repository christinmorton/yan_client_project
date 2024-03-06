import FooterNavigation from "./navigation/FooterNavigation";


import React from 'react'

function Footer() {
  return (
    <footer className="min-w-full grid grid-cols-4 gap-4 justify-between content-between bg-slate-900 px-36">
        <FooterNavigation />
        <p className="col-start-4 text-white text-center my-auto">&copy; 2024, All rights reserved</p>
    </footer>
  )
}

export default Footer