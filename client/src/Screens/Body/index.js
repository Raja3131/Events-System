import React from "react";
import Nav from "./Nav";
import {Routes,Route } from "react-router-dom";
import Event from "./Main/Event/Event";
<<<<<<< HEAD
import Border from "../../Hoc/Form";
import {useSelector} from 'react-redux'
const HocEvent=Border(Event)
=======
import EventManager from "./Main/Manager/ManagerForm/ManagerForm";
>>>>>>> 02521bdf8cdf9e73a77cde94ffad753bfb9c56fe

export default function Body(){

    let state=useSelector((state)=>state.Tittle.name)
    
    return(
        <div style={{display:'flex',height:'100%',width:'100%'}}>
            <div style={{height:'100%',width:'20%',backgroundColor:'#e4e8ef'}}>
                <Nav/>
            </div>
            <div style={{height:'100%',width:'80%',padding:'2%'}}>
                <h3 style={{textAlign:'center'}}>{state}</h3>
                <Routes>
<<<<<<< HEAD
                    <Route exact path='/' element={<HocEvent/>}/>
=======
                    <Route exact path='/' element={<Event/>}/>
                    <Route path='/manager' element={<EventManager/>}/>
                    
>>>>>>> 02521bdf8cdf9e73a77cde94ffad753bfb9c56fe
                </Routes>
            </div>
        </div>
    )
}