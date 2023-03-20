import React from "react";
import { P, H3, H5, A } from "../../components/Texts";
import theme from "../../styles/theme";
import logo from "../../images/logo.svg";
import Image from "next/image";
import benefit from "../../images/benefit.svg";
import shop from "../../images/shop.svg";
import adminlogo from "../../images/profile.png";
import ascendants from "../../images/ascendantst.svg";
import { FaHome, FaShoppingBag, FaChartLine } from "react-icons/fa";
import Link from "next/link";
import FooterSpecial from "../../components/FooterSpecial";
import Adminmain from "../../images/Adminmain.png.png";
import Admincard from "../../components/Admincard";

export default function () {
  return (
    <>
      {" "}
      <div style={styles.container}>
        <div style={styles.navContainer}>
          <div style={styles.logoarea}>
            <Image
              src={logo}
              alt="Freshlyy Logo"
              style={styles.logo}
              priority
            />
          </div>
          <div style={styles.adminlogo}>
            <Image src={adminlogo} style={styles.adminimage} alt="Shop" />
          </div>
          <div style={styles.menu}>
            <ul style={styles.menuItems}>
              <li style={styles.liItems}>
                <H5> Dashboard </H5>
              </li>
              <li style={styles.liItems}>
                <H5> Products </H5>{" "}
              </li>
              <li style={styles.liItems}>
                <H5> Users </H5>
              </li>
              <li style={styles.liItems}>
                <H5> Coupons </H5>
              </li>
              <li style={styles.liItems}>
                <H5> Support Tickets</H5>
              </li>
              <li style={styles.liItems}>
                <H5> Statistics</H5>
              </li>
              <li style={styles.liItems}>
                <H5> Settings </H5>
              </li>
              <li style={styles.logItems}>
                <H5> Logout </H5>
              </li>
            </ul>
          </div>
        </div>
        <div style={styles.maincont}>
          <div style={styles.mainImg}>
            <Image src={Adminmain} style={styles.mainimage} alt="Main" />
          </div>
          <div style={styles.boxcon}>
            <Admincard />
            <Admincard />
            <Admincard />
          </div>
        </div>
      </div>
    </>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  navContainer: {
    padding: 40,
    backgroundColor: theme.tertiaryShade,
    width: 230,
    height: 800,
    display: "flex",
    flexDirection: "column",
  },
  logoarea: {
    // flex: 2,
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 50,
    width: "auto",
  },
  adminlogo: {
    display: "flex",
    justifyContent: "center",
  },

  adminimage: {
    width: "auto",
    height: 50,
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: 10,
  },
  menuItems: {
    // display: "flex",
    listStyle: "none",
  },
  liItems: {
    marginLeft: 5,
  },
  logItems: {
    alignItems: "center",
    paddingTop: 20,
  },
  maincont: {
    display: "flex",
    flex: 1,

    flexDirection: "column",
  },
  mainImg: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 60,
  },
  mainimage: {
    width: "1000px",
    alignItems: "center",
  },
  boxcon: {
    display: "flex",
    flexDirection: "row",
    gap: 100,

    // backgroundColor: theme.tertiaryShade,
    marginLeft: 100,
    // width: "1000px",
    // height: "1500px",
    // justifyContent: "center",
  },
};
