import React from 'react';
import { ProductViewDropdown, ProductViewButtons, ProductViewRadioButtons } from "@unbxd-ui/react-search-components";

// Import required styles
import "@unbxd-ui/react-search-components/dist/styles/productViewDropdown.css";
import "@unbxd-ui/react-search-components/dist/styles/productViewButtons.css";
import "@unbxd-ui/react-search-components/dist/styles/productViewRadioButtons.css";

const ProductViewContainer = ({ viewType }) => {
    // Common options for all view types
    const viewOptions = [
        { label: "Grid", value: "GRID" },
        { label: "List", value: "LIST" },
        { label: "Compact", value: "COMPACT" },
        { label: "II", value: "TwoGrid" },
        { label: "III", value: "ThreeGrid" },
        { label: "IV", value: "FourGrid" }
    ];

    // Common props for all view types
    const commonProps = {
        showLabel: true,
        label: "View:",
        options: viewOptions,
        styles: {
            root: "view-root",
            label: "view-label"
        }
    };

    // Custom component for icons
    const CustomComponent = ({ item }) => {
        switch (item.value) {
            case 'grid':
                return <span>⊞ grid</span>;
            case 'list':
                return <span>≡ list</span>;
            case 'compact':
                return <span>⋮ compact</span>;
            default:
                return <span>{item.label}</span>;
        }
    };

    // Render different view components based on viewType
    switch (viewType) {
        case 'dropdown':
            return (
                <ProductViewDropdown
                    {...commonProps}
                    CustomComponent={CustomComponent}
                    styles={{
                        ...commonProps.styles,
                        selectWrapper: "view-dd-wrapper",
                        select: "view-dd-select",
                        body: "view-dd-body",
                        option: "view-dd-option",
                        selected: "view-dd-selected"
                    }}
                />
            );

        case 'buttons':
            return (
                <ProductViewButtons
                    {...commonProps}
                    CustomComponent={CustomComponent}
                    styles={{
                        ...commonProps.styles,
                        optionContainer: "view-option-container",
                        option: "view-option",
                        selected: "selected",
                        text: "text"
                    }}
                />
            );

        case 'radio':
            return (
                <ProductViewRadioButtons
                    {...commonProps}
                    CustomComponent={CustomComponent}
                    styles={{
                        ...commonProps.styles,
                        container: "view-container",
                        radioItem: "view-radio-item",
                        inputBtn: "view-button",
                        inputLabel: "view-input-label",
                        selected: "selected"
                    }}
                />
            );

        default:
            return null;
    }
};

export default ProductViewContainer; 