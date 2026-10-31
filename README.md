# React Search SDK Demo

A minimal React app, bundled with Parcel, that demonstrates the Unbxd React Search SDK (@unbxd-ui/react-search-components and @unbxd-ui/react-search-hooks). It renders a product listing page with search, facets, sorting, and pagination, and shows how to plug in custom components such as loaders and no-results states.

## Prerequisites

- Node.js 14 or higher
- npm 6 or higher

## Setup

1. Clone the repository and move into it
```bash
git clone https://github.com/Yashaskara/react-search-sdk-demo.git
cd react-search-sdk-demo
```

2. Install dependencies
```bash
npm install
```

3. (Optional) Point it at your own Unbxd site by changing `siteKey` and `apiKey` in `src/config/unbxdConfig.js`. It ships with a demo site key.

4. Start the development server
```bash
npm start
```

5. Build for production
```bash
npm run build
```

## Project structure

```
src/
  index.html, index.js, App.js   app entry points
  pages/Plp.js                   product listing page
  config/                        SDK and pagination configuration
  components/
    search/                      search box container
    facets/                      facet filters, swatches, icons
    product/, product-view/      product cards and listing view
    pagination/                  pagination container
    layout/                      page size and sort controls
    CustomLoader, CustomNoResults, CustomComponent   SDK component overrides
```
