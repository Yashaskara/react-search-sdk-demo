import { SearchBox } from "@unbxd-ui/react-search-components";

const SearchContainer = () => {
    return (
        <SearchBox
            placeholder={"Search for products..."}
            showLabel={false}
            label={""}
            submitOnEnter={true}
            showSubmitButton={false}
            debounce={true}
            delay={2000}
            forceReload={false}
            showClear={true}
            styles={{
                root: "searchbox-root searchbox-custom",
                label: "searchbox-label searchbox-custom-clear-btn",
                input: "searchbox-input searchbox-custom-input",
                clearButton: "search-clear-btn searchbox-custom-clear-btn",
                submitButton: "searchbox-btn"
            }}
        />
    );
}

export default SearchContainer; 