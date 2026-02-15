import { Product } from "./ProductCard";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  Heart,
  ShoppingCart,
  Sparkles,
  Package,
  Shield,
  Truck,
  Star,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { useState } from "react";

interface ProductDetailsPageProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isInWishlist: boolean;
}

export function ProductDetailsPage({
  product,
  onBack,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
}: ProductDetailsPageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlistAnimating, setIsWishlistAnimating] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlistAnimating(true);
    onToggleWishlist(product);
    setTimeout(() => setIsWishlistAnimating(false), 600);
  };

  // Product image gallery - 4 different views
  const productImages = [
    {
      url: product.image,
      label: "Front View",
    },
    {
      url: "https://images.unsplash.com/photo-1770062422860-92c107ef02cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwc3R1ZGlvJTIwcGhvdG9ncmFwaHklMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwNDQwNTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      label: "Side View",
    },
    {
      url: "https://images.unsplash.com/photo-1762539297259-2bb6eea568e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwY2xvc2UtdXAlMjBkZXRhaWwlMjBiZWFkcyUyMHRleHR1cmV8ZW58MXx8fHwxNzcwNDQwNTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      label: "Detail Close-up",
    },
    {
      url: "https://images.unsplash.com/photo-1590455209730-25a477555e17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlYXJpbmclMjBlbGVnYW50JTIwbmVja2xhY2UlMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzcwNDQwNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      label: "Lifestyle View",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8f5] via-white to-[#f7e7dc]">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-[#d4a574]/20 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="hover:text-[#d4a574] hover:bg-[#f7e7dc]/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collections
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Product Gallery Section */}
        <div className="mb-16">
          {/* Main Image */}
          <div className="mb-6">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#faf8f5] to-white">
              <ImageWithFallback
                src={productImages[selectedImageIndex].url}
                alt={`${product.name} - ${productImages[selectedImageIndex].label}`}
                className="w-full h-full object-cover"
              />
              {/* Image Overlay Info */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm text-[#6b5d54]">
                  {productImages[selectedImageIndex].label}
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 gap-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${
                  selectedImageIndex === index
                    ? "ring-4 ring-[#d4a574] shadow-lg scale-105"
                    : "ring-2 ring-[#d4a574]/20 hover:ring-[#d4a574]/50 hover:scale-102"
                }`}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={`${product.name} - ${image.label}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Category */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-[#6b5d54] uppercase tracking-widest">
                  {product.category}
                </span>
                {product.customizable && (
                  <div className="inline-flex items-center gap-2 bg-[#f7e7dc] text-[#d4a574] px-3 py-1 rounded-full text-xs">
                    <Sparkles className="w-3 h-3" />
                    <span>Customizable</span>
                  </div>
                )}
              </div>
              <h1 className="font-serif text-5xl md:text-6xl text-[#2c2420] mb-4 leading-tight">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-[#d4a574] text-[#d4a574]"
                    />
                  ))}
                </div>
                <span className="text-sm text-[#6b5d54]">(124 reviews)</span>
              </div>

              <p className="text-3xl text-[#d4a574] mb-6">₹{product.price}</p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl text-[#2c2420] mb-4">About This Piece</h2>
              <p className="text-[#6b5d54] text-lg leading-relaxed mb-4">
                {product.description}
              </p>
              <p className="text-[#6b5d54] leading-relaxed">
                Each piece from Mani Artisan Jewellery is meticulously
                handcrafted by our skilled artisans, ensuring that every detail
                reflects the highest standards of quality and craftsmanship. This
                unique design celebrates the beauty of handmade artistry.
              </p>
            </div>

            {/* Materials */}
            <div>
              <h2 className="text-2xl text-[#2c2420] mb-4">
                Premium Materials
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.materials.map((material, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#d4a574]/20"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#d4a574]" />
                    <span className="text-[#6b5d54]">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Care Instructions */}
            <Card className="p-6 bg-gradient-to-br from-[#f7e7dc]/30 to-white border-[#d4a574]/20">
              <h3 className="text-xl text-[#2c2420] mb-4">Care Instructions</h3>
              <ul className="space-y-2 text-[#6b5d54]">
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a574] mt-1">•</span>
                  <span>Store in a cool, dry place away from direct sunlight</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a574] mt-1">•</span>
                  <span>Clean gently with a soft, dry cloth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a574] mt-1">•</span>
                  <span>
                    Avoid contact with water, perfumes, and harsh chemicals
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#d4a574] mt-1">•</span>
                  <span>Remove before bathing or swimming</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Sidebar - Purchase */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="p-6 bg-white border-[#d4a574]/20 shadow-xl">
                <h3 className="text-xl text-[#2c2420] mb-6">
                  Add to Your Collection
                </h3>

                {/* Actions */}
                <div className="space-y-3 mb-6">
                  <Button
                    size="lg"
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-[#d4a574] hover:bg-[#c4956a] text-white py-6 text-lg"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>

                  <Button
                    size="lg"
                    className="w-full bg-[#2c2420] hover:bg-[#1c1410] text-white py-6 text-lg"
                  >
                    Buy Now
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className={`w-full border-2 ${
                      isInWishlist 
                        ? "border-[#d4a574] bg-[#f7e7dc] text-[#2c2420]" 
                        : "border-[#d4a574] text-[#2c2420]"
                    } hover:bg-[#f7e7dc]`}
                    onClick={handleWishlistClick}
                    disabled={isWishlistAnimating}
                  >
                    <Heart
                      className={`w-5 h-5 mr-2 transition-all duration-300 ${
                        isInWishlist ? "fill-[#d4a574] text-[#d4a574]" : ""
                      }`}
                      style={
                        isWishlistAnimating
                          ? { animation: "heartBeat 0.6s" }
                          : {}
                      }
                    />
                    {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                  </Button>
                </div>

                {/* Features */}
                <div className="space-y-4 pt-6 border-t border-[#d4a574]/20">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f7e7dc] flex items-center justify-center flex-shrink-0">
                      <Truck className="w-5 h-5 text-[#d4a574]" />
                    </div>
                    <div>
                      <h4 className="text-[#2c2420] mb-1">Free Shipping</h4>
                      <p className="text-sm text-[#6b5d54]">
                        On orders above ₹999
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f7e7dc] flex items-center justify-center flex-shrink-0">
                      <Package className="w-5 h-5 text-[#d4a574]" />
                    </div>
                    <div>
                      <h4 className="text-[#2c2420] mb-1">Gift Packaging</h4>
                      <p className="text-sm text-[#6b5d54]">
                        Complimentary premium box
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f7e7dc] flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-[#d4a574]" />
                    </div>
                    <div>
                      <h4 className="text-[#2c2420] mb-1">30-Day Returns</h4>
                      <p className="text-sm text-[#6b5d54]">
                        Hassle-free returns policy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#f7e7dc] flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-[#d4a574]" />
                    </div>
                    <div>
                      <h4 className="text-[#2c2420] mb-1">Handcrafted</h4>
                      <p className="text-sm text-[#6b5d54]">
                        Made with love by artisans
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Customization CTA */}
              {product.customizable && (
                <Card className="p-6 bg-gradient-to-br from-[#d4a574] to-[#c4956a] text-white border-none shadow-xl">
                  <div className="flex items-start gap-3 mb-4">
                    <Sparkles className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl mb-2">Want it Personalized?</h3>
                      <p className="text-white/90 text-sm">
                        Customize this piece with your choice of colors,
                        materials, and design elements.
                      </p>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-white text-[#d4a574] hover:bg-white/90"
                  >
                    Request Custom Design
                  </Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}