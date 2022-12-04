import React from 'react'

export const Banner = () => {
  return (
    <div className="bg-indigo-600">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex justify-evenly items-center">
            <p className="truncate font-medium text-white p-2">
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">Big news! We're excited to announce a brand new product.</span>
            </p>
        </div>
      </div>
    </div>
  )
}
export default Banner
