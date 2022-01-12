import { getManager,putManager,postManager,deleteManager } from "../../../../../Redux/Action/ManagerAction/ManagerAction";
import {useDispatch,useSelector} from 'react-redux'
import { useEffect } from "react";

const ManagerList = () => {

    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(getManager())
    }, [dispatch]);
    const manager=useSelector(state=>state.manager.data)
    
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    manager?manager.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{item.firstName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address1}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={()=>dispatch(putManager(item._id,item))}>Edit</button>
                                    <button className="btn btn-danger" onClick={()=>dispatch(deleteManager(item._id))}>Delete</button>
                                </td>
                            </tr>
                        )
                    }):null
                }
                </tbody>
            </table>
        </div>
    )
}
export default ManagerList