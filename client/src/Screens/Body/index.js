import React from "react";
import Nav from "./Nav";
import {Routes,Route } from "react-router-dom";
import Event from "./Main/Event/Event";
import EventManager from "./Main/Event/ManagerForm/ManagerForm";

export default function Body(){
    return(
        <div style={{display:'flex',height:'100%',width:'100%'}}>
            <div style={{height:'100%',width:'20%',backgroundColor:'#e4e8ef'}}>
                <Nav/>
            </div>
            <div style={{height:'100%',width:'80%'}}>
                <Routes>
                    <Route exact path='/' element={<Event/>}/>
                    <Route path='/manager' element={<EventManager/>}/>
                    
                </Routes>
            </div>
        </div>
    )
}   