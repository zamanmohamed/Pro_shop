import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import NotFound from "./screens/NotFound";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="page">
              <Route path=":pageNumber" element={<HomeScreen />} />
            </Route>
            <Route path="search">
              <Route path=":keyword" element={<HomeScreen />} />
            </Route>
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<HomeScreen />}
            />

            <Route path="/" element={<HomeScreen />} />
            <Route path="product">
              <Route path=":id" element={<ProductScreen />} />
            </Route>
            <Route path="login" element={<LoginScreen />} />
            <Route path="register" element={<RegisterScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
            <Route path="shipping" element={<ShippingScreen />} />
            <Route path="order/:id" element={<OrderScreen />} />
            <Route path="cart" element={<CartScreen />}>
              <Route path=":id" element={<CartScreen />} />
            </Route>
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEditScreen />}
            />
            <Route path="admin">
              <Route path="userlist" element={<UserListScreen />} />
              <Route path="productlist" element={<ProductListScreen />} />
              <Route path="orderlist" element={<OrderListScreen />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
