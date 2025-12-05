import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard.tsx";

const sampleProducts = [
  { id: 1, title: "japan Mug", price: "€12.00", image: "../public/japanese-icon-matcha-cup-3d-illustration-png.png", description: "Tasse motif sakura" },
  { id: 2, title: "Kimono", price: "€25.00", image: "../public/kimono.png", description: "Poster décoratif" },
  { id: 3, title: "Matcha Set", price: "€39.00", image: "../public/matcha set.webp", description: "Set pour préparer matcha" },
  { id: 4, title: "Chopsticks", price: "€8.00", image: "../public/chopsticks.png", description: "Paires de baguettes" },
  { id: 5, title: "Socks", price: "€6.50", image: "../public/socks japanese.png", description: "Chaussettes kawaii" },
  { id: 6, title: "Lucky Cat", price: "€18.00", image: "../public/golden lucky cat.png", description: "Chat porte-bonheur" },
];

function Home(){
  const navigate = useNavigate();

  return (
    <div className="page-animate-in shop-page">
      <h2>Accueil - Tous les produits</h2>
      <p className="shop-subtitle">Produits populaires</p>

      <div className="shop-grid">
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} product={p} onClick={() => navigate(`/shop/product/${p.id}`)} />
        ))}
      </div>
    </div>
  );
}

export default Home;