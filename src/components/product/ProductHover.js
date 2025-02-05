import { Image } from "@unbxd-ui/react-search-components";

const ProductHover = ({ product }) => {
    const { idx, uniqueId, title, price, imageUrl: images = [], productImage } = product;
    
    return (
        <div
            data-prank={idx}
            key={uniqueId}
            className="product-card"
            onClick={(event) => {
                event.stopPropagation();
            }}
            style={{ cursor: "pointer" }}>

            <Image imageUrl={productImage} hoverImageUrl={images[0]} />
            <div className="product-description">
                <h3>{title}</h3>
                <div>{price}</div>
            </div>
        </div>
    );
}

export default ProductHover; 