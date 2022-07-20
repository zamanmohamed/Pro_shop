import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

// as කෑල්ල ගැන පරිස්සමෙන්
// variant

const Product = ({ product }) => {
  return (
    <Card className="m-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </Link>
      <Link to={`/product/${product._id}`}>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </Link>
      <Card.Text as="div">
        <div className="my-3">
          {product.rating} from {product.numReviews}
        </div>
      </Card.Text>
      <Card.Text as="div">
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Card.Text>
      <Card.Text as="h3">${product.price}</Card.Text>
    </Card>
  );
};

export default Product;
