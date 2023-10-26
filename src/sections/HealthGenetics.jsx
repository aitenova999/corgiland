import React from "react";
import { Frame3 } from "../assets/images";

const HealthGenetics = () => {
  return (
    <section>
      <div>
        <div>
          <h2 className=" flex justify-center my-4 font-playfair bold  text-cyan-800 text-4xl ">
            Health and Genetic Testing
          </h2>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4 ">
            Part of being a responsible breeder is making sure that you are
            educated on what issues the breed can develop. As we continue to
            grow in the future, we take great part to ensure our dogs health and
            well-being is priority before going into breeding program. Our goal
            is to produce quality and unique puppies that have great genetics,
            health, and temperaments to become companions and part of the
            family. We genetically test all of our parent dogs for the most
            common diseases found in the corgi breed, they are Degenerative
            Myelopathy (DM), Exercise Induced Collapse (EIC), Von Willebrand's
            Disease Type 1(VWD1), CAER (Eye) Testing, certified by OFA, Hip and
            Elbow Dysplasia and Progressive Retinal Atrophy Rod-Cone Dysplasia
            3(PRA-RCD3). Tested results can be provided upon request. 
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            I hope to provide enough information on this page about hereditary
            issues that are common to the Cardigan Welsh Corgi Breed.
          </p>
        </div>
        <div>
          <h2 className=" flex justify-start my-4 font-playfair bold  text-cyan-800 text-2xl pl-4 ">
            Degenerative Myelopathy (DM)
          </h2>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            Degenerative Myelopathy (DM) is a progressive, degenerative disorder
            of the spinal cord that causes muscle wasting and gait
            abnormalities." This is a later-in-life issue that slowly causes the
            Corgi to become paralyzed and then incontinent while their brain is
            still at 100%. DM is similar to some of the forms of human
            amyotrophic lateral sclerosis (ALS) more commonly known as Lou
            Gehrig’s Disease.
          </p>
        </div>
        <div>
          <h2 className=" flex justify-start my-4 font-playfair bold  text-cyan-800 text-2xl pl-4 ">
            Von Willebrand Disease (vWD)
          </h2>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            Von Willebrand disease I (vWD Type 1), an inherited bleeding
            disorder. Disease presentation varies from asymptomatic to
            spontaneous hemorrhaging and prolonged bleeding after injury,
            surgery, or giving birth. Without medical intervention, uncontrolled
            bleeding can result in death.
          </p>
        </div>
        <div>
          <h2 className=" flex justify-start my-4 font-playfair bold  text-cyan-800 text-2xl pl-4 ">
            Exercise-Induced Collapse (EIC)
          </h2>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            Exercise-induced collapse is a genetic disorder that causes dogs of
            certain breeds to collapse after a period of intense exercise. The
            breeds affected are primarily sporting dogs. Affected dogs tolerate
            mild to moderate activity but will display signs of EIC after 5-20
            minutes of strenuous exercise. The severity of EIC varies. EIC
            episodes last from 5-25 minutes with a gradual return to normal with
            no apparent residual weakness or stiffness.
          </p>
        </div>
        <div>
          <h2 className=" flex justify-start my-4 font-playfair bold  text-cyan-800 text-2xl pl-4 ">
            Progressive retinal Atrophy Rod-Cone Dysplasia 3 (PRA-RCD3)
          </h2>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            Progressive retinal atrophy (PRA) is a category of different
            progressive conditions leading to retinal atrophy and potential
            blindness. Cardigan Welsh Corgi, Pembroke Welsh Corgi breeds can be
            affected by a particular type of PRA known as PRA-RCD3.
          </p>
        </div>
        <div>
          <h2 className=" flex justify-center my-4 font-playfair bold  text-cyan-800 text-2xl pl-4 pt-4 ">
            Genetics Test results read and meaning:
          </h2>
          <ul className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            <li>
              - Dogs with (CLEAR) genotype cannot transmit this variant to their
              offspring.
            </li>
            <li>
              - Dogs with (CARRIER) genotype will not have it but are carriers.
              They will transmit this variant to 50% of their offspring.
              Mattings between two carriers are predicted to produce 25%
              degenerative myelopathy-affected puppies.
            </li>
            <li>
              - Dogs with (AT RISK) may have it and will transmit this variant
              to all their offspring.
            </li>
          </ul>
        </div>
        <div className="flex flex-row justify-around relative mt-10 max-lg:flex-col">
          <img
            src={Frame3}
            width={650}
            height={700}
            className="rounded-md shadow-lg"
            alt="Margo"
          />
          <div className="flex flex-col ">
            <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1 pb-3">
              Clear x Clear All Puppies will be clear
            </p>
            <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1 pb-3">
              Clear x Carrier - Each puppy has a 50% chance of being clear or
              carrier
            </p>
            <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1 pb-1">
              Clear x At Risk - All puppies will be carriers
            </p>
            <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1 pb-2">
              Carrier x Carrier - Each puppy has a 25% chance of clear, a 50%
              chance of beaing a carrier, and 25% chance of being at risk
            </p>
            <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1 pb-2">
              Carrier x Carrier - Each puppy has a 25% chance of clear, a 50%
              chance of beaing a carrier, and 25% chance of being at risk
            </p>
            <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6  sm:max-w-sm px-1 pb-2">
              At Risk x At Risk - All puppies will be at risk
            </p>
          </div>
        </div>

        <div>
          <h2 className=" flex justify-start my-4 font-playfair bold  text-cyan-800 text-2xl pl-4 ">
            <div className="pt-6">
              <h2 className=" flex justify-start my-4 font-playfair bold  text-cyan-800 text-2xl pl-4 ">
                Hip Dysplasia
              </h2>
              <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
                Canine Hip Dysplasia typically develops because of an abnormally
                developed hip joint but can also be caused by cartilage damage
                from a traumatic fracture. With cartilage damage or a hip joint
                that is not formed properly, over time the existing cartilage
                will lose its thickness and elasticity. This breakdown of the
                cartilage will eventually result in pain with any joint
                movement. The goal is to breed only 'passing" hip scores so that
                the puppies produced have less of a chance of inheriting this
                painful defect.
              </p>
            </div>
          </h2>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            The OFA (Orthopedic Foundation for Animals) classifies hips into
            seven different categories: Excellent, Good, Fair (all within Normal
            limits), Borderline, and then Mild, Moderate, or Severe (the last
            three are considered Dysplastic).
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            - Excellent: Superior conformation; there is a deep-seated ball
            (femoral head) that fits tightly into a well-formed
            socket(acetabulum) with minimal joint space.
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            - Good: Slightly less than superior but a well-formed congruent hip
            joint is visualized. The ball fits well into the socket and good
            coverage is present.
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            - Fair: Minor irregularities; the hip joint is wider than a good
            hip. The ball slips slightly out of the socket. The socket may also
            appear slightly shallow.
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            - Borderline: Not clear. Usually more incongruency present than what
            occurs in a fair but there are no arthritic changes present that
            definitively diagnose the hip joint being dysplastic.
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            - Mild: Significant subluxation present where the ball is partially
            out of the socket causing an increased joint space. The socket is
            usually shallow only partially covering the ball.
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            - Moderate: The ball is barely seated into a shallow socket. There
            are secondary arthritic bone changes usually along the femoral neck
            and head (remodeling), acetabular rim changes (osteophytes or bone
            spurs) and various degrees of trabecular bone pattern
            changes(sclerosis).
          </p>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            - Severe: Marked evidence that hip dysplasia exists. The ball is
            partly or completely out of a shallow socket. Significant arthritic
            bone changes along the femoral neck and head and acetabular rim
            changes.
          </p>
        </div>
        <div>
          <h2 className=" flex justify-start my-4 font-playfair bold  text-cyan-800 text-2xl pl-4 ">
            CAER (Eye) Testing​
          </h2>
          <p className="font-montserrat bold text-slate-gray text-lg leading-6 mt-6 px-4">
            The purpose of the OFA Companion Animal Eye Registry (CAER) is to
            provide breeders with information regarding canine eye diseases so
            that they may make informed breeding decisions in an effort to
            produce healthier dogs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HealthGenetics;
