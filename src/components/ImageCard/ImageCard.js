import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./ImageCard.css";

function ImageCard(props) {
  return (
    <Card>
      <CardMedia
        className="image-box"
        component="img"
        alt={props?.name || "image unavailable"}
        image={require(`./images/${props?.name || "unavailable"}.jpg`)}
      />
      <CardContent className="card-content">
        <Typography variant="body2" color="text.secondary">
          {props.name || "image unavailable"}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ImageCard;
