import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductFeed from "../Apicalls/ProductFeed";
import toast from "react-hot-toast";
import Invoice from "./Invoice";

function Products() {
  const navigate = useNavigate();
  const [ProductData, setProductData] = useState([]);
  const [CartInfOnRes, setCartInfOnRes] = useState({});
  const [spinner, setspinner] = useState(true);
  const [spinnerPR, setspinnerPr] = useState(false);

  //=================================================
  //Logout section
  //=================================================

  const handleLogout = () => {
    localStorage.setItem("ecommerce-token", "");
    toast.success("Logout Was Successfully!");
    setTimeout(() => {
      navigate("/Login");
    }, [1000]);

    // navigate("/Login");
  };
  //=================================================
  //Logout section ends here
  //=================================================

  //=================================================================
  //section for display all the items in the UI form the server=start
  //=================================================================
  const apidata = async (pageNo = 1) => {
    setspinner(true);
    try {
      const responce = await ProductFeed(pageNo);
      if (responce.status === 200) {
        setspinner(false);

        setProductData(responce.data.data);
      }
    } catch (err) {
      console.log(err);
      setspinner(false);
      toast.error(err.response.data.error.message, {
        position: "bottom-right",
        autoClose: 5101,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
      });
    }
  };

  //================================================================
  //section for display all the items in the UI form the server=ends
  //================================================================

  //======================================
  //section for create a  cart
  //======================================
  const CreateCart = () => {
    const CartID = localStorage.getItem("CART-ID");
    if (CartID) {
      axios({
        url: `https://api.chec.io/v1/carts/${CartID}`,
        headers: {
          "X-Authorization": "pk_185066f1f96affca255ca48cd4a64803a4b791d6d0d5b",
        },
      })
        .then((res) => {
          setCartInfOnRes(res.data);
        })
        .catch((err) => {});
    } else {
      axios({
        method: "GET",
        url: "https://api.chec.io/v1/carts",
        headers: {
          "X-Authorization": "pk_185066f1f96affca255ca48cd4a64803a4b791d6d0d5b",
        },
      })
        .then((res) => {
          if (res.status === 201) {
            localStorage.setItem("CART-ID", res.data.id);
            setCartInfOnRes(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //======================================
  //section for add the items to the cart
  //======================================
  const addtoCart = (productId) => {
    setspinnerPr(true);
    console.log(productId);
    const cart_is = localStorage.getItem("CART-ID");

    axios({
      url: `https://api.chec.io/v1/carts/${cart_is}`,
      method: "POST",
      headers: {
        "X-Authorization": "pk_185066f1f96affca255ca48cd4a64803a4b791d6d0d5b",
      },
      data: {
        id: productId,
      },
    })
      .then((re) => {
        console.log("items inside the cart:", re);

        setCartInfOnRes(re.data.cart);
        setspinnerPr(false);
      })
      .catch((Er) => {
        console.log(Er);
      });
  };

  //======================================
  //section for remove the items from the cart
  //======================================
  const RmtoCart = (productId) => {
    setspinnerPr(true);
    console.log("removed");
    console.log(CartInfOnRes);
    const cartId = localStorage.getItem("CART-ID");
    const remove_res = CartInfOnRes.line_items.filter((element, index) => {
      return productId === element.product_id;
    });

    console.log(remove_res, "afteer remove");
    axios({
      method: "DELETE",
      url: `https://api.chec.io/v1/carts/${cartId}/items/<${remove_res[0].id}`,
      headers: {
        "X-Authorization": "pk_185066f1f96affca255ca48cd4a64803a4b791d6d0d5b",
      },
    })
      .then((res) => {
        console.log("updated cart_ after removed", res);
        setCartInfOnRes(res.data.cart);
        setspinnerPr(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //====================================================
  //section  ends here for remove  the items to the cart
  //===================================================
  const allPR = CartInfOnRes.line_items
    ? CartInfOnRes.line_items.map((Element) => Element.product_id)
    : [];

  useEffect(() => {
    apidata();
    CreateCart();
  }, []);

  //====================================================
  //section  for logout
  //===================================================

  const logout = () => {
    localStorage.setItem("ecommerce-token", "");
    navigate("/Login");
  };
  //====================================================
  //section  for invoice
  //===================================================

  return (
    <div>
      <div className="top-section d-flex bg-info">
        <h1>Ecommerce</h1>
        <div className="middle-section">
          {CartInfOnRes && (
            <div className="d-flex">
              <p className="cart">
                Total-Amount:
                {CartInfOnRes.subtotal
                  ? CartInfOnRes.subtotal.formatted_with_symbol
                  : "0.00"}
              </p>
            </div>
          )}
        </div>
        <a
          href="/Products/Invoice"
          onClick={() => {
            Invoice(CartInfOnRes);
          }}
        >
          {" "}
          <button className="btn btn-secondary m-3">
            Cart-items:
            {CartInfOnRes.total_items || 0}
          </button>
        </a>
        <button className="btn btn-secondary m-3" onClick={logout}>
          LogOut
        </button>
      </div>
      <div className="products-division mt-5">
        <div className="container">
          {spinner ? (
            <div className="row">
              <div className="shadow-lg" id="rowsipper">
                <div class="spinner-grow text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-danger" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-warning" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-info" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-dark" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="row d-flex flex-row">
              {ProductData.map((Element, index) => (
                <div className="col-md-3 mt-2" key={index}>
                  <div className="cord-dic bg-light">
                    <div className="image-section">
                      <img src={Element.image.url} className="getimage" />
                    </div>
                    <div className="discription-section">
                      <h4 className="text-center mt-1">{Element.name}</h4>
                      <p className="text-success text-center">
                        price-{Element.price.formatted_with_symbol}
                      </p>
                      {/* <p className="desc">{Element.description}</p> */}
                      <div>
                        {allPR.includes(Element.id) ? (
                          <button
                            class="btn btn-danger w-100"
                            onClick={() => {
                              RmtoCart(Element.id);
                            }}
                          >
                            Remove from cart
                          </button>
                        ) : (
                          <button
                            class="btn btn-warning w-100"
                            onClick={() => {
                              addtoCart(Element.id);
                            }}
                          >
                            Add to cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* </InfiniteScroll> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
