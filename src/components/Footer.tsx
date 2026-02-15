import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2c2420] text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-2 text-[#d4a574]">
              Mani Artisan
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Handcrafted with Love, Customized for You
            </p>
            <div className="flex gap-3">
              <button className="w-9 h-9 rounded-full bg-[#d4a574] flex items-center justify-center hover:bg-[#c4956a] transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </button>
              <button className="w-9 h-9 rounded-full bg-[#d4a574] flex items-center justify-center hover:bg-[#c4956a] transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </button>
              <button className="w-9 h-9 rounded-full bg-[#d4a574] flex items-center justify-center hover:bg-[#c4956a] transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-[#d4a574]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button className="hover:text-[#d4a574] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button className="hover:text-[#d4a574] transition-colors">
                  Shop Collection
                </button>
              </li>
              <li>
                <button className="hover:text-[#d4a574] transition-colors">
                  Custom Orders
                </button>
              </li>
              <li>
                <button className="hover:text-[#d4a574] transition-colors">
                  Gift Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg mb-4 text-[#d4a574]">Customer Care</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button className="hover:text-[#d4a574] transition-colors">
                  Shipping & Delivery
                </button>
              </li>
              <li>
                <button className="hover:text-[#d4a574] transition-colors">
                  Returns & Exchanges
                </button>
              </li>
              <li>
                <button className="hover:text-[#d4a574] transition-colors">
                  Care Instructions
                </button>
              </li>
              <li>
                <button className="hover:text-[#d4a574] transition-colors">
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4 text-[#d4a574]">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 text-[#d4a574] flex-shrink-0" />
                <span>hello@maniartisan.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 text-[#d4a574] flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-[#d4a574] flex-shrink-0" />
                <span>123 Artisan Street, Craft City, CC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d4a574]/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 Mani Artisan Jewellery. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-[#d4a574] transition-colors">
              Terms & Conditions
            </button>
            <button className="hover:text-[#d4a574] transition-colors">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
