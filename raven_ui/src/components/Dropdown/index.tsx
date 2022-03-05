import React from 'react';
import { BsCaretDown } from 'react-icons/bs';
import { DropdownOptionType, DropdownPropsType } from './types';
import {
  DropdownMenuStyle, DropdownTriggerStyle, DropdownTriggerTitleStyle, DropdownTriggerIconStyle,
  DropdownContentStyle, DropdownLabelStyle, DropdownItemStyle,
} from './style';

export default function Dropdown(props: DropdownPropsType) {
  const { options, value, onSelect, width } = props;

  return (
    <DropdownMenuStyle>
      <DropdownTriggerStyle width={width}>
        <DropdownTriggerTitleStyle>
          Sort by: {value}
        </DropdownTriggerTitleStyle>

        <DropdownTriggerIconStyle>
          <BsCaretDown />
        </DropdownTriggerIconStyle>
      </DropdownTriggerStyle>

      <DropdownContentStyle width={width}>
        <DropdownLabelStyle />

        {options.map((option: DropdownOptionType) => (
          <DropdownItemStyle onClick={() => onSelect(option)}>
            {option}
          </DropdownItemStyle>
        ))}

      </DropdownContentStyle>
    </DropdownMenuStyle>
  );
}
