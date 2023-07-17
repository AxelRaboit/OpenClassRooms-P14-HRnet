import React, { useState, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useDispatch } from "react-redux";
import { deleteEmployees } from "../../slices/DataSlice";
import style from "./BasicTable.module.scss";

export const BasicTable = ({ dataTable }) => {
  const [data, setData] = useState(dataTable, []);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(dataTable);
  }, [dataTable]);

  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    /* {
      header: "Name",
      accessorFn: row => `${row.firstName} ${row.lastName}`,
    }, */
    {
      header: "First Name",
      accessorKey: "firstname",
    },
    {
      header: "Last Name",
      accessorKey: "lastname",
    },
    {
      header: "Birth Date",
      accessorKey: "birthDate",
    },
    {
      header: "City",
      accessorKey: "city",
    },
    {
      header: "Department",
      accessorKey: "department",
    },
    {
      header: "Start Date",
      accessorKey: "startDate",
    },
    {
      header: "State",
      accessorKey: "state",
    },
    {
      header: "Street",
      accessorKey: "street",
    },
    {
      header: "Zip",
      accessorKey: "zip",
    },
  ];

  const [sorting, setSorting] = useState([]);

  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  const handleDeleteEmployees = () => {
    dispatch(deleteEmployees());
  };

  return (
    <div className={style.container}>
      {table.getRowModel().rows.length > 0 && (
        <div className={style.containerDeleteEntriesButton}>
          <button className={style.deleteEntriesButton} onClick={handleDeleteEmployees}>
            Delete employees
          </button>
        </div>
      )}
      <div className={style.containerPaginationIndicator}>
        <div className={style.containerShowSelect}>
          <select
            className={style.showSelect}
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>

        <div className={style.containerPageIndicator}>
          Page{" "}
          <span>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount() === 0 ? 1 : table.getPageCount()}
          </span>
        </div>
      </div>

      <div className={style.containerInput}>
        <label htmlFor="filter">Filter</label>
        <input
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
        />
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  {
                    {
                      asc: <i className={`fa-solid fa-arrow-up ${style.arrow}`}></i>,
                      desc: <i className={`fa-solid fa-arrow-down ${style.arrow}`}></i>,
                    }[header.column.getIsSorted() ?? null]
                  }
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={style.containerButtons}>
        <button onClick={() => table.setPageIndex(0)}>First Page</button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          Previous Page
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          Next Page
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          Last Page
        </button>
      </div>
    </div>
  );
};
