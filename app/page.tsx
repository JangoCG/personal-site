import Link from "next/link";
import styles from "./page.module.css";
import TimeComponent from "../components/time-component";

export default function Home() {
  return (
    <>
      <section className={styles.introSection}>
        <div className={styles.titleContainer}>
          <p className={styles.spinningText}>Cengiz Gürtusgil™</p>
          <div className={styles.timeContainer}>
            <TimeComponent />
          </div>
        </div>

        <div className={styles.tagContainer}>
          <a
            href="mailto:contact@cengizgil.com"
            className={styles.regularTag}
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/cengiz-guertusgil/"
            target="_blank"
            className={styles.regularTag}
          >
            LinkedIn
          </a>
          <a
            target="_blank"
            href="https://github.com/JangoCG"
            className={styles.githubTag}
          >
            GitHub™ <span className={styles.blink}>✨</span>&nbsp;
          </a>
        </div>
        <div className={styles.introContainer}>
          <div className={styles.bio}>
            Born in Heidenheim, Baden-Wuerttemberg, Germany in 1995, Cengiz is a
            determined software engineer.
            <br />
            <br />
            Starting with a secondary school education, he embarked on an
            ambitious educational journey, demonstrating his extraordinary
            ability to learn quickly. Despite not having the typical university
            entrance qualifications, he successfully completed a degree in
            Business IT from Fulda University of Applied Sciences, rapidly
            acquiring a vast amount of knowledge in a short time.
            <br />
            <br />
            Currently, he balances a full-time role at Exxeta with his pursuit
            of a Master's degree in Mobile and Distributed Computing from
            Wilhelm Büchner University of Technology.
            <br />
            <br />
            At Exxeta, while he has developed various modern web applications as
            a Full Stack Developer, his key role lies in leading the front-end
            development, leveraging his expertise in technologies like Angular,
            React, and Spring Boot.
            <br />
            <br />
            In the sphere of software engineering, Cengiz nurtures a profound
            passion and a commitment to maintaining high code quality. His quick
            learning ability allows him to apply newly acquired knowledge to
            complex problems, thus infusing his professional approach with
            resilience and dedication. This balance between his career and
            academics illustrates his adaptability and drive.
          </div>
        </div>
      </section>
    </>
  );
}
