export type DropdownTitleType = string;
export type DropdownItemType = string | number;

export type DropdownSectionType = {
 title?: DropdownTitleType,
 items: DropdownItemType[]
}

export type DropdownPropsType = {
  options: DropdownSectionType[],
  value?: DropdownItemType,
  onSelect?: CallableFunction,
  width: number
}
