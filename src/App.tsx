import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { CategoriesSection } from "./components/CategoriesSection";
import { CustomizationSection } from "./components/CustomizationSection";
import { GiftSection } from "./components/GiftSection";
import { AboutSection } from "./components/AboutSection";
import { ProductCard, Product } from "./components/ProductCard";
import { ProductDetailsPage } from "./components/ProductDetailsPage";
import { CheckoutPage } from "./components/CheckoutPage";
import { WishlistPage } from "./components/WishlistPage";
import { AuthPage } from "./components/AuthPage";
import { products } from "./data/products";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

type Page = "home" | "shop" | "customize" | "about" | "product" | "cart" | "wishlist" | "auth";

interface CartItem extends Product {
  quantity: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  const handleNavigate = (page: string) => {
    if (page === "shop") {
      setCurrentPage("shop");
      setSelectedCategory(null);
    } else if (page === "home") {
      setCurrentPage("home");
      setSelectedCategory(null);
      setSelectedProduct(null);
    } else if (page === "customize") {
      setCurrentPage("customize");
    } else if (page === "about") {
      setCurrentPage("about");
    } else if (page === "cart") {
      setCurrentPage("cart");
    } else if (page === "wishlist") {
      setCurrentPage("wishlist");
    } else if (page === "auth") {
      setCurrentPage("auth");
    }
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage("shop");
    // Scroll to products section
    setTimeout(() => {
      window.scrollTo({ top: 600, behavior: "smooth" });
    }, 100);
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        toast.success(`Updated ${product.name} quantity in cart!`);
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      toast.success(`${product.name} added to cart!`);
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    toast.success("Item removed from cart");
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistItems((prev) => {
      const isInWishlist = prev.some((item) => item.id === product.id);
      if (isInWishlist) {
        toast.success(`${product.name} removed from wishlist`, {
          icon: "💔",
        });
        return prev.filter((item) => item.id !== product.id);
      } else {
        toast.success(`${product.name} added to wishlist`, {
          icon: "❤️",
        });
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  const filteredProducts = selectedCategory
    ? products.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase() ||
              (selectedCategory === "resin-art" && p.category === "Resin Art") ||
              (selectedCategory === "gift-sets" && p.category === "Gift Sets")
      )
    : products;

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onNavigate={handleNavigate} 
        cartCount={cartCount} 
        wishlistCount={wishlistItems.length}
      />

      <main className="flex-1">
        {currentPage === "home" && (
          <>
            <HeroSection
              onShopNow={() => handleNavigate("shop")}
              onCustomize={() => handleNavigate("customize")}
            />
            <CategoriesSection onSelectCategory={handleSelectCategory} />
            <section className="py-20 bg-[#faf8f5]">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="font-serif text-4xl md:text-5xl text-[#2c2420] mb-4">
                    Featured Collection
                  </h2>
                  <p className="text-[#6b5d54] text-lg">
                    Handpicked pieces that celebrate your unique style
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.slice(0, 4).map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={handleViewDetails}
                      onAddToCart={handleAddToCart}
                      onToggleWishlist={handleToggleWishlist}
                      isInWishlist={isInWishlist(product.id)}
                    />
                  ))}
                </div>
              </div>
            </section>
            <CustomizationSection />
            <GiftSection onShopGifts={() => handleSelectCategory("gift-sets")} />
            <AboutSection />
          </>
        )}

        {currentPage === "shop" && (
          <section className="py-12 bg-[#faf8f5] min-h-screen">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h1 className="font-serif text-4xl md:text-5xl text-[#2c2420] mb-4">
                  {selectedCategory
                    ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace("-", " ")}`
                    : "All Collections"}
                </h1>
                <p className="text-[#6b5d54]">
                  {filteredProducts.length} pieces available
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={handleViewDetails}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                    isInWishlist={isInWishlist(product.id)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {currentPage === "customize" && (
          <>
            <div className="py-12 bg-[#faf8f5]">
              <div className="container mx-auto px-4 text-center">
                <h1 className="font-serif text-4xl md:text-5xl text-[#2c2420] mb-4">
                  Custom Jewellery
                </h1>
                <p className="text-[#6b5d54] text-lg max-w-2xl mx-auto">
                  Let's create something uniquely yours
                </p>
              </div>
            </div>
            <CustomizationSection />
          </>
        )}

        {currentPage === "about" && (
          <>
            <div className="py-12 bg-[#faf8f5]">
              <div className="container mx-auto px-4 text-center">
                <h1 className="font-serif text-4xl md:text-5xl text-[#2c2420] mb-4">
                  About Mani Artisan
                </h1>
                <p className="text-[#6b5d54] text-lg max-w-2xl mx-auto">
                  Discover the story behind our handcrafted creations
                </p>
              </div>
            </div>
            <AboutSection />
          </>
        )}

        {currentPage === "product" && selectedProduct && (
          <ProductDetailsPage
            product={selectedProduct}
            onBack={() => handleNavigate("shop")}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            isInWishlist={isInWishlist(selectedProduct.id)}
          />
        )}

        {currentPage === "cart" && (
          <CheckoutPage
            cartItems={cartItems}
            onBack={() => handleNavigate("shop")}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
        )}

        {currentPage === "wishlist" && (
          <WishlistPage
            wishlistItems={wishlistItems}
            onBack={() => handleNavigate("shop")}
            onAddToCart={handleAddToCart}
            onRemoveFromWishlist={handleToggleWishlist}
            onViewDetails={handleViewDetails}
          />
        )}

        {currentPage === "auth" && (
          <AuthPage
            onBack={() => handleNavigate("home")}
          />
        )}
      </main>

      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}