import React from 'react';
import Plp from './Plp';
import './components/styles.css';
import "@unbxd-ui/react-search-components/dist/styles/searchbox.css";
import "@unbxd-ui/react-search-components/dist/styles/products.css";
import "@unbxd-ui/react-search-components/dist/styles/facets.css";
import "@unbxd-ui/react-search-components/dist/styles/fixedPagination.css";
import "@unbxd-ui/react-search-components/dist/styles/selectedFacets.css";
import "@unbxd-ui/react-search-components/dist/styles/productViewDropdown.css";
import "@unbxd-ui/react-search-components/dist/styles/pageSize.css";




function App() {
    return (
        <div>
            <h5>Hello React with Search React SDK!</h5>
            <Plp></Plp>
        </div>
    );
}

export default App;