import {
    FixedPagination,
    InfiniteScrollPagination,
    LoadMorePagination
} from "@unbxd-ui/react-search-components";
import { paginationConfigs } from '../../config/paginationConfig';

const PaginationContainer = ({ type }) => {
    const scrollToTop = () => {
        document.querySelector(".product-container")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        });
    };

    const config = paginationConfigs[type];

    switch (config.type) {
        case 'fixed':
            return (
                <FixedPagination
                    onPaginate={scrollToTop}
                    {...config.config}
                />
            );
        case 'infinite':
            return (
                <InfiniteScrollPagination {...config.config} />
            );
        case 'loadMore':
            return (
                <LoadMorePagination {...config.config} />
            );
        default:
            return null;
    }
};

export default PaginationContainer; 