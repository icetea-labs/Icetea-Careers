import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {

  return {
    colorOrange: {
      color: theme.palette.primary.main,
    },
    pivotWrap: {
      background: "#F1F1EF",
      padding: "160px 0",
      "&>div": {
        position: "relative",
      },
      "& .decoration": {
        position: "absolute",
        "&-pivot-1": {
          top: -90,
          left: 0,
          [theme.breakpoints.only("xs")]: {
            top: -60,
          },
        },
        "&-pivot-2": {
          top: 42,
          right: 0,
          [theme.breakpoints.only("xs")]: {
            display: "none",
          },
        },
      },
      [theme.breakpoints.down("lg")]: {
        padding: "120px 0",
      },
      [theme.breakpoints.down("768")]: {
        padding: "90px 0",
        "& .decoration": {
          position: "absolute",
          "&-pivot-2": {
            top: "auto !important",
            right: 0,
            bottom: -90,
            width: 140,
          },
        },
      },
      [theme.breakpoints.only("xs")]: {
        padding: "60px 0",
      },
    },
    pivotContainer: {
      gridColumn: "2 / 11",
      color: "#000",
      maxWidth: 992,
      zIndex: 2,
      "& p": {
        margin: 0,
      },
      "& .pivot-intro": {
        color: theme.palette.primary.main,
        textTransform: "uppercase",
        font: "normal normal 700 1rem/1.5rem Plus Jakarta Sans",
        letterSpacing: "0.125rem",
      },
      "& .pivot-title": {
        font: "normal normal 600 2.25rem/3.25rem Plus Jakarta Sans",
        margin: "12px 0 32px",
      },
      "& .pivot-content-wrap": {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        font: "normal normal 400 1.125rem/2rem Plus Jakarta Sans",
      },
      [theme.breakpoints.down("lg")]: {
        "& .pivot-title": {
          font: "normal normal 600 2rem/3rem Plus Jakarta Sans",
          margin: "12px 0 32px",
        },
        "& .pivot-content-wrap": {
          font: "normal normal 400 1rem/1.75rem Plus Jakarta Sans",
        },
      },
      [theme.breakpoints.down("md")]: {
        "& .pivot-intro": {
          font: theme.typography.nn71424.font,
        },
        "& .pivot-title": {
          font: "normal normal 600 1.75rem/2.5rem Plus Jakarta Sans",
          margin: "12px 0 32px",
        },
        "& .pivot-content-wrap": {
          font: "normal normal 400 0.875rem/1.5rem Plus Jakarta Sans",
        },
      },
      [theme.breakpoints.down("768")]: {
        "& .pivot-content-wrap": {
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 8,
          "& span": {
            marginBottom: 8,
          },
          font: "normal normal 400 1rem/1.75rem Plus Jakarta Sans",
        },
        "& .pivot-title": {
          font: "normal normal 600 2rem/3rem Plus Jakarta Sans",
          margin: "12px 0 32px",
        },
      },
      [theme.breakpoints.only("xs")]: {
        gridColumn: "none",
        "& .pivot-intro": {
          font: theme.typography.nn71218.font,
          letterSpacing: "1px",
        },
        "& .pivot-title": {
          font: theme.typography.nn72432.font,
          margin: "12px 0 20px",
        },
        "& .pivot-content-wrap": {
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 8,
          font: theme.typography.nn41424.font,
        },
      },
    },
    [theme.breakpoints.only("xs")]: {},
  };
});

export default useStyles;
