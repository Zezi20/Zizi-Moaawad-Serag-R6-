import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homel from "pages/Home1";
import Shop from "pages/Shop";
import SingleProduct from "pages/SingleProduct";
import CartSidebar from "pages/CartSidebar";
import Cart from "pages/Cart";
import Contact from "pages/Contact";
import Checkout from "pages/Checkout";

const ProjectRoutes = () => {
let element = useRoutes ([
{ path: "/", element: <Home /> },
{ path: "*", element: <NotFound /> },
{
path: "home1",
element: <home1 />,

},
{ 
    path: "shop",
    element: <shop/>,
},
{ 
    path: "singleproduct",
    element: <singleproduct/>, 

},
{ 
    path: "cart",
    element: <cart/>,
},
{ 

    path: "contact",
    element: <contact/>,
}, 
{ 

    path: "checout",
    element: <Checkout/>, 

},
]);

return element;
};

export default ProjectRoutes;