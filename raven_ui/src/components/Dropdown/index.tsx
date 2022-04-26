import React, { useState } from 'react';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import { DropdownOptionType, DropdownPropsType } from './types';
import {
  DropdownMenuStyle, DropdownTriggerStyle, DropdownTriggerTitleStyle, DropdownTriggerIconStyle,
  DropdownContentStyle, DropdownItemStyle,
} from './style';

export default function Dropdown(props: DropdownPropsType) {
  const { options, value, onSelect, width } = props;
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenuStyle onOpenChange={() => setOpen(!open)} open={open}>
      <DropdownTriggerStyle width={width}>
        <DropdownTriggerTitleStyle>
          Sort by: {value}
        </DropdownTriggerTitleStyle>

        <DropdownTriggerIconStyle>
          {open ? <BiChevronUp /> : <BiChevronDown />}
        </DropdownTriggerIconStyle>
      </DropdownTriggerStyle>

      <DropdownContentStyle width={width}>
        {options.map((option: DropdownOptionType) => (
          <DropdownItemStyle onClick={() => onSelect(option)} active={option === value}>
            {option}
          </DropdownItemStyle>
        ))}

      </DropdownContentStyle>
    </DropdownMenuStyle>
  );
}
