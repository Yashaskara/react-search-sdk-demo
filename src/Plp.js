import { UnbxdSearchWrapper } from "@unbxd-ui/react-search-hooks";
import { SearchBox, Products, Image, Facets, SelectedFacets, RangeFacet, CheckboxFacet, MultilevelFacet, SelectedFacets, ButtonFacet, RangeFacet, PageSize, SortDropdown } from "@unbxd-ui/react-search-components";
import { FixedPagination } from "@unbxd-ui/react-search-components";

// import "@unbxd-ui/react-search-components/dist/styles/selectedFacets.css";

import CustomComponent from './components/CustomComponent';
import CustomNoResults from './components/CustomNoResults';
import CustomLoader from './components/CustomLoader';
// const searchboxStyles = require.resolve("@unbxd-ui/react-search-components/styles/searchbox.css")
// const productsStyles = require.resolve("@unbxd-ui/react-search-components/styles/products.css")
// import "@unbxd-ui/react-search-components/styles/products.css";
// import "@unbxd-ui/react-search-components/public/css/core/products.css";
// const searchboxStyles = require("@unbxd-ui/react-search-components/styles/searchbox.css")


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
    else {
        return <div className="facet-icon-item">
            <img src={genderIcons[facetItem]} alt={`Icon for ${item.label}`} />
            {item.label}
        </div>
    }
}

const FacetSwatch = ({ item }) => {
    return <div className="facet-swatch-wrapper">
        <div className="facet-swatch" style={{ backgroundColor: item.value }}></div>
        {item.label}
    </div>
}

