import * as React from "react";
import "./ProductCard.css";
import { Card, Image, Group, Button, Badge, Rating } from "@mantine/core";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart = () => {},
  handleRemoveItemFromCart = () => {},
  showDescription = true,
}) {
  return (
    <Card
      className="product-card"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <div className="media">
          <Link to={`/products/${product.id}`}>
            <Image src={product.image} height={200} />
          </Link>
        </div>
      </Card.Section>
      <Card.Section>
        <Group position="apart">
          <p className="product-name">{product.name}</p>
          <Button.Group>
            <Button
              className="remove"
              variant="outline"
              onClick={() => {
                handleRemoveItemFromCart(product.id);
              }}
            >
              -
            </Button>
            <Button
              className="add"
              variant="outline"
              onClick={() => {
                handleAddItemToCart(product.id);
              }}
            >
              +
            </Button>
          </Button.Group>
        </Group>
        <Group position="apart">
          {showDescription ? (
            <p className="product-description">{product.description}</p>
          ) : null}
        </Group>
        <Group position="apart">
          <p className="product-price">${product.price.toFixed(2)}</p>
          {quantity > 0 ? (
            <Badge size="lg" color="blue">
              {quantity}
            </Badge>
          ) : null}
        </Group>
      </Card.Section>
    </Card>
  );
}
