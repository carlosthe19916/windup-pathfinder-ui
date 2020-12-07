import React from "react";
import { ToolbarGroup, ToolbarItem, TextInput } from "@patternfly/react-core";
import { SearchIcon } from "@patternfly/react-icons";

import "./filter-toolbar-item.scss";

export interface FilterToolbarItemProps {
  onFilterChange: (
    value: string,
    event: React.FormEvent<HTMLInputElement>
  ) => void;
  placeholder: string;
  searchValue?: string;
  isCompact?: boolean;
}

export const FilterToolbarItem: React.FC<FilterToolbarItemProps> = ({
  isCompact,
  searchValue,
  onFilterChange,
  placeholder,
}) => {
  return (
    <ToolbarGroup className="filter-toolbar-item__component">
      <ToolbarItem>
        <div className={`toolbar-filter-input-group${isCompact ? "-c" : ""}`}>
          <TextInput
            name="filterText"
            placeholder={placeholder}
            value={searchValue}
            type="text"
            autoComplete="off"
            onChange={onFilterChange}
            aria-label={placeholder}
          />
          <SearchIcon />
        </div>
      </ToolbarItem>
    </ToolbarGroup>
  );
};
