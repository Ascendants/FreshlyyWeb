import React from "react";
import theme from "../styles/theme";
import { H1, H2, H3, P } from "./Texts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

export default function (props) {
  return (
    <>
      <div style={styles.adcard}>
        <FontAwesomeIcon icon={props.admincardicon} />
      </div>
    </>
  );
}
const styles = {
  adcard: {
    width: 180,
    height: 180,
    backgroundColor: theme.danger,
    borderRadius: 20,
  },
};
