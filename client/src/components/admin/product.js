import React, { useState } from "react";
import DataTable from "react-data-table-component";
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import jsPDF from "jspdf";
import "jspdf-autotable";

import { columns, data } from "./data";
import "../../css/datatable.css";

const Product = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleChange = (state) => {
    setSelectedRows(state.selectedRows);
  };

  const tableData = {
    columns,
    data,
  };

  const handlePrint = () => {
    const doc = new jsPDF();

    const tableColumnNames = columns.map((col) => col.name);
    const tableBody = selectedRows.map((row) =>
      columns.map((col) => (typeof col.selector === "function" ? col.selector(row) : row[col.selector]))
    );

    doc.autoTable({
      head: [tableColumnNames],
      body: tableBody,
    });

    doc.save("selectedRows.pdf");
  };

  return (
    <div className="main">
      <button onClick={handlePrint}>Print Selected Rows</button>
      <DataTableExtensions
        {...tableData}
        export={false}
      >
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          sortIcon={<AddToDriveIcon key="sortIcon" />}
          defaultSortAsc={true}
          pagination
          selectableRows
          selectableRowsHighlight
          selectableRowsRadio
          selectableRowsVisibleOnly
          highlightOnHover
          dense
          onSelectedRowsChange={handleChange}
        />
      </DataTableExtensions>
      
    </div>
  );
};

export default Product;
