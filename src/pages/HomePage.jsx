import React from 'react'
import HeroSection from '../components/layout/HeroSection'
import QuestionSection from '@/components/layout/QuestionSection'

const HomePage = () => {
  return (
   <div className='min-h-screen w-screen text-gray-700 flex flex-col items-center justify-center p-4 mt-22 pr-8'>

    <HeroSection />
    <QuestionSection />
   </div>
  )
}

export default HomePage