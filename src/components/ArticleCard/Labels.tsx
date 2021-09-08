import styled from 'styled-components';

/**
 * 태그의 종류
 * 1. 모임 방식 - 온라인 / 오프라인 / 온오프라인
 * 2. 카테고리 - 프로젝트 / 스터디 / 공모전 -> 이부분 사실 카테고리의 id:number 들어옴
 * 3. 기간 - 단기 / 정기
 */

export type LabelsType = {
  labels: {
    gatherType: '온라인' | '오프라인' | '온오프라인';
    category: '스터디' | '공모전' | '프로젝트';
    periodType: '단기' | '정기';
  };
};

export default function Labels({ labels }: LabelsType) {
  // 데이터 받아올 때 ONLINE -> 온라인 이렇게 바로 mapping을 해주자. 카테고리, 기간도 마찬가지
  const { gatherType, category, periodType } = labels;
  return (
    <Ul>
      <Tag>{gatherType}</Tag>
      <Tag>{category}</Tag>
      <Tag>{periodType}</Tag>
    </Ul>
  );
}

const Ul = styled.ul`
  ${({ theme }) => theme.style.flexAlignItemsCenter}
  gap: 0.25rem;
`;

const Tag = styled.li`
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  background-color: lightgreen;
  font-size: 14px;
`;
