// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import OrderList from "./views/orders/List";
import OrderAdd from "./views/orders/Add";
import OrderEdit from "./views/orders/Edit";

export default [
  
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: OrderList 
  },
  {
    path: "/order",
    exact: true,
    layout: DefaultLayout,
    component: OrderList
  },
  {
    path: "/order/add",
    exact: true,
    layout: DefaultLayout,
    component: OrderAdd
  },
  {
    path: "/order/edit/:id",
    exact: true,
    layout: DefaultLayout,
    component: OrderEdit
  },
  
];
