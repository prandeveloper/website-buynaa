import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare } from "../../redux/actions/compareActions";
import Axios from "axios";
import { Button } from "reactstrap";
import "./ProductImageDescriptionStickycss.css";
import { useHistory } from "react-router-dom";

var buttonStyle = {
  backgroundColor: "#229ac8",
  backgroundImage: "linear-gradient(to bottom, #23a1d1, #1f90bb)",
  backgroundRepeat: "repeat-x",
  borderColor: "#1f90bb #1f90bb #145e7a",
  color: "#ffffff",
  textShadow: "0 -1px 0 rgba(0, 0, 0, 0.25)",
};

let heart = {
  margin: "-4px 8px",
};

const ProductImageDescriptionSticky = ({
  spaceTopClass,
  spaceBottomClass,
  wishlistItems,
  productImage,
}) => {
  const [quantityCount, setQuantityCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [rating, allRating] = useState([false, false, false, false, false]);
  const [selectedColor, setSelectedColor] = useState(0);
  const [state, setstate] = React.useState({});
  const [imgArr, setImgArr] = React.useState([]);
  const [activeindex, setActiveindex] = React.useState([0]);
  React.useEffect(() => {
    var t = JSON.parse(productImage).product_img;
    var t1 = JSON.parse(productImage).color;
    var t2 = JSON.parse(productImage).size;
    if (t !== undefined && t !== null) setImgArr(t);
    if (t1 !== undefined && t1 !== null) setSelectedColor(t1[0].colorName);
    if (t2 !== undefined && t2 !== null) setSelectedSize(t2[0].sizeName);

    setstate(JSON.parse(productImage));
  }, [productImage]);

  const history = useHistory();

  return (
    <div
      className={`shop-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* product image gallery */}
            <div className="product-large-image-wrapper product-large-image-wrapper--sticky">
              <div className="">
                <Carousel>
                  {imgArr?.map((single) => (
                    <Carousel.Item key={single}>
                      <img
                        src={single}
                        alt=""
                        className="img-fluid"
                        style={{ width: "550px", height: "105vh" }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="product-details-content ml-70 mt-5 mb-5">
              <h4
                style={{
                  color: "#282c3f",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontSize: 24,
                }}
              >
                {state?.brand?.name}
              </h4>
              <h2
                className=""
                style={{
                  textTransform: "capitalize",
                  fontSize: 20,
                  fontWeight: 400,
                  fontWeight: 500,
                  color: "#535665",
                }}
              >
                {state?.product_name} <span>({state?.material})</span>
              </h2>
              <div className="pro-details-list">
                <p>{state?.short_desc}</p>
                <p>{state?.long_desc}</p>
                <p className=" w-25 shadow-none p-1 mb-0 bg-white rounded">
                  #{state?.productsubcategory?.name}
                </p>
              </div>
              <div className="product-details-price">
                <h2>
                  ₹{state?.sell_price}&nbsp;&nbsp;
                  <del>
                    {" "}
                    ₹
                    {Math.floor(
                      (parseInt(state?.sell_price) *
                        parseInt(state?.discount_perc)) /
                        100 +
                        parseInt(state?.sell_price)
                    )}
                    &nbsp;&nbsp;{" "}
                  </del>
                  <span style={{ color: "#ffa500" }}>
                    {" "}
                    &nbsp;&nbsp;({state?.discount_perc}% OFF)
                  </span>
                </h2>
              </div>
              <div className="pro-details-rating-wrap">
                <div className="pro-details-rating">
                  {rating.map((val, index) => (
                    <span
                      key={index}
                      onClick={() => {
                        var rat = [];
                        for (var i = 0; i < 5; i++) {
                          if (i <= index) rat.push(true);
                          else rat.push(false);
                        }
                        allRating(rat);
                      }}
                    >
                      {rating[index] ? (
                        <i className="fa fa-star-o yellow" key={index}></i>
                      ) : (
                        <i className="fa fa-star-o" key={index}></i>
                      )}
                    </span>
                  ))}
                </div>
              </div>
              {/* section Color */}
              <div className="pro-details-size-color">
                <div className="pro-details-color-wrap">
                  <span>Color</span>
                  <div
                    className="pro-details-color-content"
                    style={{ flexDirection: "row" }}
                  >
                    <div class="colors">
                      <ul>
                        {state?.color?.map((clr, i) => (
                          <li>
                            <label>
                              <input
                                type="radio"
                                name="color"
                                checked={
                                  clr?.colorName == selectedColor ? true : false
                                }
                                onClick={() => {
                                  setActiveindex(i);
                                  setSelectedColor(clr?.colorName);
                                }}
                              />
                              <span
                                class="swatch"
                                style={{
                                  backgroundColor: clr?.colorName,
                                  borderColor:
                                    clr?.colorName == selectedColor
                                      ? "black"
                                      : "transparent",
                                  borderWidth: 2,
                                  padding: 2,
                                }}
                              ></span>{" "}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Section Size */}
              <div className="pro-details-size-color mt-5">
                <div className="pro-details-color-wrap">
                  <span>Size</span>
                  <div
                    className="pro-details-color-content"
                    style={{ flexDirection: "row" }}
                  >
                    {state
                      ? state.size
                        ? state.size.map((siz) => (
                            <Button
                              outline={selectedSize === siz?.sizeName}
                              color={
                                selectedSize === siz?.sizeName
                                  ? "danger"
                                  : "primary"
                              }
                              className="m-1 "
                              key={siz?.sizeName}
                              onClick={() => {
                                setSelectedSize(siz?.sizeName);
                              }}
                            >
                              <h5 className="mb-0">{siz?.sizeName}</h5>
                            </Button>
                          ))
                        : null
                      : null}
                  </div>
                </div>
              </div>

              {state?.sell_mode === "Offline" ? (
                <div className="pro-details-quality">
                  <div className="pro-details-cart btn-hover">
                    <button>Available in Offline store</button>
                  </div>
                </div>
              ) : state?.qty != 0 ? (
                <div className="pro-details-quality">
                  <div className="cart-plus-minus">
                    <button
                      onClick={() =>
                        setQuantityCount(
                          quantityCount > 1 ? quantityCount - 1 : 1
                        )
                      }
                      className="dec qtybutton"
                    >
                      -
                    </button>
                    <input
                      className="cart-plus-minus-box"
                      type="text"
                      value={quantityCount}
                    />
                    <button
                      className="inc qtybutton"
                      onClick={() =>
                        setQuantityCount(
                          quantityCount >= 1 ? quantityCount + 1 : 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <div className="pro-details-cart btn-hover">
                    <button
                      onClick={() => {
                        if (localStorage.getItem("auth-token")) {
                          Axios.post(
                            "http://35.154.86.59/api/admin/add_ToCart",
                            {
                              product: state._id,
                              product_qty: quantityCount,
                              product_price: state.sell_price,
                              color: selectedColor,
                              size: selectedSize,
                            },
                            {
                              headers: {
                                "auth-token":
                                  localStorage.getItem("auth-token"),
                              },
                            }
                          )
                            .then((response) => {
                              window.location.reload();
                            })
                            .catch(function (error) {
                              alert("Something Went Wrong");
                            });
                        } else {
                          history.push("/login-register");
                        }
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div className="pro-details-cart btn-hover">
                    <button
                      title={
                        wishlistItems !== undefined
                          ? "Added to wishlist"
                          : "Add to wishlist"
                      }
                      onClick={() => {
                        Axios.post(
                          "http://35.154.86.59/api/admin/addwishlist",
                          {
                            product: state._id,
                            color: selectedColor,
                            size: selectedSize,
                            qty: quantityCount,
                            price: state.sell_price,
                          },
                          {
                            headers: {
                              "auth-token": localStorage.getItem("auth-token"),
                            },
                          }
                        )
                          .then((response) => {
                            window.location.reload();
                          })
                          .catch(function (error) {});
                      }}
                    >
                      <i className="pe-7s-like" style={heart} />
                      Wishlist
                    </button>
                  </div>
                </div>
              ) : (
                <div className="pro-details-quality">
                  <div className="pro-details-cart btn-hover">
                    <button>Out Of Stock</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductImageDescriptionSticky.propTypes = {
  fullProductDesc: PropTypes.string,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  product: PropTypes.object,
  productImage: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  wishlistItems: PropTypes.array,
  addToCart: PropTypes.func,
  addToCompare: PropTypes.func,
  addToWishlist: PropTypes.func,
  addToast: PropTypes.func,
  cartItems: PropTypes.array,
  compareItem: PropTypes.array,
  discountedPrice: PropTypes.number,
  finalDiscountedPrice: PropTypes.number,
  finalProductPrice: PropTypes.number,
  wishlistItem: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    currency: state.currencyData,
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    compareItems: state.compareData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (
      item,
      addToast,
      quantityCount,
      selectedProductColor,
      selectedProductSize
    ) => {
      dispatch(
        addToCart(
          item,
          addToast,
          quantityCount,
          selectedProductColor,
          selectedProductSize
        )
      );
    },
    addToWishlist: (item, addToast) => {
      dispatch(addToWishlist(item, addToast));
    },
    addToCompare: (item, addToast) => {
      dispatch(addToCompare(item, addToast));
    },
  };
};

export default connect(mapStateToProps)(ProductImageDescriptionSticky);
