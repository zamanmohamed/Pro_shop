import React from "react";
import { Card } from "react-bootstrap";

// as කෑල්ල ගැන පරිස්සමෙන්

const Product = ({ product }) => {
  return (
    <Card className="m-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </a>
      <a href={`/product/${product._id}`}>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>
      </a>
      <Card.Text as="div">
        <div className="my-3">
          {product.rating} from {product.numReviews}
        </div>
      </Card.Text>
      <Card.Text as="h3">${product.price}</Card.Text>
    </Card>
  );
};

export default Product;
