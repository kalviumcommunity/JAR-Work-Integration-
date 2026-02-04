declare module 'next/image' {
  import * as React from 'react';

  type StaticImageData = any;

  interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string | StaticImageData;
    width?: number | string;
    height?: number | string;
    priority?: boolean;
    placeholder?: 'blur' | 'empty';
  }

  const Image: React.FC<ImageProps>;
  export default Image;
}
