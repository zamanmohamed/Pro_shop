import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { addToCart } from "../actions/cartAction";

const CartScreen = () => {
  const location = useLocation();
  const productID = useParams().id;
  //output --> location.search = ?qty=1
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, qty));
    }
  }, [dispatch, productID, qty]);

  return (
    <>
      <Row>
        <Col md={8}>
          <h1>Shoping Cart</h1>
        </Col>
        <Col md={2}></Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
};

export default CartScreen;
