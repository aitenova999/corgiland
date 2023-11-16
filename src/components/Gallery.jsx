import React from "react";
import ImageHover from "../components/ImageHover";
import {
  Margo9,
  Margo10,
  Margo11,
  Margo12,
  Margo13,
  Margo14,
  Hank9,
  Hank10,
  Hank11,
  Hank12,
  Hank13,
  MargoandHank3,
} from "../assets/images";

const Gallery = () => {
  return (
    <div className="flex flex-row justify-evenly pt-8 max-lg:flex-wrap">
      <div>
        <ImageHover src={Margo9} />
      </div>
      <div>
        <ImageHover src={Hank11} />
      </div>
      <div>
        <ImageHover src={MargoandHank3} />
      </div>
      <div>
        <ImageHover src={Margo10} />
      </div>
      <div>
        <ImageHover src={Hank10} />
      </div>
    </div>
  );
};

export default Gallery;
