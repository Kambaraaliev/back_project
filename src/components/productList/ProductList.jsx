import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductList = ({ readProducts, products }) => {
  useEffect(() => {
    readProducts();
  }, []);

  return (
    <div>
      {products.map((item, index) => (
        <Card
          key={index}
          sx={{
            maxWidth: 600,
            margin: "20px auto",
          }}
        >
          <CardMedia
            sx={{ height: 500 }}
            image={item.image}
            title="product image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.des}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.price} $
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
