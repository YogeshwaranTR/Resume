import React from 'react'
import Myphoto from './Yj.jpg'
 import './Indexs.css'

export default function Image() {
  return (
    <div className='img-wrapper'>
        <img src={Myphoto}
            alt='myphoto'
            width='300px'
            height='300px' />
    </div>
  )
}