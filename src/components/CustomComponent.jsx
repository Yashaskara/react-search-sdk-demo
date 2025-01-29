const CustomComponent = ({ suggestions }) => {
    return (
        <div className="autosuggest-container">
            {/* Categories Section */}
            <div className="section">
                <h2>Categories</h2>
                {suggestions.categories?.map((category, index) => (
                    <div key={index} className="category-item">
                        <span>{category.title} in: </span>
                        <span className="path">{category.path}</span>
                    </div>
                ))}
            </div>

            {/* Brands Section */}
            <div className="section">
                <h2>Brands</h2>
                <div className="brand-container">
                    {suggestions.brands?.map((brand, index) => (
                        <div key={index} className="brand-item">
                            <img src={brand.image} alt={brand.title} />
                            <span>{brand.title}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Products Section */}
            <div className="section">
                <h2>Products</h2>
                <div className="products-grid">
                    {suggestions.products?.map((product, index) => (
                        <div key={index} className="product-card">
                            <img src={product.image} alt={product.title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomComponent; 