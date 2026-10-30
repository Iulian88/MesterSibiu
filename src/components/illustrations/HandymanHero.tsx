import Image from "next/image";

type HandymanHeroProps = {
  className?: string;
};

/**
 * Approved hero illustration (raster) — not SVG.
 * Source: public/images/handyman-hero.png (1536×1024)
 */
export function HandymanHero({ className = "" }: HandymanHeroProps) {
  return (
    <div className={`relative mx-auto w-full ${className}`}>
      <Image
        src="/images/handyman-hero.png"
        alt="Meșter prietenos în salopetă verde, cu bormașină și degetul mare sus"
        width={1536}
        height={1024}
        priority
        sizes="(max-width: 640px) 88vw, (max-width: 1024px) 28rem, 36rem"
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
