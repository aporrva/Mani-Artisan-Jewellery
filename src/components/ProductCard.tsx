import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  customizable: boolean;
  materials: string[];
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isInWishlist: boolean;
}

export function ProductCard({
  product,
  onViewDetails,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
}: ProductCardProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleViewProduct = () => {
    // Scroll to top for a fresh page experience
    window.scrollTo({ top: 0, behavior: "smooth" });
    onViewDetails(product);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAnimating(true);
    onToggleWishlist(product);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <Card className="group overflow-hidden border border-[#d4a574]/20 hover:shadow-xl transition-all duration-300 bg-white">
      <button
        onClick={handleViewProduct}
        className="relative overflow-hidden aspect-square w-full"
      >
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {product.customizable && (
          <div className="absolute top-3 left-3 bg-[#d4a574] text-white px-3 py-1 rounded-full text-xs">
            Customizable
          </div>
        )}
      </button>
      <button
        className={`absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white shadow-lg z-10 ${
          isAnimating ? "animate-[ping_0.6s_ease-in-out]" : ""
        }`}
        onClick={handleWishlistClick}
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart
          className={`w-5 h-5 transition-all duration-300 ${
            isInWishlist
              ? "text-[#d4a574] fill-[#d4a574] scale-110"
              : "text-[#d4a574]"
          } ${isAnimating ? "scale-125" : ""}`}
        />
      </button>
      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs text-[#6b5d54] uppercase tracking-wider">
            {product.category}
          </span>
        </div>
        <button
          onClick={handleViewProduct}
          className="text-left w-full"
        >
          <h3 className="font-serif text-lg mb-2 text-[#2c2420] group-hover:text-[#d4a574] transition-colors">
            {product.name}
          </h3>
        </button>
        <p className="text-sm text-[#6b5d54] mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl text-[#d4a574]">₹{product.price}</span>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleViewProduct}
              className="border-[#d4a574] text-[#2c2420] hover:bg-[#d4a574] hover:text-white transition-colors"
            >
              View
            </Button>
            <Button
              size="sm"
              onClick={() => onAddToCart(product)}
              className="bg-[#d4a574] hover:bg-[#c4956a] text-white"
            >
              <ShoppingCart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}