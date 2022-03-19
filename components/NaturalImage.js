import { useState } from "react";
import Image from "next/image";

const NaturalImage = (props) => {
  const [ratio, setRatio] = useState(16 / 9); // default to 16:9

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      // set the dimension (affected by layout)
      width={200}
      height={200 / ratio}
      layout="responsive" // you can use "responsive", "fill" or the default "intrinsic"
      onLoadingComplete={({ naturalWidth, naturalHeight }) =>
        setRatio(naturalWidth / naturalHeight)
      }
    />
  );
};

export default NaturalImage;
