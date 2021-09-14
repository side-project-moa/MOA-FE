import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { isRecruitingTypeAtom } from './filterAtoms';

export default function IsRecruitingFilter() {
  const [isRecruitingType, setIsRecruitingType] =
    useRecoilState(isRecruitingTypeAtom);

  const handleClickIsRecruitingFilter = () => {
    setIsRecruitingType(
      isRecruitingType === '모집중' ? '모집중/모집완료' : '모집중',
    );
  };

  return (
    <IsRecruitingFilterContainer
      isRecruitingType={isRecruitingType}
      onClick={handleClickIsRecruitingFilter}
    >
      {isRecruitingType}
    </IsRecruitingFilterContainer>
  );
}

interface IsRecruitingFilterContainerProps {
  // 타입 골치아파서 일단 string으로 해둠
  isRecruitingType: string;
}
const IsRecruitingFilterContainer = styled.div<IsRecruitingFilterContainerProps>`
  ${({ theme }) => theme.style.flexAlignItemsCenter}
  box-sizing: border-box;
  padding-left: 1.125rem;
  width: 11.25rem;
  height: 3.375rem;
  background-color: ${({ isRecruitingType }) =>
    isRecruitingType === '모집중' ? '#FFB800' : '#eee'};
  color: ${({ isRecruitingType, theme }) =>
    isRecruitingType === '모집중' ? theme.color.white : '#808080'};
  font-weight: ${({ isRecruitingType }) =>
    isRecruitingType === '모집중' ? 'bold' : 'normal'};

  &:hover {
    cursor: pointer;
  }
`;
