import React from 'react'

const Carousel = ({children: slides}) => {
  return (
    <div>
        <div>
            {slides}
        </div>
    </div>
  )
}

export default Carousel