'use client'
'use client'

import React from 'react'
import lottieJson from '@/public/Animation_main.json'
import dynamic from 'next/dynamic'

const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
})

export default function Animation() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      style={{ width: 400, height: 400 }}
    />
  )
}