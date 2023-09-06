import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {/* {item.createdAt.substring(0, 10)} -{" "} */}
            11.02.2023 -
          </span>
          <span className={styles.category}> item.catSlug</span>
        </div>
        <Link href="{`/posts/${item.slug}`}">
          <h1>item.title</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        {/* <div
          className={styles.desc}
          dangerouslySetInnerHTML={"{ __html: item?.desc.substring(0, 60) }"}
        /> */}
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quia
          velit quasi, mollitia adipisci beatae sed rem, possimus dignissimos
          aliquam suscipit eligendi officiis, eum sint doloribus inventore
          itaque eius obcaecati.
        </p>
        <Link href={"`/posts/${item.slug}`"} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
