
import React from 'react';
import { miyoConfig } from '../config/miyoConfig';

interface MiyoImageProps {
  className?: string;
  alt?: string;
  url?: string;
}

const MiyoImage: React.FC<MiyoImageProps> = ({ className, alt = "Miyo", url }) => {
  console.log("🚀 ~ MiyoImage ~ url:", url)
  const hasUrl = miyoConfig.miyoPhotoUrl && miyoConfig.miyoPhotoUrl.length > 5;

  if (!hasUrl) {
    return (
      <div className={`flex items-center justify-center bg-yellow-400 text-center p-4 border-4 border-black font-bold text-sm ${className}`}>
        {miyoConfig.placeholderText}
      </div>
    );
  }

  return (
    <img
      src={url || miyoConfig.miyoPhotoUrl}
      alt={alt}
      className={`object-cover border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${className}`}
      onError={(e) => {
        (e.target as HTMLImageElement).src = miyoConfig.fallbackImageUrl;
      }}
    />
  );
};

export default MiyoImage;
