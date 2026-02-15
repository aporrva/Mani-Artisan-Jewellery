import { Heart, Palette, Sparkles } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766524555120-9c2e886c72f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjB3b3Jrc2hvcCUyMGNyYWZ0aW5nfGVufDF8fHx8MTc3MDM1MzkyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Jewellery crafting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#d4a574] rounded-full opacity-20 blur-3xl" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-block bg-[#f7e7dc] text-[#d4a574] px-4 py-2 rounded-full text-sm mb-6">
              Our Story
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2c2420] mb-6">
              Crafting Beauty,
              <br />
              <span className="text-[#d4a574]">One Piece at a Time</span>
            </h2>
            <p className="text-[#6b5d54] text-lg mb-6 leading-relaxed">
              At Mani Artisan Jewellery, we believe that every piece of jewellery
              tells a story. Founded with a passion for handcrafted excellence, we
              specialize in creating unique, personalized pieces that celebrate
              your individuality.
            </p>
            <p className="text-[#6b5d54] mb-8 leading-relaxed">
              Our artisans meticulously craft each piece using premium materials -
              from delicate beads to stunning resin art - ensuring that every
              creation is not just an accessory, but a work of art that reflects
              your personal style.
            </p>

            <div className="space-y-4">
              <Card className="p-5 border-[#d4a574]/20 bg-[#faf8f5]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4a574]/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-[#d4a574]" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-[#2c2420]">
                      Handcrafted with Love
                    </h3>
                    <p className="text-sm text-[#6b5d54]">
                      Every piece is created with passion and attention to detail
                      by our skilled artisans.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 border-[#d4a574]/20 bg-[#faf8f5]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4a574]/10 flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-[#d4a574]" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-[#2c2420]">
                      Personalization
                    </h3>
                    <p className="text-sm text-[#6b5d54]">
                      We work closely with you to create custom pieces that match
                      your vision perfectly.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-5 border-[#d4a574]/20 bg-[#faf8f5]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4a574]/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-[#d4a574]" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1 text-[#2c2420]">
                      Unique Designs
                    </h3>
                    <p className="text-sm text-[#6b5d54]">
                      Each piece is one-of-a-kind, ensuring you own something
                      truly special and distinctive.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
