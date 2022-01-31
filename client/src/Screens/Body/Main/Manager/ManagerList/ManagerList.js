// import {
//   getManager,
//   putManager,
//   postManager,
//   deleteManager,
// } from "../../../../../Redux/Action/ManagerAction/ManagerAction";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import swal from "sweetalert";
// import { useState } from "react";
// import { AgGridColumn, AgGridReact } from "ag-grid-react";
// import Fab from "@mui/material/Fab";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";

// const ManagerList = ({ val, upval }) => {
//   const [getData, setGetData] = useState([]);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getManager());
//   }, [dispatch]);
//   const manager = useSelector((state) => state.manager.data);
//   useEffect(() => {
//     setGetData(manager);
//     console.log(manager);
//   }, [manager]);

//   const update = (item) => {
//     console.log(item);
//     upval(item);
//   };
//   const Delete = (item) => {
//     swal({
//       title: "Are you sure?",
//       text: "Once deleted,You Will not be able to recover this file!",
//       icon: "warning",
//       buttons: false,
//       dangerMode: true,
//       buttons: ["No", "Yes"],
//     }).then(async (willDelete) => {
//       if (willDelete) {
//         dispatch(deleteManager(item._id));
//         swal("Your file has been deleted!", { icon: "success" });
//       } else {
//         swal("Your file is safe!");
//       }
//     });
//   };

//   const columns =[
//     {
//       headerName: "Name",
//       field: "firstName",
//       sortable: true,
//       filter: true,
//     },
   
//     {
//       headerName: "Occupation",
//       field: "occupation",
//       sortable: true,
//       filter: true,
//     },
//     {
//       headerName:"phone",
//       field:"phone",
//       sortable:true,
//       filter:true,

//     },
//     {
//       headerName:"Email",
//       field:"email",
//       sortable:true,
//       filter:true,
//     },

//  {
//    headerName: "Action",
//     field: "_id",
//     cellRendererFramework: (params) => {
//       return (
//         <>
//          <Fab
//           color="primary"
//           aria-label="edit"
//           onClick={() => update(params.data)}
//           style={{
//             maxHeight: "15px",
//             minHeight: "15px",
//             minWidth: "15px",
//             maxWidth: "15px",
//             padding: "4px",
//           }}
//         >
//           <EditIcon />
//           <DeleteOutlineIcon sx={{ fontSize: 20, color: "red",marginRight:8 }} onClick={() => Delete(params.data)} />
//         </Fab>
//         </>
//       );
//     }

//  }

 

//   ]

//   return (
//     <div className="ag-theme-alpine" style={{ height: 400, width: "auto" ,marginTop:10 }}>
//       <AgGridReact rowData={getData}
//         columnDefs={columns}
      
//       >
    

      
        
      
        

//       </AgGridReact>
      
//     </div>
//   );
// };
// export default ManagerList;
