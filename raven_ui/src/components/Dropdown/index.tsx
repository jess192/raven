import React, { useState, JSX } from 'react';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import { DropdownItemType, DropdownSectionType, DropdownPropsType, DropdownTitleType } from './types';
import {
  DropdownMenuStyle, DropdownTriggerStyle, DropdownTriggerTitleStyle, DropdownTriggerIconStyle,
  DropdownContentStyleWrapper, DropdownContentStyle, DropdownItemStyle, DropDownMenuLabelStyle,
  DropDownMenuSeparatorStyle,
} from './style';

export default function Dropdown(props: DropdownPropsType) {
  const { options, value, onSelect, width } = props;
  const [open, setOpen] = useState(false);

  const generateTitle = (title : DropdownTitleType): JSX.Element => (
    title ? <DropDownMenuLabelStyle>{title}</DropDownMenuLabelStyle> : null
  );

  const generateSeparator = (end: boolean): JSX.Element => (
    !end && <DropDownMenuSeparatorStyle />
  );

  const generateSections = (
    sections: DropdownSectionType,
    index: React.Key,
    end: boolean,
  ): JSX.Element => (
    <div key={index}>
      {generateTitle(sections.title)}
      {sections.items.map((item: DropdownItemType) => (
        <DropdownItemStyle onClick={() => onSelect(item)} key={item}>
          {item}
        </DropdownItemStyle>
      ))}
      {generateSeparator(end)}
    </div>
  );

  const generateOptions = (dropdownOptions: DropdownSectionType[]): JSX.Element[] => (
    dropdownOptions.map((sections: DropdownSectionType, index: number) => (
      generateSections(sections, index, (index + 1) === dropdownOptions.length)
    ))
  );

  return (
    <DropdownMenuStyle onOpenChange={() => setOpen(!open)} open={open}>
      <DropdownTriggerStyle width={width}>
        <DropdownTriggerTitleStyle>
          sort by: {value}
        </DropdownTriggerTitleStyle>

        <DropdownTriggerIconStyle>
          {open ? <BiChevronUp /> : <BiChevronDown />}
        </DropdownTriggerIconStyle>
      </DropdownTriggerStyle>

      <DropdownContentStyleWrapper>
        <DropdownContentStyle width={width}>
          {generateOptions(options)}
        </DropdownContentStyle>
      </DropdownContentStyleWrapper>
    </DropdownMenuStyle>
  );
}
