import { Product } from "./ProductCard";
import { Button } from "./ui/button";
import { ArrowLeft, Heart, ShoppingCart, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";

interface WishlistPageProps {
  wishlistItems: Product[];
  onBack: () => void;
  onRemoveFromWishlist: (productId: any) => void;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function WishlistPage({
  wishlistItems,
  onBack,
  onRemoveFromWishlist,
  onAddToCart,
  onViewDetails,
}: WishlistPageProps) {
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
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#d4a574] to-[#c4956a] mb-6">
            <Heart className="w-10 h-10 text-white fill-white" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-[#2c2420] mb-4">
            Your Wishlist
          </h1>
          <p className="text-[#6b5d54] text-lg">
            {wishlistItems.length > 0
              ? `${wishlistItems.length} ${
                  wishlistItems.length === 1 ? "piece" : "pieces"
                } saved for later`
              : "Save your favorite pieces here"}
          </p>
        </div>

        {/* Empty State */}
        {wishlistItems.length === 0 && (
          <Card className="max-w-2xl mx-auto p-12 text-center bg-white border-[#d4a574]/20">
            <div className="w-24 h-24 rounded-full bg-[#f7e7dc] mx-auto mb-6 flex items-center justify-center">
              <Heart className="w-12 h-12 text-[#d4a574]" />
            </div>
            <h2 className="font-serif text-3xl text-[#2c2420] mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-[#6b5d54] mb-8 text-lg">
              Save your favorite handcrafted pieces here and we'll keep them
              safe for you.
            </p>
            <Button
              size="lg"
              onClick={onBack}
              className="bg-[#d4a574] hover:bg-[#c4956a] text-white px-8"
            >
              Explore Collections
            </Button>
          </Card>
        )}

        {/* Wishlist Grid */}
        {wishlistItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border border-[#d4a574]/20 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <button
                  onClick={() => onViewDetails(product)}
                  className="relative overflow-hidden aspect-square w-full"
                >
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {product.customizable && (
                    <div className="absolute top-3 left-3 bg-[#d4a574] text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Customizable</span>
                    </div>
                  )}
                </button>

                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => onRemoveFromWishlist(product.id)}
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center hover:bg-white shadow-lg z-10 group/heart"
                  aria-label="Remove from wishlist"
                >
                  <Heart className="w-5 h-5 text-[#d4a574] fill-[#d4a574] group-hover/heart:scale-110 transition-transform" />
                </button>

                <div className="p-5">
                  <div className="mb-2">
                    <span className="text-xs text-[#6b5d54] uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                  <button
                    onClick={() => onViewDetails(product)}
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
                    <span className="text-xl text-[#d4a574]">
                      ₹{product.price}
                    </span>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onViewDetails(product)}
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
