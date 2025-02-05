import { ButtonFacet, RangeFacet } from "@unbxd-ui/react-search-components";
import FacetIcons from './FacetIcons';
import FacetSwatch from './FacetSwatch';

const FacetsContainer = () => {
    return (
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
    );
};

export default FacetsContainer; 