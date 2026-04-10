import { Link } from "react-router-dom";

function ProductCard(props) {
  const { eachProducts } = props;
  return (
    <>
      <div className="product-card">
        <img
          src={eachProducts.image}
          className="product-card-image"
          alt={eachProducts.name}
        />
        <div className="product-card-content">
          <h3 className="product-card-name">{eachProducts.name}</h3>
          <p className="product-description">{eachProducts.description}</p>
          <p className="product-card-price">${eachProducts.price.toFixed(2)}</p>
          <div className="product-card-actions">
            <Link className="btn btn-secondary">View Details</Link>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
