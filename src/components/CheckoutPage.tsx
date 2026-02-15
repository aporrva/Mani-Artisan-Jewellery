import { Product } from "./ProductCard";
import { Button } from "./ui/button";
import { Trash2, Minus, Plus, ArrowLeft, Lock, CreditCard, Smartphone } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface CartItem extends Product {
  quantity: number;
}

interface CheckoutPageProps {
  cartItems: CartItem[];
  onBack: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export function CheckoutPage({
  cartItems,
  onBack,
  onUpdateQuantity,
  onRemoveItem,
}: CheckoutPageProps) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 150;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#d4a574] flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-4xl">✓</span>
            </div>
            <h1 className="font-serif text-4xl text-[#2c2420] mb-4">
              Order Placed Successfully!
            </h1>
            <p className="text-[#6b5d54] mb-8">
              Thank you for your purchase. We'll send you a confirmation email
              shortly.
            </p>
            <Button
              onClick={onBack}
              className="bg-[#d4a574] hover:bg-[#c4956a] text-white"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="font-serif text-4xl text-[#2c2420] mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-[#6b5d54] mb-8">
              Add some beautiful jewellery to your cart to continue.
            </p>
            <Button
              onClick={onBack}
              className="bg-[#d4a574] hover:bg-[#c4956a] text-white"
            >
              Start Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] py-8">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 hover:text-[#d4a574]"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </Button>

        <h1 className="font-serif text-4xl text-[#2c2420] mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card
                key={item.id}
                className="p-6 border-[#d4a574]/20 bg-white"
              >
                <div className="flex gap-6">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-[#faf8f5]">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-lg text-[#2c2420]">{item.name}</h3>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#6b5d54] hover:text-destructive"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <p className="text-sm text-[#6b5d54] mb-4">
                      {item.category}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            onUpdateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="w-8 h-8 p-0"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 p-0"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <span className="text-lg text-[#d4a574]">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary & Checkout */}
          <div className="space-y-6">
            <Card className="p-6 border-[#d4a574]/20 bg-white sticky top-24">
              <h2 className="text-2xl text-[#2c2420] mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-[#6b5d54]">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-[#6b5d54]">
                  <span>Shipping</span>
                  <span>₹{shipping}</span>
                </div>
                <div className="border-t border-[#d4a574]/20 pt-3 flex justify-between text-xl text-[#2c2420]">
                  <span>Total</span>
                  <span className="text-[#d4a574]">₹{total}</span>
                </div>
              </div>

              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    placeholder="John Doe"
                    className="bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input
                    id="address"
                    required
                    placeholder="123 Street, City"
                    className="bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#d4a574] hover:bg-[#c4956a] text-white py-6"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Secure Checkout
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-[#d4a574]/20">
                <p className="text-sm text-[#6b5d54] mb-3">
                  We accept:
                </p>
                <div className="flex gap-3">
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#faf8f5] rounded-lg">
                    <CreditCard className="w-4 h-4 text-[#d4a574]" />
                    <span className="text-sm text-[#6b5d54]">Cards</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#faf8f5] rounded-lg">
                    <Smartphone className="w-4 h-4 text-[#d4a574]" />
                    <span className="text-sm text-[#6b5d54]">UPI</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-[#d4a574]/20 bg-white">
              <div className="space-y-3 text-sm text-[#6b5d54]">
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#d4a574] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Secure payment processing</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#d4a574] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Free returns within 30 days</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#d4a574] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span>Premium gift packaging included</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
