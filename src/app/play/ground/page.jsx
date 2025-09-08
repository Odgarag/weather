'use client'

import { Test } from './_components/test'

const Ground = () => {
  console.log('hog')
  return (
    <div className="bg-sky-500">
      Ground page
      <Test />
    </div>
  )
}
export default Ground
