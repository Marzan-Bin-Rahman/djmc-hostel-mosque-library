import React from 'react'
import HeroSection from '../components/layout/HeroSection'
import QuestionSection from '@/components/layout/QuestionSection'

const HomePage = () => {
  return (
   <div className='min-h-screen max-w-screen text-gray-700 flex flex-col items-center justify-center mt-22 mx-4'>

    <HeroSection />
    <QuestionSection />
   </div>
  )
}

export default HomePage