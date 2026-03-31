import { useState } from 'react'
import './App.css'
import Nav from './assets/Comontnt/Nav/Nav'
import Banner from './assets/Comontnt/Banner/Banner'
import Hero from './assets/Comontnt/Hero/Hero'

import { CgRadioCheck } from 'react-icons/cg'
import Card from './assets/Comontnt/Card/Card'
import Addcard from './assets/Comontnt/Addcard/Addcard'
import Started from './assets/Comontnt/Started/Started'
import Simple from './assets/Comontnt/Simple/Simple'
import Upnav from './assets/Comontnt/Upnav/Upnav'
import Fotter from './assets/Comontnt/Upnav/Footer/Fotter'
const res = fetch('/public/data.json').then(res => res.json());
const crite = fetch('/public/card.json').then(res => res.json())
function App() {
 
const [btnclick, setBtnclick] = useState('products') 
let [addprodect, setaddprodect] = useState([]);         
  return (
    <>
  
     <Nav addprodect = {addprodect} ></Nav>
     <Banner></Banner>
     <Hero btnclick = {btnclick} setBtnclick = {setBtnclick} addprodect = {addprodect}  ></Hero>
      {
        btnclick === 'products' ? <Card res = {res} addprodect = {addprodect} setaddprodect ={setaddprodect}  ></Card> : <Addcard addprodect = {addprodect} setaddprodect ={setaddprodect}></Addcard>
        
      }
    <Started></Started>
    <Simple crite = {crite} ></Simple>
    <Upnav></Upnav>
    <Fotter></Fotter>
    
     

    </>
  )
}

export default App
