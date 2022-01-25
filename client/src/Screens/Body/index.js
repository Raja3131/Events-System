import React from "react";
import {useSelector} from 'react-redux'
import {Routes,Route } from "react-router-dom";
import Nav from "./Nav";
import Border from "../../Hoc/Form";
import Event from "./Main/Event/Event";
import Client from "./Main/Client/client";
import Eventmanager from '../Body/Main/Manager/ManagerForm/ManagerForm'
import Location from '../../Components/location1'
import PromoterRegisteration from "./Main/PromoterRegisteration";

const HocEvent=Border(Event)
const HocClient=Border(Client)


export default function Body(){

    let state=useSelector((state)=>state.Tittle.name)
    
    return(
        <div style={{display:'flex',height:'100%',width:'100%'}}>
            <div style={{height:'100%',width:'20%',backgroundColor:'#e4e8ef',position:'sticky',top:'50%'}}>
                <Nav/>
            </div>
            <div style={{height:'100%',width:'80%',padding:'2%'}}>
                <h3 style={{textAlign:'left'}}>{state}</h3>
                <Routes>
                    <Route exact path='/' element={<Location/>}/>
                    <Route exact path='/promoter' element={<PromoterRegisteration />}/>
                    <Route  path='/client' element={<HocClient/>}/>
                    <Route  path='/manager' element={<Eventmanager/>}/>
                </Routes>
            </div>
        </div>
    )
}