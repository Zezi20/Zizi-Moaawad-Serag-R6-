import { Helmet } from "react-helmet";
import Footer from "../../components/Footer"; // Fixed the path and removed extra space
import Header from "../../components/Header"; // Fixed the path and removed extra space
import ShopColumnOne from "./ShopColumnOne"; // Fixed the path
import ShopRow from "./ShopRow"; // Fixed the path
import ShopRowFive from "./ShopRowFive";
import ShopRowFour from "./ShopRowFour";
import React from "react";

export default function ShopPage() {
  return (
    <>
      <Helmet>
        <title>Project</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-color-white">
        <Header />
        <ShopRow />
        <ShopRowFour />
        <ShopColumnOne />
        <ShopRowFive />
        <div>
          <Footer className="h-[504px] bg-[url('/public/images/img_footer.png')] bg-cover bg-no-repeat md:h-auto" />
        </div>
      </div>
    </>
  );
}
