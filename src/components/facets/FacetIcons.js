const FacetIcons = ({ item }) => {
    const genderIcons = {
        "women": "https://imageUrl1.png",
        "men": "https://imageUrl2.png",
        "exp": "https://imageUrl3.png"
    }

    const facetItem = Object.keys(genderIcons).filter((key) => {
        return item.value?.toLowerCase().includes(key.toLowerCase())
    })[0]

    if (!facetItem) return null
    
    return (
        <div className="facet-icon-item">
            <img src={genderIcons[facetItem]} alt={`Icon for ${item.label}`} />
            {item.label}
        </div>
    )
}

export default FacetIcons; 