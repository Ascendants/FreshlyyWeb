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

import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export default function () {
  const handlCClick = () => {
    router.push("/createcoupon");
  };
  const router = useRouter();
  return (
    <>
      <section className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navContainer}>
            <div className={styles.logoarea}>
              <Image
                src={logo}
                alt='Freshlyy Logo'
                className={styles.logo}
                priority
              />
            </div>
            <div className={styles.adminlogo}>
              <Image src={adminlogo} className={styles.adminimage} alt='Shop' />
            </div>
            <div className={styles.menu}>
              <ul className={styles.menuItems}>
                <li className={styles.liItems}>
                  {/* <FontAwesomeIcon icon={faBorderAll} style={styles.dashicon} /> */}
                  <Image
                    src={dashboardlogo}
                    className={styles.dashimage}
                    alt='Product'
                  />
                  <H5> Dashboard </H5>
                </li>

                <li className={styles.liItems}>
                  <Image
                    src={productlogo}
                    className={styles.proimage}
                    alt='Product'
                  />
                  <H5> Products </H5>{" "}
                </li>

                <li className={styles.liItems}>
                  <Image
                    src={userlogo}
                    className={styles.userimage}
                    alt='Product'
                  />
                  <H5> Users </H5>
                </li>
                <li className={styles.liItems} onClick={handlCClick}>
                  <Image
                    src={couponlogo}
                    className={styles.couponimage}
                    alt='Product'
                  />
                  <H5> Coupons </H5>
                </li>
                <li className={styles.liItems}>
                  <Image
                    src={ticketlogo}
                    className={styles.ticketimage}
                    alt='Product'
                  />
                  <H5> Support Tickets</H5>
                </li>
                <li className={styles.liItems}>
                  <Image
                    src={statlogo}
                    className={styles.statimage}
                    alt='Product'
                  />
                  <H5> Statistics</H5>
                </li>
                <li className={styles.liItems}>
                  <Image
                    src={settingslogo}
                    className={styles.setimage}
                    alt='Product'
                  />
                  <H5> Settings </H5>
                </li>
                <li className={styles.logItems}>
                  <Image
                    src={logoutlogo}
                    className={styles.logoutimage}
                    alt='Product'
                  />
                  <H6> Logout </H6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
