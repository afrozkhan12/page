import React from 'react'
import Calandar from './Calander'
const Rightside = () => {
  return (
    <>
        <div className='w-64 ' >
            <div className='flex ' >
                <div className='rounded h-10 w-10 border-2 mt-8 ml-5 border-black' >
                    <img
                        src=""
                        alt=''
                    />
                </div>
                <div className='mt-7 ml-5' >
                    <h3 className='font-semibold text-xl '>Jeremy zuck</h3>
                    <p>Traveler Enthausiast</p>
                </div>
            </div>
            <Calandar/>
            <h1 className='text-2xl font-semibold mt-6'>My schedule</h1>
            <div>          
              <div className='border-2 rounded-xl flex px-2 py-1 mt-2 w-56'>
                    <div>
                        <img 
                            src=''
                        />
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold'>Crooked first</h1>
                        <p>16 june - 20 june</p>
                    </div>
            </div>
              <div className='border-2 rounded-xl flex px-2 py-1 mt-2 w-56'>
                    <div>
                        <img 
                            src=''
                        />
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold'>Crooked first</h1>
                        <p>16 june - 20 june</p>
                    </div>
            </div>
              <div className='border-2 rounded-xl flex px-2 py-1 mt-2 w-56'>
                    <div>
                        <img 
                            src=''
                        />
                    </div>
                    <div>
                        <h1 className='text-lg font-semibold'>Crooked first</h1>
                        <p>16 june - 20 june</p>
                    </div>
            </div>
            </div>

        </div>
    </>
  )
}

export default Rightside