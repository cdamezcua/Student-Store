import * as React from "react";
import "./ProductCard.css";
import {
  Card,
  Image,
  Group,
  Button,
  Badge,
  AspectRatio,
} from "@mantine/core";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  quantity,
  handleAddItemToCart = () => {},
  handleRemoveItemToCart = () => {},
  showDescription = false,
  isOnWishlist = false,
  handleAddItemToWishlist = () => {},
  handleRemoveItemToWishlist = () => {},
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
        <AspectRatio ratio={3 / 2}>
          <div className="media">
            <Link to={`/products/${product.id}`}>
              <Image src={product.image} />
            </Link>
          </div>
        </AspectRatio>
      </Card.Section>
      <Card.Section>
        <Group position="apart">
          <p className="product-name">{product.name}</p>
          <Button.Group>
            <Button
              className="remove"
              variant="outline"
              onClick={() => {
                handleRemoveItemToCart(product.id);
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
        <Group position="apart">
          <Button
            variant={isOnWishlist ? "light" : "none"}
            color="red"
            onClick={() => {
              if (isOnWishlist) {
                handleRemoveItemToWishlist(product.id);
              } else {
                handleAddItemToWishlist(product.id);
              }
            }}
          >
            {isOnWishlist ? "♥️" : "♡"}
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
