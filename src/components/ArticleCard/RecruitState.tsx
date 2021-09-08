import styled from 'styled-components';

export default function RecruitState({
  isRecruiting,
}: {
  isRecruiting: boolean;
}) {
  return (
    <RecruitStateContainer isRecruiting={isRecruiting}>
      {isRecruiting ? '모집중' : '모집완료'}
    </RecruitStateContainer>
  );
}

const RecruitStateContainer = styled.div<{ isRecruiting: boolean }>`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 14px;
  color: ${({ theme, isRecruiting }) => (isRecruiting ? '#FFB800' : '#4E4E4E')};
`;
