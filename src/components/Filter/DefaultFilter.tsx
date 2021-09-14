import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import { FilterPlaceholder } from '@src/App';
import { gatherTypeAtom } from './filterAtoms';

export interface IFilterData {
  placeholder: FilterPlaceholder;
  options: string[];
}

export default function DefaultFilter({ placeholder, options }: IFilterData) {
  const [isFilterOptionsOn, setFilterOptionsOn] = useState(false);
  const [gatherType, setGatherType] = useRecoilState(gatherTypeAtom);

  const selectedOptionDOM = useRef<HTMLDivElement>(null);
  const currentDOM = useRef<HTMLUListElement>(null);

  const handleOnOffFilterOptions = () => {
    setFilterOptionsOn(!isFilterOptionsOn);
  };

  const handleOptionClick = (
    e: React.MouseEvent<HTMLOptionElement, MouseEvent>,
  ) => {
    if (!e.target) return;
    if (!selectedOptionDOM.current) return;

    const element = e.currentTarget as HTMLOptionElement;
    setFilterOptionsOn(false);
    setGatherType(element.innerHTML);
  };

  return (
    <DefaultFilterContainer>
      <SelectedOption
        ref={selectedOptionDOM}
        onClick={handleOnOffFilterOptions}
      >
        {gatherType}
      </SelectedOption>

      <FilterOptions ref={currentDOM}>
        {isFilterOptionsOn &&
          options.map((option) => (
            <FilterOption value={option} onClick={(e) => handleOptionClick(e)}>
              {option}
            </FilterOption>
          ))}
      </FilterOptions>
    </DefaultFilterContainer>
  );
}

const DefaultFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 11.25rem;
`;

const SelectedOption = styled.div`
  ${({ theme }) => theme.style.flexAlignItemsCenter}
  box-sizing: border-box;
  padding-left: 1.125rem;
  width: 11.25rem;
  height: 3.375rem;
  background-color: #eee;

  &:hover {
    cursor: pointer;
  }
`;

const FilterOptions = styled.ul`
  all: unset;
  width: 11.25rem;
  display: flex;
  flex-direction: column;
`;

const FilterOption = styled.option`
  all: unset;
  ${({ theme }) => theme.style.flexAlignItemsCenter}
  box-sizing: border-box;
  padding-left: 1.125rem;
  width: 11.25rem;
  height: 3.375rem;
  background-color: #eee;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 184, 0, 0.5);
  }
`;
