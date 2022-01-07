import React, { useState } from 'react'
import TabsUnstyled from '@mui/base/TabsUnstyled';
import {TabsList,Tab} from './Style'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Post} from '../../../Redux/Action/TittleAction.js'

export default function Nav() {
    let navigate=useNavigate()
    let dispatch=useDispatch()

    const nav = [{ title: 'Event Handling', path: '/' ,padding:'3% 28%'},
                 { title: 'Client Details', path: 'dummy' ,padding:'3% 31%'},
                 { title: 'Promoter Details', path: 'modify' ,padding:'3% 26%'},
                 { title: 'Registeration Details', path: 'client',padding:'3% 21%' }
                ];

    const route=(item)=>{
                    dispatch(Post(item.title))
                    navigate(item.path)
                }
    return (
        <div style={{width:'100%'}}>
            <TabsUnstyled >
                <TabsList>
                    {
                        nav.map((item)=><Tab onClick={()=>route(item)}>{item.title}</Tab>)
                    }
                </TabsList>
            </TabsUnstyled>
        </div>
    )
}