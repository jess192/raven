export type DropdownOptionType = string | number;

export type DropdownPropsType = {
  options: DropdownOptionType[],
  value?: DropdownOptionType,
  onSelect?: CallableFunction,
  width: number
}
