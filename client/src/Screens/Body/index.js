import React from "react";
import {useSelector} from 'react-redux'
import {Routes,Route } from "react-router-dom";
import Nav from "./Nav";
import Border from "../../Hoc/Form";
import Event from "./Main/Event/Event";
import Client from "./Main/Client/client";
// import EventManager from "./Main/Manager/ManagerForm/ManagerForm";

const HocEvent=Border(Event)
const HocClient=Border(Client)


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
                    <Route exact path='/' element={<HocEvent/>}/>
                    <Route exact path='/client' element={<HocClient/>}/>
                </Routes>
            </div>
        </div>
    )
}