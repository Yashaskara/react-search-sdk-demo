import React, { useState } from 'react';
import Plp from './pages/Plp';
import './components/styles.css';
import "@unbxd-ui/react-search-components/dist/styles/searchbox.css";
import "@unbxd-ui/react-search-components/dist/styles/products.css";
import "@unbxd-ui/react-search-components/dist/styles/facets.css";
import "@unbxd-ui/react-search-components/dist/styles/fixedPagination.css";
import "@unbxd-ui/react-search-components/dist/styles/selectedFacets.css";
import "@unbxd-ui/react-search-components/dist/styles/productViewDropdown.css";
import "@unbxd-ui/react-search-components/dist/styles/pageSize.css";
import "@unbxd-ui/react-search-components/dist/styles/sortDropdown.css";
import "@unbxd-ui/react-search-components/dist/styles/breadcrumb.css";
import "@unbxd-ui/react-search-components/dist/styles/summary.css";
import "@unbxd-ui/react-search-components/dist/styles/infiniteScrollPagination.css";
import "@unbxd-ui/react-search-components/dist/styles/loadMorePagination.css";
import "@unbxd-ui/react-search-components/dist/styles/productViewButtons.css";
import "@unbxd-ui/react-search-components/dist/styles/productViewRadioButtons.css";



function App() {
    const [paginationType, setPaginationType] = useState('fixed');
    const [viewType, setViewType] = useState('dropdown');

    return (
        <div>
            <h5>Hello React with Search React SDK!</h5>
            <div className="config-selector">
                <div className="UNX-dropdown">
                    <select
                        className="UNX-dropdown-activator size-select"
                        value={paginationType}
                        onChange={(e) => setPaginationType(e.target.value)}
                    >
                        <option value="fixed">Fixed Pagination</option>
                        <option value="infinite">Infinite Scroll</option>
                        <option value="loadMore">Load More</option>
                    </select>
                </div>

                <div className="UNX-dropdown">
                    <select
                        className="UNX-dropdown-activator size-select"
                        value={viewType}
                        onChange={(e) => setViewType(e.target.value)}
                    >
                        <option value="dropdown">Dropdown View</option>
                        <option value="buttons">Button View</option>
                        <option value="radio">Radio Button View</option>
                    </select>
                </div>
            </div>


            <Plp
                paginationType={paginationType}
                viewType={viewType}
            />
        </div>
    );
}

export default App;