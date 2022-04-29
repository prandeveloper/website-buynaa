import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
//import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import "../../assets/css/productdetail.css";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescriptionSticky from "../../wrappers/product/ProductImageDescriptionSticky";
import Axios from "axios";

export class ProductSticky extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {},
      pid: "",
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    Axios.get(`http://35.154.86.59/api/admin/getoneproduct/${id}`)
      .then((response) => {
        this.setState({
          detail: response.data.data,
          pid: response.data.data._id,
        });
      })
      .catch((error) => {});
  }

  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Buynaa | Product Page</title>
          <meta
            name="description"
            content="Product page of flone react minimalist eCommerce template."
          />
        </MetaTags>

        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
          Home
        </BreadcrumbsItem>
        <BreadcrumbsItem>/ Shop Product</BreadcrumbsItem>

        <LayoutOne headerTop="visible">
          {/* breadcrumb */}
          <Breadcrumb />

          {/* product description with image */}
          <ProductImageDescriptionSticky
            spaceTopclass="mt-100"
            spaceBottomclass="mb-100"
            productImage={JSON.stringify(this.state.detail)}
          />

          {/* product description tab */}
          <ProductDescriptionTab
            spaceBottomclass="pb-90"
            productFullDesc={JSON.stringify(this.state.detail)}
            productid={this.state.pid}
          />
        </LayoutOne>
      </Fragment>
    );
  }
}

export default ProductSticky;
