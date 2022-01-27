import React from "react";
import { Card, Button } from "react-bootstrap";
const BlogCard = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} style={{ height: "200px" }} />
      <Card.Body>
        <Card.Title className="mt-2">{props.header}</Card.Title>
        <Card.Text className="my-3 text-secondary lh-lg">
          {props.content}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
