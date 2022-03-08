import React, { useEffect, useState, useMemo } from "react";
import Pagination from "../shared_components/Pagination";
import TableHeader from "../shared_components/TableHeader"
import Search from "../shared_components/Search";
import ServiceRequest from "../api/service";

const Users = () => {
  const [results, setResults] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const ITEMS_PER_PAGE = 7;

  const headers = [
    { name: "ID", field: "id", sortable: true },
    { name: "Name", field: "fullname", sortable: true },
    { name: "Registed Date", field: "createdAt", sortable: true },
    { name: "Email", field: "email", sortable: true },
    { name: "Phone", field: "phone", sortable: false }
  ];


  useEffect(() => {
    ServiceRequest.getRegisteredUsersData()
    .then(response => {
        //if(results.length !== response.data.length)
            setResults(response.data);
            //console.log(response.data);
    })
    .catch((e) => {
        console.log(e);
    });
  }, []);

  const filtered = useMemo(() => {
    let filteredResult = results;

    if (search) {
      filteredResult = filteredResult.filter((result) =>
        result["fullname"].toLowerCase().includes(search.toLowerCase())
      );
    }

    setTotalItems(filteredResult.length);

    if (sorting.field) {
      const reversed = sorting.order === "asc" ? 1 : -1;
      //console.log(results, sorting.field);
      const value = results[0][sorting.field];
      //console.log(typeof value);
      if (typeof value === "string") {
        filteredResult = filteredResult.sort(
          (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
        );
      } else {
        filteredResult = filteredResult.sort((a, b) =>
          sorting.order === "asc"
            ? a[sorting.field] - b[sorting.field]
            : b[sorting.field] - a[sorting.field]
        );
      }
    }

    return filteredResult.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );
  }, [results, currentPage, search, sorting]);


  return (
    <>
      <div className="col-sm-12 col-md-9">
        <Search
        onSearch={(value) => {
            setSearch(value);
            setCurrentPage(1);
        }}
        />
          
        <div className="table-responsive">
          {totalItems ? (
            <>
              <table className="table table-striped table-hover">
                <TableHeader
                  headers={headers}
                  onSorting={(field, order) => setSorting({ field, order })}
                />
                <tbody>
                  {filtered.map((item) => (
                      <tr key={item.id} className="pro-list-info">
                        <td>{item.id}</td>
                        <td>{item.fullname}</td>
                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        {/* <td><span className={"badge " + (item.status === "Active" ? "bg-success" : "bg-warning text-dark")}>{item.status}</span></td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-flex justify-content-end">
                <Pagination
                total={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </>
          ) : (    
            <h4 className="p-3 text-center">No result found</h4>
          )}
        </div>
      </div>
    </>
  );
};

export default Users;
