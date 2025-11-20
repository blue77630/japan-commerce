type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
  description?: string;
};

export default function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick?: () => void;
}) {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={product.image} alt={product.title} className="product-img" />
      <div className="product-info">
        <div>
          <h3 className="product-title">{product.title}</h3>
          <p className="product-desc">{product.description}</p>
        </div>
        <div className="product-meta">
          <span className="product-price">{product.price}</span>
          <button
            className="product-btn"
            onClick={(e) => {
              e.stopPropagation();
            }}
          > Add </button>
        </div>
      </div>
    </div>
  );
}