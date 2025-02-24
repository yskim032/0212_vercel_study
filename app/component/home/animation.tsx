'use client'

import React from 'react'
import lottieJson from '../../../public/Animation_main.json'
import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'



export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 700, height: 700 }}
    />
  )
}