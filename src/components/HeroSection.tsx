import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSectionProps {
  onShopNow: () => void;
  onCustomize: () => void;
}

export function HeroSection({ onShopNow, onCustomize }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1722410180670-b6d5a2e704fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kbWFkZSUyMGpld2VscnklMjBuZWNrbGFjZSUyMGJlYWRzfGVufDF8fHx8MTc3MDM1MzkyNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury handmade jewellery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f5]/95 via-[#faf8f5]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-[#d4a574]" />
            <span className="text-[#6b5d54] uppercase tracking-widest text-sm">
              Handcrafted Excellence
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-[#2c2420] mb-6 leading-tight">
            Mani Artisan
            <br />
            <span className="text-[#d4a574]">Jewellery</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#6b5d54] mb-4">
            Handcrafted with Love,
          </p>
          <p className="text-xl md:text-2xl text-[#6b5d54] mb-8">
            Customized for You
          </p>

          <p className="text-[#6b5d54] mb-10 max-w-lg leading-relaxed">
            Discover our exquisite collection of handmade jewellery, crafted with
            premium beads and resin art. Each piece tells a unique story,
            designed to celebrate your individuality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={onShopNow}
              className="bg-[#d4a574] hover:bg-[#c4956a] text-white px-8 py-6 text-lg group"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onCustomize}
              className="border-2 border-[#d4a574] text-[#2c2420] hover:bg-[#d4a574] hover:text-white px-8 py-6 text-lg"
            >
              Customize Your Jewellery
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8 text-sm text-[#6b5d54]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#d4a574]" />
              <span>100% Handmade</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#d4a574]" />
              <span>Custom Designs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#d4a574]" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-[#d4a574]/10 to-transparent rounded-full blur-3xl" />
    </section>
  );
}
