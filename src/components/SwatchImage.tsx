'use client';

import Image from 'next/image';

interface SwatchImageProps {
  src: string;
  alt: string;
}

const SwatchImage = ({ src, alt }: SwatchImageProps) => {
  return <Image src={src} alt={alt} width={32} height={32} className="rounded-full object-cover" />;
};

export default SwatchImage;
