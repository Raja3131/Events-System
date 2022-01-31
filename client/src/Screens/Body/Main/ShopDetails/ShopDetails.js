import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const ShopDetails = () => {
  const inputRef = React.createRef();
  const { register, handleSubmit, setValue } = useForm();
  const [shops, setShops] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/shop");
      console.log(response.data);
      setShops(response.data);
    }
    fetchData();
  }, []);

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/shop", data).then((res) => {
      console.log(res.data);
      setShops([...shops, res.data]);
    });
  };

  const handleDelete = (id) => {
    axios.delete("http://localhost:5000/shop/" + id).then((res) => {
      console.log(res.data);
      setShops(shops.filter((shop) => shop._id !== id));
    });
  };
  const handleUpdate = (id, data) => {
    axios.put("http://localhost:5000/shop/" + id, data).then((res) => {
      console.log(res.data);
    });
  };

  const columns = [
    {
      headerName: "Action",
      field: "_id",
      cellRendererFramework: function (params) {
        return (
          <>
            <button onClick={() => handleDelete(params.data._id)}>
              Delete
            </button>
            <button
              onClick={() =>
                handleUpdate(
                  params.data._id,
                  params.data,
                  setValue("name", params.data.name),
                  setValue("address", params.data.address),
                  setValue("phone", params.data.phone),
                  setValue("email", params.data.email)
                )
              }
            >
              Update
            </button>
          </>
        );
      },
    },
    { headerName: "Name", field: "name" },
    { headerName: "Address", field: "address" },
    { headerName: "Phone", field: "phone" },
    { headerName: "Email", field: "email" },
  ];

  return (
    <>
      <form className="shopForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <input
          {...register("address", { required: true, maxLength: 20 })}
          placeholder="Address"
        />

        <input
          {...register("phone", { required: true, maxLength: 20 })}
          placeholder="Phone"
        />
        <input
          {...register("email", { required: true, maxLength: 20 })}
          placeholder="Email"
        />
        <input
          type="file"
          {...register("Image", { required: true, maxLength: 20 })}
          placeholder="Image"
          multiple
        />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      <div
        className="ag-theme-alpine"
        style={{ height: "500px", width: "100%" }}
      >
        <AgGridReact
          columnDefs={columns}
          rowData={shops}
          pagination={true}
          paginationPageSize={10}
        ></AgGridReact>
      </div>
    </>
  );
};

export default ShopDetails;
