import React, { useState } from 'react'
import TabsUnstyled from '@mui/base/TabsUnstyled';
import {TabsList,Tab} from './Style'
import {useNavigate} from 'react-router-dom'

export default function Nav() {
    let navigate=useNavigate()

    const nav = [{ title: 'Event Handling', path: '/' ,padding:'3% 28%'},
                 { title: 'Client Details', path: 'dummy' ,padding:'3% 31%'},
                 { title: 'Promoter Details', path: 'modify' ,padding:'3% 26%'},
                 { title: 'Registeration Details', path: 'client',padding:'3% 21%' }
                ];

    const route=(item)=>{
                    navigate(item)
                }
    return (
        <div style={{width:'100%'}}>
            <TabsUnstyled >
                <TabsList>
                    {
                        nav.map((item)=><Tab onClick={()=>route(item.path)}>{item.title}</Tab>)
                    }
                </TabsList>
            </TabsUnstyled>
        </div>
    )
}