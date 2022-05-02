import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import {
  addToWishlist,
  deleteFromWishlist,
  deleteAllFromWishlist,
} from "../../redux/actions/wishlistActions";
import { addToCart } from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Axios from "axios";
//import Moment from "react-moment";
//import "moment-timezone";
import moment from "moment";

const MyOrder = ({
  location,
  cartItems,
  currency,
  addToCart,
  wishlistItems,
  deleteFromWishlist,
  deleteAllFromWishlist,
}) => {
  const { addToast } = useToasts();
  const { pathname } = location;
  const [order, setOrder] = useState([]);
  const fetchOrder = async (token) => {
    const { data } = await Axios.get(
      "http://35.154.86.59/api/admin/getorderbycustomer",
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );

    const order = data.data;
    setOrder(order);
    console.log(order);
  };

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      fetchOrder();
    }
  }, []);

  return (
    <Fragment>
      <MetaTags>
        <title>Flone | MyOrder</title>
        <meta
          name="description"
          content="Wishlist page of flone react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        My Order
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {order && order.length >= 1 ? (
              <Fragment>
                <h3 className="cart-page-title">Your Order Items</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>ORDER ID</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>QUANTITY</th>
                            <th>AMOUNT</th>
                            {/* <th>Unit Price</th> */}
                            <th>Order Status</th>
                            <th>Order Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order?.map((orders, key) => {
                            return (
                              <tr key={key}>
                                <td className="product-price-cart">
                                  <span className="amount">
                                    {orders?.cus_orderId}
                                  </span>
                                </td>
                                <td className="product-thumbnail">
                                  <Link to="#">
                                    <img
                                      className="img-fluid"
                                      src={
                                        process.env.PUBLIC_URL +
                                        orders.product.product_img[0]
                                      }
                                      alt=""
                                    />
                                  </Link>
                                </td>

                                <td className="product-name text-center">
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      "/product-sticky/"
                                      // orders.prodct._id
                                    }
                                  >
                                    {orders.product.product_name}
                                  </Link>
                                  <br />
                                  COLOR: {orders?.color}
                                  <br />
                                  SIZE: {orders?.size}
                                </td>

                                <td className="product-price-cart">
                                  <span className="amount">
                                    {orders?.product_qty}
                                  </span>
                                </td>

                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {orders?.gsttotal}
                                </td>
                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {orders?.status}
                                </td>
                                <td className="product-price-cart">
                                  <span className="amount"></span>
                                  {moment(orders?.createdAt).format("ll")}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Fragment>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cart"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No Product Found <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/"}>Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

MyOrder.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object,
  deleteAllFromWishlist: PropTypes.func,
  deleteFromWishlist: PropTypes.func,
  wishlistItems: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    currency: state.currencyData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    addToWishlist: (item, addToast, quantityCount) => {
      dispatch(addToWishlist(item, addToast, quantityCount));
    },
    deleteFromWishlist: (item, addToast, quantityCount) => {
      dispatch(deleteFromWishlist(item, addToast, quantityCount));
    },
    deleteAllFromWishlist: (addToast) => {
      dispatch(deleteAllFromWishlist(addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);
