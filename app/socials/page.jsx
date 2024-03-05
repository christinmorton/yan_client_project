import React from 'react'

function Socials() {
  return (
    <main className="grid grid-cols-3 gap-2">
        <h1>Socials</h1>

        <div>
          <a href="https://www.facebook.com/yan.tilesetter" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/yan.tilesetter/" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" />
          </a>
          <a href="https://www.linkedin.com/in/yan-tilesetter-0b2b1b1b6/" target="_blank" rel="noreferrer">
            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" />
          </a>
        </div>
    </main>
  )
}

export default Socials