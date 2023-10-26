const ImageHover = ({ src }) => {
  return (
    <div className="relative w-60 h-60">
      <img
        className="w-full h-full object-cover duration-300 hover:scale-150 "
        src={src}
        alt="Your Image"
      />
    </div>
  );
};

export default ImageHover;
