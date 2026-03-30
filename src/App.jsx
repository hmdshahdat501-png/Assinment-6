import { useState } from 'react'
import './App.css'
import Nav from './assets/Comontnt/Nav/Nav'
import Banner from './assets/Comontnt/Banner/Banner'
import Hero from './assets/Comontnt/Hero/Hero'

import { CgRadioCheck } from 'react-icons/cg'
import Card from './assets/Comontnt/Card/Card'
const res = fetch('/public/data.json').then(res => res.json())
function App() {
 
const [btnclick, setBtnclick] = useState('products')            
  return (
    <>
  
     <Nav></Nav>
     <Banner></Banner>
     <Hero btnclick = {btnclick} setBtnclick = {setBtnclick}  ></Hero>
      <Card res = {res} ></Card>
   

    </>
  )
}

export default App
