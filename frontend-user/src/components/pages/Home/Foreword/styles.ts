import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => {
  return {
    foreword: {
      width: "100%",
      height: "100vh",
      // paddingTop: "47.222%",
      position: "relative",
      background: "url(/images/bg-landing.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      "&>div": {
        zIndex: 3,
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -40%)",
        display: "flex",
      },
      "& .foreword-bg": {
        position: "absolute",
        zIndex: 2,
        "&-1": {
          width: "33.333vw",
          opacity: 0.8,
          bottom: 0,
          right: 0,
        },
        "&-2": {
          width: "47.133vw",
          top: 0,
          left: 0,
        },
      },
    },
    forewordContainer: {
      maxWidth: "min(800px, 80%)",
      margin: "0 auto",
      textAlign: "center",

      color: "#fff",
      "& .sub-title": {
        font: "normal normal 700 2.5rem/5rem Plus Jakarta Sans",
      },
      "& .title": {
        font: "normal normal 700 4.25rem/5rem Plus Jakarta Sans",
      },
      "& .desciption": {
        font: "normal normal 400 1.1255rem/2rem Plus Jakarta Sans",
        marginTop: "1.25em",
      },
      "& p": {
        margin: 0,
      },
      [theme.breakpoints.down("1368")]: {
        "& .sub-title": {
          font: "normal normal 700 2.25rem/4.25rem Plus Jakarta Sans",
        },
        "& .title": {
          font: "normal normal 700 3.75rem/4.75rem Plus Jakarta Sans",
        },
      },
      [theme.breakpoints.down("1024")]: {
        "& .sub-title": {
          font: "normal normal 700 2rem/3.5rem Plus Jakarta Sans",
        },
        "& .title": {
          font: "normal normal 700 3.25rem/4rem Plus Jakarta Sans",
        },
        // "& .sub-title": {
        //   font: "normal normal 700 1.75rem/2.75rem Plus Jakarta Sans",
        // },
        // "& .title": {
        //   font: "normal normal 700 2.75rem/3.5rem Plus Jakarta Sans",
        // },
        "& .desciption": {
          font: "normal normal 400 1rem/1.5rem Plus Jakarta Sans",
          marginTop: "0.5em",
        },
      },
      // [theme.breakpoints.down("768")]: {
      //   "& .sub-title": {
      //     font: "normal normal 700 1.5rem/2rem Plus Jakarta Sans",
      //   },
      //   "& .title": {
      //     font: "normal normal 700 2rem/2.5rem Plus Jakarta Sans",
      //   },
      //   "& .desciption": {
      //     font: "normal normal 400 0.875rem/1.125rem Plus Jakarta Sans",
      //     // marginTop: "1.25em",
      //   },
      // },
    },
    [theme.breakpoints.only("xs")]: {
      foreword: {
        background: "url(/images/bg-landing-xs.svg) no-repeat",
        backgroundSize: "cover",
        // paddingTop: "145.067%",
        backgdroundPosition: "center",
      },
      forewordContainer: {
        maxWidth: "100%",
        padding: 0,
        gridColumn: "none",

        "& .sub-title": {
          font: theme.typography.nn62032.font,
        },
        "& .title": {
          font: "normal normal 700 2.5rem/2.75rem Plus Jakarta Sans",
          margin: "4px 0 12px",
        },
        "& .desciption": {
          font: theme.typography.nn41424.font,
        },
      },
    },
  };
});

export default useStyles;
