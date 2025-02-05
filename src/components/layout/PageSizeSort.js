import { PageSize, SortDropdown } from "@unbxd-ui/react-search-components";

const PageSizeSort = () => {
    return (
        <div className="page-size-sort-container">
            <PageSize 
                text={"Products per page:"} 
                options={[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]} 
            />
            <SortDropdown
                name="sort"
                options={[
                    {
                        value: "",
                        label: "Relevance",
                    },
                    {
                        value: "price desc",
                        label: "Price High to Low",
                    },
                    {
                        value: "price asc",
                        label: " Price Low to High",
                    },
                    {
                        value: "type asc",
                        label: " Type Low to High",
                    },
                ]}
                styles={{
                    wrapper: "sort-root",
                    label: "sort-label",
                    selectWrapper: "sort-dd-wrapper",
                    select: "sort-dd-select",
                    body: "sort-dd-body",
                    option: "sort-dd-option",
                    selected: "sort-dd-selected",
                    activatorWrapper: "sort-activator",
                    activatorText: "sort-text",
                    activatorIcon: "sort-icon"
                }}
            />
        </div>
    );
};

export default PageSizeSort; 