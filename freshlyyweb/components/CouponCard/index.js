import React from "react";
import theme from "../../styles/theme";
import { H5, P, H6, H3 } from "../Texts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-regular-svg-icons";
import { } from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.scss";

export default function (props) {
  return (
    <>
      <div className={styles.cccard} onClick={props.onClick}>
        {/* <FontAwesomeIcon icon={props.icon} className={styles.icon} /> */}
        <div className={styles.line}>
          <P> Coupon Code :</P>
          <H6 className={styles.ccode}>{props.couponcode}</H6>
        </div>
        <div className={styles.line}>
          <P> Percentage :</P>
          <H6 className={styles.percent}>{props.percentage}</H6>
        </div>
        <div className={styles.line}>
          <P> Created Date:</P>
          <H6 className={styles.cdate}>{props.createddate}</H6>{" "}
        </div>
        <div className={styles.line}>
          <P> Expire Date:</P>
          <H6 className={styles.edate}>{props.expiredate}</H6>
        </div>
        <div className={styles.line}>
          <P> Status:</P>
          <H6 className={styles.cstatus}>{props.status}</H6>
        </div>
      </div>

    </>
  );
}
