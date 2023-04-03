import React from "react";
import { P, H3, H5, H6, A } from "../../components/Texts";
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
import ascendants from "../../images/ascendantst.svg";
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
import styles from "./index.module.scss";
import AdminNavbar from "../../components/AdminNavbar";

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
      <div className={styles.container}>
        <div className={styles.navbar}>
          <AdminNavbar />
        </div>
        <div className={styles.maincont}>
          <div className={styles.mainImg}>
            <Image src={Adminmain} className={styles.mainimage} alt="Main" />
          </div>
          <div className={styles.boxcon}>
            <Admincard
              icon={faIdCard}
              number={40}
              admintitle="Pending NIC Requests"
            />
            <Admincard
              icon={faBoxesPacking}
              number={6}
              admintitle="Pending Products"
            />
            <Admincard
              icon={faMoneyBillTransfer}
              number={10}
              admintitle="Withdraw Requests"
            />
          </div>
          <div className={styles.boxcon2}>
            <Admincard
              icon={faTicket}
              number={data.numOfSupportTickets}
              admintitle="Assigned Support Tickets"
            />
            <Admincard
              icon={faBasketShopping}
              number={data.numOfLiveProducts}
              admintitle="Products"
            />
            <Admincard
              icon={faUsers}
              number={data.numOfUsers}
              admintitle="Users"
            />
          </div>
          <div className={styles.boxcon3}>
            <Admincard icon={faTags} number={10} admintitle="Active Coupons" />
            <Admincard icon={faChartLine} number={4} admintitle="Statistics" />
            <Admincard
              icon={faThumbsDown}
              number={20}
              admintitle="Reported Reviews"
            />
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <FooterSpecial />
      </div>
    </>
  );
}
