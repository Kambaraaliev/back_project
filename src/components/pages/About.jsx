import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{
        maxWidth: 700,

        textAlign: "center",
        marginLeft: "300px",
        height: "500px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://pbs.twimg.com/media/Ft5rysGaUAAYjYR?format=jpg&name=small"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            GUCCI
          </Typography>
          The House presents the new #GucciBamboo1947 campaign featuring #LiuWen
          and shot by #DavidSims, in a portrayal of two emblematic characters
          and the relationship between an individual and a cherished object.
          More http://on.gucci.com/GucciBamboo1947_
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
