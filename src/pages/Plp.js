import { UnbxdSearchWrapper } from "@unbxd-ui/react-search-hooks";
import { Products, Summary, SelectedFacets, InfiniteScrollPagination } from "@unbxd-ui/react-search-components";

// Config
import { webUrlConfig, apiUrlConfig, unbxdKey } from '../config/unbxdConfig';

// Components
import SearchContainer from '../components/search/SearchContainer';
import PageSizeSort from '../components/layout/PageSizeSort';
import FacetsContainer from '../components/facets/FacetsContainer';
import ProductHover from '../components/product/ProductHover';
import PaginationContainer from '../components/pagination/PaginationContainer';
import CustomLoader from '../components/CustomLoader';
import { paginationConfigs } from "../config/paginationConfig";
import ProductViewContainer from '../components/product-view/ProductViewContainer';

function Plp({ paginationType = "fixed", viewType = "dropdown" }) {
    const onEvent = ({ type, message, value, state }) => {
        console.log(type, message, value, state)
    }

    const paginationConfig = paginationConfigs[paginationType];

    return (
        <>
            <UnbxdSearchWrapper
                siteKey={unbxdKey.siteKey}
                apiKey={unbxdKey.apiKey}
                defaultValues={{ pageSize: 12, query: "", currentPage: 1, view: "", sort: "" }}
                webUrlConfig={webUrlConfig}
                apiUrlConfig={apiUrlConfig}
                onEvent={onEvent}
            >
                <div className="search-page-size-container">
                    <SearchContainer />
                    <ProductViewContainer viewType={viewType} />
                    <PageSizeSort />
                </div>

                <Summary />

                <div className="plp-container">
                    <SelectedFacets />
                    <FacetsContainer />
                    {
                        paginationType === "infinite" ?
                            <InfiniteScrollPagination
                                config={paginationConfig.config}

                            >
                                <Products
                                    ProductComponent={ProductHover}
                                    LoaderComponent={CustomLoader}
                                />
                            </InfiniteScrollPagination>

                            :
                            <Products
                                ProductComponent={ProductHover}
                                LoaderComponent={CustomLoader}
                            />
                    }
                </div>

                {paginationType !== "infinite" && <PaginationContainer type={paginationType} />}
            </UnbxdSearchWrapper>
        </>
    )
}

export default Plp;