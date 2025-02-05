import CustomLoader from "../components/CustomLoader";

export const paginationConfigs = {
    fixed: {
        type: 'fixed',
        config: {
            viewAs: "BUTTONS",
            pageLimit: 10,
            styles: {
                buttons: {
                    wrapper: "pagination-buttons-wrapper pagination-buttons-wrapper-custom",
                    pageBtn: "page-btn",
                    currentPageBtn: "current-page-btn",
                }
            }
        }
    },
    infinite: {
        type: 'infinite',
        config: {
            loaderComponent: CustomLoader,
            styles: {
                wrapper: "pagination-wrapper", // used for the entire pagination component
                preLoader: "loader", // used for the pre-loader
                postLoader: "loader" // used for the post-loader
            }
        }
    },
    loadMore: {
        type: 'loadMore',
        config: {
            buttonLabel: "Load More Products",
            styles: {
                button: "load-more-btn"
            }
        }
    }
};