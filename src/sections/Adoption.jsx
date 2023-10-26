import { applicationTypes } from "../constants";
import AdoptionCard from "./AdoptionCard";

const Adoption = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-7 pt-6 pb-6 ">
      {applicationTypes.map((service) => (
        <AdoptionCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Adoption;
