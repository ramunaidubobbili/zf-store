import React, { useEffect, useState } from "react";
import ServiceRequest from "../api/service";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = () => {
    ServiceRequest.getProductsData()
    .then(response => {
      setProducts(response.data);
        console.log(response.data);
    })
    .catch((e) => {
        console.log(e);
    });

    ServiceRequest.getData()
    .then(response => {
      setCartList(response.data);
      console.log(response.data);
      localStorage.setItem("cartListCount", response.data.length)
    })
    .catch((e) => {
        console.log(e);
    });
}


const addToCart = (product) => { 
    let filteredData = cartList.filter(item => product.name === item.name)[0]

    if(filteredData?.name === product.name){
        let data = {
            quantity: filteredData.quantity+1
        }
        ServiceRequest.update(filteredData.id, data)
        .then(response => {
            //console.log("Updated Data: "+response.data);
            fetchData()
        })
        .catch(e => {
            console.log(e);
        });
    }else{
        let data = {
            name: product.name,
            image: product.imageUrl,
            size: "One Size",
            brand: "Apple",
            quantity: 1,
            price: product.price
        }
        
        ServiceRequest.addToCart(data)
        .then(response => {
          setCartList(response.data);
          fetchData()
          console.log(response.data);
        })
    }
}

  return (
    <>
      <div className="row">
          {products && products.map((product) => (
              <div key={product.id} className="col-sm-12 col-md-4 col-lg-3 my-2">
                  <div className="card">
                      <img src={product.imageUrl} className="card-img-top" alt={product.name}/>
                      <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.description}</p>
                          <div className='d-flex justify-content-between align-items-center'>
                              <p className='fs-5 fw-bold mb-0'>{"$"+product.price}</p>
                              <button className='btn btn-danger btn-sm' onClick={() => addToCart(product)}>Add Cart</button>
                          </div>
                      </div>
                  </div>
              </div>
          ))}
      </div>
    </>
  );
};

export default Products;

