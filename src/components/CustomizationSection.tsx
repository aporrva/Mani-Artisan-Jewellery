import { Sparkles, Palette, Gem, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Card } from "./ui/card";
import { useState } from "react";

export function CustomizationSection() {
  const [formData, setFormData] = useState({
    jewelryType: "",
    material: "",
    color: "",
    occasion: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(
      "Thank you for your custom request! We'll get back to you within 24 hours."
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#faf8f5] to-[#f7e7dc]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#d4a574]/10 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#d4a574]" />
            </div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2c2420] mb-4">
            Create Your Custom Piece
          </h2>
          <p className="text-[#6b5d54] text-lg max-w-2xl mx-auto">
            Each piece is uniquely crafted to tell your story. Share your vision
            with us and we'll bring it to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Features */}
          <div className="space-y-6">
            <Card className="p-6 border-[#d4a574]/20 bg-white/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f7e7dc] flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-[#2c2420]">
                    Personalized Design
                  </h3>
                  <p className="text-sm text-[#6b5d54]">
                    Choose your preferred colors, materials, and design elements
                    to create a truly one-of-a-kind piece.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-[#d4a574]/20 bg-white/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f7e7dc] flex items-center justify-center flex-shrink-0">
                  <Gem className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-[#2c2420]">
                    Premium Materials
                  </h3>
                  <p className="text-sm text-[#6b5d54]">
                    Select from high-quality beads, resin, gemstones, and
                    metals to match your style and occasion.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-[#d4a574]/20 bg-white/80 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f7e7dc] flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-[#d4a574]" />
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-[#2c2420]">
                    Expert Consultation
                  </h3>
                  <p className="text-sm text-[#6b5d54]">
                    Our artisans work closely with you throughout the process to
                    ensure your vision comes to life perfectly.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Form */}
          <Card className="p-8 border-[#d4a574]/20 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="jewelryType">Type of Jewellery</Label>
                <Select
                  value={formData.jewelryType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, jewelryType: value })
                  }
                >
                  <SelectTrigger id="jewelryType" className="bg-white">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bracelet">Bracelet</SelectItem>
                    <SelectItem value="necklace">Necklace</SelectItem>
                    <SelectItem value="earrings">Earrings</SelectItem>
                    <SelectItem value="ring">Ring</SelectItem>
                    <SelectItem value="set">Jewellery Set</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="material">Material Preference</Label>
                <Select
                  value={formData.material}
                  onValueChange={(value) =>
                    setFormData({ ...formData, material: value })
                  }
                >
                  <SelectTrigger id="material" className="bg-white">
                    <SelectValue placeholder="Select material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beads">Beads</SelectItem>
                    <SelectItem value="resin">Resin Art</SelectItem>
                    <SelectItem value="gemstones">Gemstones</SelectItem>
                    <SelectItem value="mixed">Mixed Materials</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="color">Color Preference</Label>
                <Input
                  id="color"
                  placeholder="e.g., Rose gold, Turquoise, Multi-color"
                  value={formData.color}
                  onChange={(e) =>
                    setFormData({ ...formData, color: e.target.value })
                  }
                  className="bg-white"
                />
              </div>

              <div>
                <Label htmlFor="occasion">Occasion</Label>
                <Select
                  value={formData.occasion}
                  onValueChange={(value) =>
                    setFormData({ ...formData, occasion: value })
                  }
                >
                  <SelectTrigger id="occasion" className="bg-white">
                    <SelectValue placeholder="Select occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily Wear</SelectItem>
                    <SelectItem value="wedding">Wedding/Bridal</SelectItem>
                    <SelectItem value="gift">Gift</SelectItem>
                    <SelectItem value="party">Party/Event</SelectItem>
                    <SelectItem value="festival">Festival</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="notes">Special Instructions</Label>
                <Textarea
                  id="notes"
                  placeholder="Tell us about your vision, preferences, or any specific requirements..."
                  rows={4}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="bg-white resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#d4a574] hover:bg-[#c4956a] text-white py-6"
              >
                Create Your Custom Piece
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
