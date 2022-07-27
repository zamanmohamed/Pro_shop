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

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="product">
              <Route path=":id" element={<ProductScreen />} />
            </Route>
            <Route path="login" element={<LoginScreen />} />
            <Route path="register" element={<RegisterScreen />} />
            <Route path="profile" element={<ProfileScreen />} />
            <Route path="shipping" element={<ShippingScreen />} />
            <Route path="cart" element={<CartScreen />}>
              <Route path=":id" element={<CartScreen />} />
            </Route>
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
