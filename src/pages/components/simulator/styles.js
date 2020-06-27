import { makeStyles } from "@material-ui/core/styles";
import Random from "../../../images/systemic-random.svg";
import Same from "../../../images/systemic-same.svg";
import Anopheles from "../../../images/Anopheles.jpg";
import Culex from "../../../images/Culex.jpg";
import InfoIcon from "../../../images/info-24-px.svg";
import Icon from "../../../images/delete-icon-blue.svg";

const useStyles = makeStyles((theme) => ({
  tabs: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    marginBottom: 24,
  },
  formControl: {
    margin: theme.spacing(0, 0, 1, 0),
    minWidth: "100%",
    "& > label": {},
  },
  formControlSelect: {
    margin: theme.spacing(0, 0, 1, 0),
  },
  formControlText: {
    margin: theme.spacing(0, 0, -1, 0),
  },
  formControlChart: {
    margin: theme.spacing(-2, 0, 0, 3),
  },
  contentLeftColumn: {},
  icon: {
    backgroundColor: "transparent",
    boxShadow: "none",
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 99,

    "& .MuiTouchRipple-root": {
      backgroundImage: `url(${Icon})`,
      backgroundPosition: "center",
      backgroundSize: "auto",
      backgroundRepeat: "no-repeat",
    },
    "&:hover": {
      "& .MuiTouchRipple-root": {
        //backgroundImage: `url(${IconHover})`,
      },
    },
  },
  simulatorBody: {
    position: "relative",
    padding: theme.spacing(4, 2, 2, 6),
  },
  simulatorInnerBody: {
    position: "relative",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1, 0),
    },
  },
  simulator: {
    width: `calc(100% + ${theme.spacing(12)}px)`,
    marginLeft: -theme.spacing(6),
    position: "relative",
  },
  tabs: {
    padding: theme.spacing(0, 6),
    borderBottom: "1px solid #e0e0e0",
  },
  chartContainer: {
    position: "relative",
    width: "100%",
    padding: 0,
  },
  chartTitle: {
    display: "inline-block",
  },
  progress: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: 0,
    "& > span": {
      margin: 0,
      fontSize: 14,
      letterSpacing: 1,
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  updateScenario: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translate(-50%, 0%)",
  },
  withSlider: {
    margin: theme.spacing(0, 0, 0, 0),
    whiteSpace: "nowrap",
  },
  withHelp: {
    cursor: "help",
    backgroundImage: `url(${InfoIcon})`,
    backgroundPosition: "right center",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
    width: "fit-content",
    paddingRight: 30,
    margin: theme.spacing(-1, 0, 5, 0),
    padding: theme.spacing(1, 0),
  },
  modalButton: {
    width: "50%",
    //borderTopLeftRadius: 0,
    //borderTopRightRadius: 0,
    borderRadius: 0,
  },
  roundModal: {
    padding: theme.spacing(3, 3, 0, 3),
    borderRadius: 0,
    width: 310,
    position: "absolute",
    left: "50%",
    bottom: 116,
    transform: "translate(-50%, 0%)",
  },
  modalButtons: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(0, 0, 0, -3),
    width: `calc(100% + ${theme.spacing(6)}px)`,
  },
  adherence: {
    height: 110,
    width: "100%",
    position: "relative",
    "&:after, &:before": {
      content: `''`,
      position: "absolute",
      top: 0,
      width: 100,
      height: 100,
    },
    "&:before": {
      left: 0,
      backgroundImage: `url(${Random})`,
      backgroundPosition: "left center",
      backgroundSize: "auto",
      backgroundRepeat: "no-repeat",
    },
    "&:after": {
      right: 0,
      backgroundImage: `url(${Same})`,
      backgroundPosition: "right center",
      backgroundSize: "100px",
      backgroundRepeat: "no-repeat",
    },
  },

  imageOptions: {
    paddingTop: theme.spacing(2),
  },
  imageOption: {
    paddingTop: 74,
    minWidth: 120,
    marginRight: theme.spacing(1),
    "&.anopheles": {
      backgroundImage: `url(${Anopheles})`,
      backgroundPosition: "14px top",
      backgroundSize: "112px 74px",
      backgroundRepeat: "no-repeat",
    },
    "&.culex": {
      backgroundImage: `url(${Culex})`,
      backgroundPosition: "14px top",
      backgroundSize: "112px 74px",
      backgroundRepeat: "no-repeat",
      marginRight: 0,
    },
    "& .MuiFormControlLabel-label": {
      fontSize: "1rem",
    },
  },
  scenarioGraph: {
    position: "relative",
  },
}));

export default useStyles;