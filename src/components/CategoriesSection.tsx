import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

interface CategoriesSectionProps {
  onSelectCategory: (category: string) => void;
}

export function CategoriesSection({ onSelectCategory }: CategoriesSectionProps) {
  const categories: Category[] = [
    {
      id: "bracelets",
      name: "Bracelets",
      image:
        "https://images.unsplash.com/photo-1756792339453-bc4aa26fc0cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGJyYWNlbGV0JTIwYmVhZHMlMjBhcnRpc2FufGVufDF8fHx8MTc3MDM1MzkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      count: 24,
    },
    {
      id: "necklaces",
      name: "Necklaces",
      image:
        "https://images.unsplash.com/photo-1722410180670-b6d5a2e704fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kbWFkZSUyMGpld2VscnklMjBuZWNrbGFjZSUyMGJlYWRzfGVufDF8fHx8MTc3MDM1MzkyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      count: 18,
    },
    {
      id: "earrings",
      name: "Earrings",
      image:
        "https://images.unsplash.com/photo-1761479267943-2c984254807c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZWFycmluZ3MlMjBqZXdlbHJ5JTIwZmVtaW5pbmV8ZW58MXx8fHwxNzcwMzUzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      count: 32,
    },
    {
      id: "resin-art",
      name: "Resin Art Jewellery",
      image:
        "https://images.unsplash.com/photo-1766560360108-954ec9b4b88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpbiUyMGFydCUyMGpld2VscnklMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAzNTM5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      count: 15,
    },
    {
      id: "gift-sets",
      name: "Gift Sets",
      image:
        "https://images.unsplash.com/photo-1761479258392-011cb2090063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwZ2lmdCUyMGJveCUyMGVsZWdhbnR8ZW58MXx8fHwxNzcwMzUzOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      count: 12,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-[#2c2420] mb-4">
            Explore Our Collections
          </h2>
          <p className="text-[#6b5d54] text-lg max-w-2xl mx-auto">
            From delicate everyday pieces to statement jewellery, discover the
            perfect accessory for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group overflow-hidden border border-[#d4a574]/20 hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
              onClick={() => onSelectCategory(category.id)}
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-2xl mb-2">{category.name}</h3>
                  <p className="text-sm text-white/80 mb-4">
                    {category.count} pieces
                  </p>
                  <div className="flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                    <span>Shop Collection</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
