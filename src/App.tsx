import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Nav from './Components/Nav'
import type { Itechnology } from './Type/technology'
import Technologies from './Components/Technologies/Technologies'

const technologiesFetch=async():Promise<Itechnology[]> =>{
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}
function App() {
    const [technologiesPromise] = useState(()=>technologiesFetch())
  return (
    <>
     <Nav/>
     <Banner/>
     <Suspense fallback={<h1>Loading...</h1>}>
      <Technologies technologiesPromise={technologiesPromise} />
     </Suspense>
    </>
  )
}

export default App
