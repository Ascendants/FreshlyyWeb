import React from "react";
import { H3, P } from "./Texts";
import Image from "next/image";
import benefit from "../images/benefit.svg";
import shop from "../images/shop.svg";
export default function () {
  return (
    <>
      <section style={styles.descContainer}>
        <div style={styles.description}>
          <H3>What's Freshlyy?</H3>
          <P>
            Freshlyy is an app that connects farmers and customers together to
            help them maintain profitable relationships with each other.
          </P>
          <P>
            Our platform allows customers to purchase fresh product from nearby
            farmers with zero hassle and allows farmers to sell at retail
            prices, by totally eliminating the intermediaries in between.
          </P>
        </div>
        <div style={styles.image}>
          <Image src={shop} style={styles.imageElement} alt="Shop" />
        </div>
      </section>
      <section style={styles.descContainer}>
        <div style={styles.image}>
          <Image src={benefit} style={styles.imageElement} alt="Benefits" />
        </div>
        <div style={styles.description}>
          <H3>Why Freshlyy?</H3>
          <P>
            The platform is 100% free to use for both farmers and customers.
          </P>
          <P>
            However, we do charge a small commission on orders fulfilled on
            Freshlyy, so you pay only when you earn!
          </P>
        </div>
      </section>
    </>
  );
}
const styles = {
  descContainer: {
    display: "flex",
    marginBottom: 50,
    gap: 60,
    alignItems: "center",
  },
  description: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  imageElement: {
    width: "100%",
    height: "auto",
  },
};
