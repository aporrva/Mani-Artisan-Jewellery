import { ShoppingBag, Heart, Menu, X, User } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Logo } from "./ui/logo";


interface HeaderProps {
  onNavigate: (page: string) => void;
  cartCount: number;
  wishlistCount?: number;
}

export function Header({ onNavigate, cartCount, wishlistCount = 0 }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#d4a574]/20 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex flex-col items-start group"
          >
            <div className="md:flex items-center gap-3   ">
              <Logo className="" />

              <div className="hidden md:flex flex-col ">
                <span className="font-serif text-2xl md:text-3xl text-[#2c2420] tracking-tight transition-colors group-hover:text-[#d4a574]">
                  Mani Artisan
                </span>
                <span className="text-xs md:text-sm text-[#6b5d54] tracking-widest uppercase">
                  Jewellery
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate("home")}
              className="text-[#2c2420] hover:text-[#d4a574] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("shop")}
              className="text-[#2c2420] hover:text-[#d4a574] transition-colors"
            >
              Shop
            </button>
            <button
              onClick={() => onNavigate("customize")}
              className="text-[#2c2420] hover:text-[#d4a574] transition-colors"
            >
              Customize
            </button>
            <button
              onClick={() => onNavigate("about")}
              className="text-[#2c2420] hover:text-[#d4a574] transition-colors"
            >
              About
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex relative hover:text-[#d4a574] hover:bg-[#f7e7dc]/50"
              onClick={() => onNavigate("auth")}
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex relative hover:text-[#d4a574] hover:bg-[#f7e7dc]/50"
              onClick={() => onNavigate("wishlist")}
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#d4a574] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:text-[#d4a574] hover:bg-[#f7e7dc]/50"
              onClick={() => onNavigate("cart")}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#d4a574] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-[#d4a574]/20 flex flex-col gap-3">
            <button
              onClick={() => {
                onNavigate("home");
                setMenuOpen(false);
              }}
              className="text-left py-2 text-[#2c2420] hover:text-[#d4a574] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate("shop");
                setMenuOpen(false);
              }}
              className="text-left py-2 text-[#2c2420] hover:text-[#d4a574] transition-colors"
            >
              Shop
            </button>
            <button
              onClick={() => {
                onNavigate("customize");
                setMenuOpen(false);
              }}
              className="text-left py-2 text-[#2c2420] hover:text-[#d4a574] transition-colors"
            >
              Customize
            </button>
            <button
              onClick={() => {
                onNavigate("about");
                setMenuOpen(false);
              }}
              className="text-left py-2 text-[#2c2420] hover:text-[#d4a574] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => {
                onNavigate("wishlist");
                setMenuOpen(false);
              }}
              className="text-left py-2 text-[#2c2420] hover:text-[#d4a574] transition-colors flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Wishlist
              {wishlistCount > 0 && (
                <span className="bg-[#d4a574] text-white text-xs px-2 py-0.5 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button
              onClick={() => {
                onNavigate("auth");
                setMenuOpen(false);
              }}
              className="text-left py-2 text-[#2c2420] hover:text-[#d4a574] transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Account
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}