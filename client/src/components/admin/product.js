import React from "react";
import DataTable from "react-data-table-component";
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { columns, data } from "./data";
import "../../css/datatable.css"

// const customStyles = {
//   headCells: {
//     style: {
//       backgroundColor: "#000000",
//       boxShadow: "0 3px 5px 0.3px #0000001a",
//       backdropFilter: "blur(8px) !important",
//       color: "#b8bbc3",
//     },
//   },
//   cells: {
//     style: {
//       backgroundColor: "#24293726 !important",
//       boxShadow: "0 3px 5px 0.3px #0000001a",
//       backdropFilter: "blur(8px) !important",
//       color: "#b8bbc3",
//     },
//   },
//   pagination: {
//     style: {
//       backgroundColor: "#24293726",
//       boxShadow: "0 3px 5px 0.3px #0000001a",
//       backdropFilter: "blur(8px) !important",
//       color: "#b8bbc3",
//     },
//   },
//   // Add more styles as needed
// };
const Product = ()=>{
  const tableData = {
    columns,
    data
  };

  return (
    <div className="main">
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          sortIcon={<AddToDriveIcon  key="sortIcon"/>}
          defaultSortAsc={true}
          pagination
          selectableRows
          selectableRowsHighlight
          selectableRowsRadio
          selectableRowsVisibleOnly
          highlightOnHover
          dense
        />
      </DataTableExtensions>
    </div>
  );
}

export default Product;