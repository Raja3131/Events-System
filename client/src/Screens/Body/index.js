import React from "react";
import Nav from "./Nav";
import {Routes,Route } from "react-router-dom";
import Event from "./Main/Event/Event";
import Border from "../../Hoc/Form";
import {useSelector} from 'react-redux'
// const HocEvent=Border(Event)
import Manager from "./Main/Manager/ManagerForm/ManagerForm";

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
                    {/* <Route exact path='/' element={<HocEvent/>}/> */}
                    <Route exact path='/' element={<Event/>}/>
                    <Route path='/manager' element={<Manager/>}/>
                    
                </Routes>
            </div>
        </div>
    )
}