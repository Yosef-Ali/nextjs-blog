import Menu from "../components/Menu/Menu";
import Comments from "../components/comments/Comments";
import styles from "./singlePage.module.css";
import Image from "next/image";
//import Comments from "../components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit!
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>data?.user.name</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus dolorem praesentium delectus quo quaerat rerum
              possimus atque architecto dolores quas quia, deleniti est
              necessitatibus, consequuntur eveniet molestiae ex, dolor sunt?
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus dolorem praesentium delectus quo quaerat rerum
              possimus atque architecto dolores quas quia, deleniti est
              necessitatibus, consequuntur eveniet molestiae ex, dolor sunt?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus dolorem praesentium delectus quo quaerat rerum
              possimus atque architecto dolores quas quia, deleniti est
              necessitatibus, consequuntur eveniet molestiae ex, dolor sunt?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus dolorem praesentium delectus quo quaerat rerum
              possimus atque architecto dolores quas quia, deleniti est
              necessitatibus, consequuntur eveniet molestiae ex, dolor sunt?
            </p>
          </div>

          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