const ProductHover = ({ product }) => {
    const { idx, uniqueId, title, price, imageUrl: images = [], productImage } = product;
    console.log("Images", product)
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

function Plp() {

    const onEvent = ({ type, message, value, state }) => {
        console.log(type, message, value, state)
    }

    return (
        <>
            <UnbxdSearchWrapper
                siteKey="demo-unbxd700181503576558"
                apiKey="fb853e3332f2645fac9d71dc63e09ec1"
                defaultValues={{ pageSize: 12, query: "", currentPage: 1, view: "", sort: "" }}
                webUrlConfig={{
                    hashMode: false,
                    queryParamSeperator: "&",
                    keySeperator: "=",
                    orderOfParams: [],
                    query: {
                        addToUrl: true,
                        key: "query",
                    },
                    category: {
                        addToUrl: true,
                        key: "browse"
                    },
                    sort: {
                        addToUrl: true,
                        key: "sort",
                        values: {}
                    },
                    view: {
                        addToUrl: false,
                        key: "view",
                        values: {}
                    },
                    pageSize: {
                        addToUrl: true,
                        key: "rows"
                    },
                    pagination: {
                        addToUrl: true,
                        key: "start",
                        usePageNo: true
                    },
                    facets: {
                        addToUrl: true,
                        valuesSeperator: ",",
                        keys: {},
                        values: {},
                    },
                    externalParams: null,
                    rangeFacets: [],
                    categoryFacets: []
                }}
                apiUrlConfig={
                    {
                        // category: {
                        //     browseQueryParam: "p",
                        //     page: "",
                        //     page_type: "boolean",
                        // },

                        // variants: {
                        //     enabled: true,
                        // count: 100,
                        // groupBy: "parentProductId",
                        // attributes: [
                        //     "title",
                        //     "uniqueId",
                        //     "imageUrl",
                        //     "productUrl",
                        //     "price",
                        //     "colorName",
                        //     "color",
                        //     "size",
                        //     "variantId",
                        //     "variantSku",
                        //     "variantUpc"
                        // ],
                        // mapping: {
                        //     variantId: "uniqueId",
                        //     variantColor: "colorName",
                        //     variantImage: "imageUrl"
                        // }
                        // },
                        spellCheck: {
                            enabled: true,
                        },
                        facetMultiSelect: true,
                        uc_param: "",
                        // extraParams: { test: "abc" },
                    }
                }
                onEvent={onEvent}
            // setWebUrl={() => { }}
            // headers={{}}
            >
                <div className="search-page-size-container">

                    <SearchBox
                        // The placeholder text for the search input
                        placeholder={"Search for products..."}
                        // Whether to show a label above the search input
                        showLabel={false}
                        // Custom label text (defaults to empty string if not specified)
                        label={""}

                        // Whether to trigger search on Enter key press
                        submitOnEnter={true}

                        // Whether to show the search submit button
                        showSubmitButton={false}

                        // Custom text for submit button (defaults to "Search")
                        // submitButtonLabel={"Search"}

                        // Enable debounced search (delay between typing and API call)
                        // Note: Only works when showSubmitButton and submitOnEnter are false
                        debounce={true}

                        // Delay in milliseconds for debounced search
                        delay={2000}

                        // Whether to force API call even for same query
                        forceReload={false}

                        // Whether to show a clear button
                        showClear={true}

                        // Custom component for clear button
                        // ClearBtnComponent={() => <span>Clear</span>}

                        // Callback function when query changes
                        // onQueryChange={(query) => console.log(query)}

                        // Custom CSS classes
                        styles={{
                            root: "searchbox-root searchbox-custom",
                            label: "searchbox-label",
                            input: "searchbox-input searchbox-custom-input",
                            clearButton: "search-clear-btn searchbox-custom-clear-btn",
                            submitButton: "searchbox-btn"
                        }}

                    // Autosuggest configuration
                    // autosuggest={{
                    //     enabled: true,
                    //     AutosuggestComponent: CustomComponent,
                    //     NoResultsComponent: CustomNoResults,
                    //     LoaderComponent: CustomLoader,
                    //     minChars: 3,
                    //     extraParams: {},
                    //     trendingSearches: {
                    //         enabled: true,
                    //         count: 5
                    //     },
                    //     popularProducts: {
                    //         count: 5,
                    //         fields: ["title", "price"]
                    //     },
                    //     keywordSuggestions: {
                    //         count: 5,
                    //         prefetch: false
                    //     },
                    //     topQueries: {
                    //         count: 5,
                    //         prefetch: false
                    //     },
                    //     inFields: {
                    //         count: 5,
                    //         prefetch: false
                    //     },
                    //     promotedSuggestions: {
                    //         count: 5,
                    //         prefetch: false
                    //     }
                    // }}
                    />

                    <PageSize text={"Products per page:"} options={[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]} />
                    <SortDropdown
                        name="sort"
                        options={[
                            {
                                value: "price desc",
                                label: "Price High to Low",
                            },
                            {
                                value: "price asc",
                                label: " Price Low to High",
                            },
                        ]} />
                </div>

                <div className="plp-container">
                    <SelectedFacets />

                    <div className="facets-container">

                        <ButtonFacet
                            name="size_uFilter"
                            renderAs="dropdown"
                            applyAll={true}
                            searchable={true}
                            multiselect={true}
                            clearBtn={true}
                            showSelectedFacets={true}
                            viewMoreLimit={2}
                            styles={{
                                root: "facets-root",
                                body: "facets-body facets-body-custom"
                            }}
                        />
                        <ButtonFacet
                            name="gender_uFilter"
                            renderAs="dropdown"
                            applyAll={true}
                            searchable={true}
                            multiselect={true}
                            clearBtn={true}
                            showSelectedFacets={true}
                            CustomComponent={FacetIcons}
                            styles={{
                                root: "facets-root",
                                body: "facets-body facets-body-custom"
                            }}
                        />
                        <ButtonFacet
                            name="color_uFilter"
                            renderAs="dropdown"
                            applyAll={true}
                            searchable={true}
                            multiselect={true}
                            clearBtn={true}
                            showSelectedFacets={true}
                            CustomComponent={FacetSwatch}
                            styles={{
                                root: "facets-root",
                                body: "facets-body facets-body-custom"
                            }}
                        />
                        <RangeFacet
                            isMultiSlider={true}
                            name="price"
                            renderAs="dropdown"
                            isCollapsible={true}
                            defaultOpen={true}
                            showInputLabels={true}
                            showSelectedValues={true}
                            min={200}
                            max={500}
                            showInputBoxes={true}
                            step={100}
                            styles={{
                                root: "facets-root",
                                body: "facets-body facets-body-custom"
                            }}
                        />
                    </div>





                    <Products ProductComponent={ProductHover} LoaderComponent={CustomLoader} />

                </div>
                <FixedPagination
                    onPaginate={() => {
                        document.querySelector(".product-container")?.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
                    }}
                    viewAs="BUTTONS"
                    pageLimit={10}
                />
            </UnbxdSearchWrapper>

        </>
    )
}

export default Plp