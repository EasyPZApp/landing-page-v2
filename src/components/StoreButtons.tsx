// src/components/StoreButtons.tsx
'use client';

import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL = 'https://apps.apple.com/us/app/easypz/id6448388765';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.beelphegor91.easypz';

interface StoreButtonsProps {
  className?: string;
  animationClass?: string;
}

export default function StoreButtons({ className = '', animationClass = '' }: StoreButtonsProps) {
  return (
    <div className={`flex justify-center gap-4 ${className} ${animationClass}`}>
      <Link
        href={APP_STORE_URL}
        className="transform transition-transform active:scale-95"
      >
        <Image
          src="/images/store-ios.png"
          alt="Download on the App Store"
          width={156}
          height={52}
          priority
          className="w-[140px] h-auto" // Changed to fixed width and auto height
        />
      </Link>
      <Link
        href={PLAY_STORE_URL}
        className="transform transition-transform active:scale-95"
      >
        <Image
          src="/images/store-android.png"
          alt="Get it on Google Play"
          width={156}
          height={52}
          className="w-[140px] h-auto" // Changed to fixed width and auto height
        />
      </Link>
    </div>
  );
}