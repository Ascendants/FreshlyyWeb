import React from "react";
import theme from "../styles/theme";
import { H5, P, H4 } from "./Texts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

export default function (props) {
  return (
    <>
      <div style={styles.adcard}>
        <FontAwesomeIcon icon={props.icon} style={styles.icon} />
        <H5 style={styles.num}>{props.number}</H5>
        <P style={styles.admintext}>{props.admintitle}</P>
      </div>
    </>
  );
}
const styles = {
  adcard: {
    width: 230,
    height: 160,
    backgroundColor: theme.overlay,
    borderRadius: 20,
  },
  icon: {
    marginLeft: 90,
    marginTop: 20,
    width: 50,
    height: 50,
    color: theme.primary,
  },
  num: {
    textAlign: "center",
    marginTop: 5,
  },
  admintext: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: -15,
  },
};
