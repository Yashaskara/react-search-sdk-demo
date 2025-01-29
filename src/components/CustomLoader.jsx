const CustomLoader = ({ className }) => {
    return (
        <div className={className}>
            {[1, 2, 3, 4].map(idx => (
                <div key={idx} className="product-card loader-container">
                    <div className="loading-image"></div>
                    <div className="loading-title"></div>
                    <div className="loading-price"></div>
                </div>
            ))}
        </div>
    );
};

export default CustomLoader;