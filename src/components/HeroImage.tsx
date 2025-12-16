import image_b58aa2433a79905ec429da96e8c0b31c8d701cfa from 'figma:asset/b58aa2433a79905ec429da96e8c0b31c8d701cfa.png';
import image_1e4b153e51bec71a805ac0c7aed90e19b7a460df from 'figma:asset/1e4b153e51bec71a805ac0c7aed90e19b7a460df.png';
import image_5df044cbb5730e111655396c568ed13c29bca7bd from 'figma:asset/5df044cbb5730e111655396c568ed13c29bca7bd.png';
import image_9c35d97c8a2cae51abefd88c1b6eff8021fb10be from 'figma:asset/9c35d97c8a2cae51abefd88c1b6eff8021fb10be.png';
import image_9c35d97c8a2cae51abefd88c1b6eff8021fb10be from 'figma:asset/9c35d97c8a2cae51abefd88c1b6eff8021fb10be.png';
import image_9c35d97c8a2cae51abefd88c1b6eff8021fb10be from 'figma:asset/9c35d97c8a2cae51abefd88c1b6eff8021fb10be.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroImage() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#7C3AED] via-[#6D28D9] to-[#5B21B6] items-center justify-center relative overflow-hidden p-[0px]">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 w-full% h-full">
        <ImageWithFallback
          src={image_b58aa2433a79905ec429da96e8c0b31c8d701cfa}
          alt="Emissary Dashboard"
          className="w-full h-full object-cover p-[0px]"
        />
      </div>
    </div>
  );
}