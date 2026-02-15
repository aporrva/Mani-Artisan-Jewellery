import { Gift, Heart, Package, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GiftSectionProps {
  onShopGifts: () => void;
}

export function GiftSection({ onShopGifts }: GiftSectionProps) {
  const occasions = [
    { name: "Birthdays", icon: Gift },
    { name: "Anniversaries", icon: Heart },
    { name: "Festivals", icon: Sparkles },
    { name: "Surprises", icon: Package },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f7e7dc] to-[#faf8f5]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block bg-[#d4a574]/10 text-[#d4a574] px-4 py-2 rounded-full text-sm mb-6">
              Perfect Gift Ideas
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2c2420] mb-6">
              Gifts That Sparkle
              <br />
              <span className="text-[#d4a574]">Hearts & Memories</span>
            </h2>
            <p className="text-[#6b5d54] text-lg mb-8 leading-relaxed">
              Make every moment special with our handcrafted jewellery. Each
              piece comes in premium gift packaging, ready to delight your loved
              ones.
            </p>

            {/* Occasions */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {occasions.map((occasion) => (
                <Card
                  key={occasion.name}
                  className="p-4 border-[#d4a574]/20 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f7e7dc] flex items-center justify-center">
                      <occasion.icon className="w-5 h-5 text-[#d4a574]" />
                    </div>
                    <span className="text-[#2c2420]">{occasion.name}</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#d4a574] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="text-[#2c2420] mb-1">Premium Gift Packaging</h4>
                  <p className="text-sm text-[#6b5d54]">
                    Beautifully wrapped in elegant boxes with personalized gift
                    messages
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#d4a574] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="text-[#2c2420] mb-1">Express Delivery</h4>
                  <p className="text-sm text-[#6b5d54]">
                    Fast shipping options to ensure your gift arrives on time
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#d4a574] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="text-[#2c2420] mb-1">Customization Available</h4>
                  <p className="text-sm text-[#6b5d54]">
                    Add a personal touch with custom colors and designs
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              onClick={onShopGifts}
              className="bg-[#d4a574] hover:bg-[#c4956a] text-white px-8 py-6"
            >
              Shop Gift Collection
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761479258392-011cb2090063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwZ2lmdCUyMGJveCUyMGVsZWdhbnR8ZW58MXx8fHwxNzcwMzUzOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gift jewellery"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#d4a574] rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#f7e7dc] rounded-full opacity-50 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
