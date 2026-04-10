import { getProducts } from "../data/products";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function HomePage() {
  const products = getProducts();

  return (
    <>
      <div className="page">
        <div className="home-hero">
          <h1 className="home-title">Welcome to our online store!</h1>
          <p className="home-subtitle">
            Discover the best products at the lowest prices.
          </p>
        </div>
        <div className="container">
          <h2 className="page-title">Our Products</h2>

          <div className="product-grid">
            {products.map((eachProducts) => {
              return (
                <ProductCard
                  key={eachProducts.id}
                  eachProducts={eachProducts}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
