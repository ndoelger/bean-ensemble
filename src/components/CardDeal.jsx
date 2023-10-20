import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section2}>
    <div className={layout.sectionInfo2}>
      <h2 className={styles.heading3}>
        Ethical Sourcing, <br className="sm:block hidden" />
        Sustainable Impact
      </h2>
      <p className={`${styles.paragraph2} max-w-[470px] mt-5`}>
        Support Farmers and Communities Around the World. Our Commitment to Fair
        Trade Practices Ensures that Every Cup of Coffee You Enjoy is a Force
        for Good in the Global Coffee Industry.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[90%] h-[90%]" />
    </div>
  </section>
);

export default CardDeal;
