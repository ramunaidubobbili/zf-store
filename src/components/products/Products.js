import React, { useEffect, useState, useMemo } from "react";
import Pagination from "../shared_components/Pagination";
import TableHeader from "../shared_components/TableHeader"
import Search from "../shared_components/Search";
import ServiceRequest from "../api/service";

const Products = () => {
  const [results, setResults] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" });
  const ITEMS_PER_PAGE = 7;

  const headers = [
    { name: "ID", field: "id", sortable: true },
    { name: "Name", field: "name", sortable: true },
    { name: "Image", field: "imageUrl", sortable: false },
    { name: "Price", field: "price", sortable: true },
    { name: "Category", field: "category", sortable: true},
    { name: "Description", field: "description", sortable: false },
    { name: "Action", field: "action", sortable: false }
  ];

  useEffect(() => {
    getData()
  }, []);

  const getData = () =>{
    ServiceRequest.getProductsData()
    .then(response => {
        //if(results.length !== response.data.length)
            setResults(response.data);
            //console.log(response.data);
    })
    .catch((e) => {
        console.log(e);
    });
  }

  const filtered = useMemo(() => {
    let filteredResult = results;

    if (search) {
      filteredResult = filteredResult.filter((result) =>
        result["name"].toLowerCase().includes(search.toLowerCase())
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

  const deleteItem = (id) => {
    ServiceRequest.deleteProduct(id)
    .then(response => {
          //setResults(response.data);
          console.log(response.data);
          getData()
      })
      .catch(e => {
          console.log(e);
      }); 
  }

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
                        <td>{item.name}</td>
                        <td><img src={item.imageUrl} alt={item.name} /></td>
                        <td>{"$"+parseFloat(item.price).toFixed(2)}</td>
                        <td>{item.category}</td>
                        <td>{item.description}</td>
                        <td><button className="btn btn-danger btn-sm" onClick={() => deleteItem(item.id)}>Delete</button></td>
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

export default Products;