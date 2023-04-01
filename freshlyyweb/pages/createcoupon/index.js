import React from "react";
import { P, H3, H5, H6, A, H2 } from "../../components/Texts";
import theme from "../../styles/theme";
import logo from "../../images/logo.svg";
import Image from "next/image";
import benefit from "../../images/benefit.svg";
import shop from "../../images/shop.svg";
import adminlogo from "../../images/profile.png";
import productlogo from "../../images/Productad.png";
import dashboardlogo from "../../images/Dash.png";
import userlogo from "../../images/Users.png";
import couponlogo from "../../images/Coupon.png";
import ticketlogo from "../../images/ticket.png";
import statlogo from "../../images/Statistics.png";
import settingslogo from "../../images/settings.png";
import logoutlogo from "../../images/logout.png";
import createcoupon from "../../images/createcoupon.png";
import Input from "../../components/Input";
import Link from "next/link";
import {
  faBasketShopping,
  faBorderAll,
  faBoxesPacking,
  faChartLine,
  faMoneyBillTransfer,
  faRightToBracket,
  faTags,
  faTicket,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

import FooterSpecial from "../../components/FooterSpecial";
import Adminmain from "../../images/Adminmain.png.png";
import Admincard from "../../components/Admincard";

export default function () {
  const API = process.env.NEXT_PUBLIC_FRESHLYY_API;
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    fetch(API + "/farmer/adminDashboard/", {
      //getting data from the backend (all products)
      method: "GET",
      headers: {
        useremail: "harini@freshlyy.com",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message != "Success") throw new Error("Something went wrong");
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);
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
                {/* <FontAwesomeIcon icon={faBorderAll} style={styles.dashicon} /> */}
                <Image
                  src={dashboardlogo}
                  style={styles.dashimage}
                  alt="Product"
                />
                <H5> Dashboard </H5>
              </li>

              <li style={styles.liItems}>
                <Image
                  src={productlogo}
                  style={styles.proimage}
                  alt="Product"
                />
                <H5> Products </H5>{" "}
              </li>

              <li style={styles.liItems}>
                <Image src={userlogo} style={styles.userimage} alt="Product" />
                <H5> Users </H5>
              </li>
              <li style={styles.liItems}>
                <Image
                  src={couponlogo}
                  style={styles.couponimage}
                  alt="Product"
                />
                <H5> Coupons </H5>
              </li>
              <li style={styles.liItems}>
                <Image
                  src={ticketlogo}
                  style={styles.ticketimage}
                  alt="Product"
                />
                <H5> Support Tickets</H5>
              </li>
              <li style={styles.liItems}>
                <Image src={statlogo} style={styles.statimage} alt="Product" />
                <H5> Statistics</H5>
              </li>
              <li style={styles.liItems}>
                <Image
                  src={settingslogo}
                  style={styles.setimage}
                  alt="Product"
                />
                <H5> Settings </H5>
              </li>
              <li style={styles.logItems}>
                <Image
                  src={logoutlogo}
                  style={styles.logoutimage}
                  alt="Product"
                />
                <H6> Logout </H6>
              </li>
            </ul>
          </div>
        </div>
        <div style={styles.maincont}>
          <div style={styles.mainImg}>
            <Image src={createcoupon} style={styles.sideimage} alt="Main" />
          </div>
          <div style={styles.line}>
            <H2>Coupons</H2>
            <H3 style={styles.cu}> Create Coupon</H3>
          </div>
          <div>
            <Input />
          </div>
        </div>
      </div>
      <div style={styles.foot}>
        <FooterSpecial />
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
    height: 918,
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
    display: "flex",
    flexDirection: "row",
  },
  logItems: {
    alignItems: "center",
    marginLeft: 5,
    marginTop: 60,

    display: "flex",
    flexDirection: "row",
  },
  maincont: {
    display: "flex",
    flex: 1,

    flexDirection: "column",
  },
  mainImg: {
    justifyContent: "flex-end",
    alignItems: "right",
    marginLeft: 750,
  },
  sideimage: {
    width: "380px",
    alignItems: "right",
    height: "300px",
  },

  dashicon: {
    marginLeft: -20,
  },
  proimage: {
    width: 40,
    height: 40,
    marginLeft: -40,
    marginTop: 10,
    marginRight: 10,
  },
  dashimage: {
    width: 30,
    height: 30,
    marginLeft: -40,
    marginTop: 20,
    marginRight: 15,
  },
  userimage: {
    width: 35,
    height: 35,
    marginLeft: -40,
    marginTop: 20,
    marginRight: 15,
  },
  couponimage: {
    width: 40,
    height: 40,
    marginLeft: -40,
    marginTop: 15,
    marginRight: 10,
  },
  ticketimage: {
    width: 43,
    height: 43,
    marginLeft: -40,
    marginTop: 15,
    marginRight: 10,
  },
  statimage: {
    width: 35,
    height: 35,
    marginLeft: -40,
    marginTop: 15,
    marginRight: 15,
  },
  setimage: {
    width: 35,
    height: 35,
    marginLeft: -40,
    marginTop: 15,
    marginRight: 15,
  },
  logoutimage: {
    width: 25,
    height: 25,
    marginLeft: -40,

    marginRight: 10,
  },
  foot: {
    marginTop: 350,
  },
  line: {
    marginTop: -250,
    marginLeft: 40,
    gap: 50,
  },
  cu: {
    marginTop: 40,
  },
  // li1: {
  //   display: "flex",
  //   flexDirection: "row",
  // },
};
