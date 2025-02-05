const FacetSwatch = ({ item }) => {
    return (
        <div className="facet-swatch-wrapper">
            <div className="facet-swatch" style={{ backgroundColor: item.value }}></div>
            {item.label}
        </div>
    )
}

export default FacetSwatch; 