import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import CarouselA from "../../assets/carouselA.jpeg";
import CarouselB from "../../assets/carouselB.jpeg";
import CarouselC from "../../assets/carouselC.jpeg";
import CarouselD from "../../assets/carouselD.jpeg";
import CarouselE from "../../assets/carouselE.jpeg";
import CarouselF from "../../assets/carouselF.jpeg";
import CarouselG from "../../assets/carouselG.jpeg";
import { Typography } from "@material-ui/core";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
  button: {
    margin: theme.spacing(1),
  },
  item: {
    alignSelf: "center",
  },
}));

const Index = () => {
  const classes = useStyles();

  var items = [
    CarouselA,
    CarouselB,
    CarouselC,
    CarouselD,
    CarouselE,
    CarouselF,
    CarouselG,
  ];

  return (
    <div>
      <div className={classes.root}>
        <Carousel
          className={classes.item}
          indicators={false}
          navButtonsAlwaysInvisible={true}
          animation="slide"
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
        <Typography
          variant="h4"
          gutterBottom
          style={{ color: "#c80352", marginTop: "10px" }}
        >
          Ziglor
        </Typography>
        <Typography variant="body2" gutterBottom style={{ color: "#c80352" }}>
          ..the way the World pays
        </Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: "#c80352", color: "white" }}
          className={classes.button}
          startIcon={<DirectionsRunIcon />}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

function Item(props) {
  const classes = useStyles();
  return (
    <div>
      <Avatar className={classes.large} src={props.item} alt="image"></Avatar>
    </div>
  );
}

export default Index;
