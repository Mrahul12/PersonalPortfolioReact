import { useState } from 'react'
import Profile from './Component/Profile'
import Profiler from './Component/Profiler'
function App() {

  return (
    <>
     <header className='md:h-[100vh]  px-5 py-3 bg-slate-400 flex flex-wrap gap-3 justify-between items-end '>
      <Profile/>
      <Profiler className='hiddens'/>
    
     </header>
    </>
  )
}

export default App
