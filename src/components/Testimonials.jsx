import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div
      className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1"
      style={{ display: "flex", alignItems: "center" }}>
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
    </div>

    <div
      className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]"
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
