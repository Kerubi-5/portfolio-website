import { useState } from "react";
import Image from "next/image";

const NaturalImage = (props) => {
  const [ratio, setRatio] = useState(16 / 9); // default to 16:9

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      // set the dimension (affected by layout)
    />
  );
};

export default NaturalImage;
