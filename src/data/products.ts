import { Product } from "../components/ProductCard";

export const products: Product[] = [
  // Bracelets
  {
    id: "b1",
    name: "Aurora Beaded Bracelet",
    category: "Bracelets",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1756792339453-bc4aa26fc0cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGJyYWNlbGV0JTIwYmVhZHMlMjBhcnRpc2FufGVufDF8fHx8MTc3MDM1MzkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Elegant beaded bracelet featuring premium quality beads in soft pastel tones",
    customizable: true,
    materials: ["Czech glass beads", "Gold-plated clasp", "Elastic cord"],
  },
  {
    id: "b2",
    name: "Crystal Charm Bracelet",
    category: "Bracelets",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1756792339453-bc4aa26fc0cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGJyYWNlbGV0JTIwYmVhZHMlMjBhcnRpc2FufGVufDF8fHx8MTc3MDM1MzkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Delicate crystal bracelet with adjustable chain for perfect fit",
    customizable: true,
    materials: ["Swarovski crystals", "Sterling silver", "Adjustable chain"],
  },
  {
    id: "b3",
    name: "Bohemian Stone Bracelet",
    category: "Bracelets",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1756792339453-bc4aa26fc0cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGJyYWNlbGV0JTIwYmVhZHMlMjBhcnRpc2FufGVufDF8fHx8MTc3MDM1MzkyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Natural stone bracelet perfect for everyday bohemian style",
    customizable: false,
    materials: ["Natural gemstones", "Brass accents", "Cotton cord"],
  },

  // Necklaces
  {
    id: "n1",
    name: "Pearl Pendant Necklace",
    category: "Necklaces",
    price: 2499,
    image:
      "https://images.unsplash.com/photo-1722410180670-b6d5a2e704fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kbWFkZSUyMGpld2VscnklMjBuZWNrbGFjZSUyMGJlYWRzfGVufDF8fHx8MTc3MDM1MzkyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Elegant pearl pendant on delicate gold chain, perfect for special occasions",
    customizable: true,
    materials: ["Freshwater pearls", "18k gold plated", "Lobster clasp"],
  },
  {
    id: "n2",
    name: "Beaded Statement Necklace",
    category: "Necklaces",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1722410180670-b6d5a2e704fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kbWFkZSUyMGpld2VscnklMjBuZWNrbGFjZSUyMGJlYWRzfGVufDF8fHx8MTc3MDM1MzkyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    description:
      "Bold multi-strand beaded necklace that makes a statement",
    customizable: true,
    materials: ["Mixed beads", "Silk thread", "Gold-plated findings"],
  },
  {
    id: "n3",
    name: "Layered Chain Necklace",
    category: "Necklaces",
    price: 1699,
    image:
      "https://images.unsplash.com/photo-1722410180670-b6d5a2e704fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBoYW5kbWFkZSUyMGpld2VscnklMjBuZWNrbGFjZSUyMGJlYWRzfGVufDF8fHx8MTc3MDM1MzkyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Trendy layered necklace with delicate chains and charms",
    customizable: false,
    materials: ["Sterling silver", "Gold vermeil", "Cubic zirconia"],
  },

  // Earrings
  {
    id: "e1",
    name: "Drop Crystal Earrings",
    category: "Earrings",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1761479267943-2c984254807c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZWFycmluZ3MlMjBqZXdlbHJ5JTIwZmVtaW5pbmV8ZW58MXx8fHwxNzcwMzUzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Elegant crystal drop earrings that catch the light beautifully",
    customizable: true,
    materials: ["Swarovski crystals", "Gold-plated hooks", "Hypoallergenic"],
  },
  {
    id: "e2",
    name: "Hoop Beaded Earrings",
    category: "Earrings",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1761479267943-2c984254807c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZWFycmluZ3MlMjBqZXdlbHJ5JTIwZmVtaW5pbmV8ZW58MXx8fHwxNzcwMzUzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Contemporary hoop earrings with colorful beads",
    customizable: true,
    materials: ["Glass beads", "Brass hoops", "Surgical steel posts"],
  },
  {
    id: "e3",
    name: "Pearl Stud Earrings",
    category: "Earrings",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1761479267943-2c984254807c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZWFycmluZ3MlMjBqZXdlbHJ5JTIwZmVtaW5pbmV8ZW58MXx8fHwxNzcwMzUzOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Classic pearl studs for everyday elegance",
    customizable: false,
    materials: ["Freshwater pearls", "Sterling silver", "Butterfly backs"],
  },

  // Resin Art
  {
    id: "r1",
    name: "Ocean Wave Resin Pendant",
    category: "Resin Art",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1766560360108-954ec9b4b88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpbiUyMGFydCUyMGpld2VscnklMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAzNTM5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Stunning ocean-inspired resin art pendant with blue swirls",
    customizable: true,
    materials: ["Epoxy resin", "Mica powder", "Gold-plated chain"],
  },
  {
    id: "r2",
    name: "Floral Resin Ring",
    category: "Resin Art",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1766560360108-954ec9b4b88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpbiUyMGFydCUyMGpld2VscnklMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAzNTM5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Delicate ring with real dried flowers preserved in clear resin",
    customizable: true,
    materials: ["Resin", "Dried flowers", "Adjustable band"],
  },
  {
    id: "r3",
    name: "Galaxy Resin Earrings",
    category: "Resin Art",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1766560360108-954ec9b4b88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpbiUyMGFydCUyMGpld2VscnklMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAzNTM5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Cosmic galaxy-themed resin earrings with glitter accents",
    customizable: true,
    materials: ["Epoxy resin", "Glitter", "Hypoallergenic hooks"],
  },

  // Gift Sets
  {
    id: "g1",
    name: "Romantic Gift Set",
    category: "Gift Sets",
    price: 3499,
    image:
      "https://images.unsplash.com/photo-1761479258392-011cb2090063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwZ2lmdCUyMGJveCUyMGVsZWdhbnR8ZW58MXx8fHwxNzcwMzUzOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Complete set including necklace, earrings, and bracelet",
    customizable: true,
    materials: ["Mixed metals", "Crystals", "Premium packaging"],
  },
  {
    id: "g2",
    name: "Elegance Gift Box",
    category: "Gift Sets",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1761479258392-011cb2090063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwZ2lmdCUyMGJveCUyMGVsZWdhbnR8ZW58MXx8fHwxNzcwMzUzOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Curated gift box with pearl accessories",
    customizable: false,
    materials: ["Pearls", "Gold plating", "Luxury gift box"],
  },
];
