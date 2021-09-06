import Skills, { Skill } from '../Skills/Skills';
import LikeCount from './LikeCount';
import RecruitState from './RecruitState';
import Labels, { LabelsType } from './Labels';
import User from './User';
import styled from 'styled-components';

export interface IArticleCard {
  key: number;
  isRecruiting: boolean;
  isLiked: boolean;
  count: number;
  title: string;
  labels: {
    gatherType: '온라인' | '오프라인' | '온오프라인';
    category: '스터디' | '공모전' | '프로젝트';
    periodType: '단기' | '정기';
  };
  skills: Skill[];
  profileUrl: string;
  name: string;
}

export default function ArticleCard({
  isRecruiting,
  isLiked,
  count,
  title,
  labels,
  skills,
  profileUrl,
  name,
}: IArticleCard) {
  // 카드 컴포넌트가 가지는 요소들
  // 모집중 여부 ✅ isRecruiting
  // 좋아요 수 ✅ isLiked, count
  // 제목 ✅ 그냥 제목 받아서 넣으면 됨. title
  // 태그들 ✅ gatherType, category, periodType
  // 기술스택들 ✅ skills 배열
  // 작성자 프사, 닉네임 (아이디) ✅ profileUrl, name

  return (
    <ArticleCardContainer>
      <Header>
        <div className="container">
          <RecruitState isRecruiting={isRecruiting} />
        </div>
        <div className="container">
          <LikeCount isLiked={isLiked} count={count} />
        </div>
      </Header>
      <Body>
        <Title>{title}</Title>
        <Space height={16} />
        <Labels labels={labels} />
        {/* <Labels gatherType="온라인" category="스터디" periodType="정기" /> */}
        <Space height={16} />
        <Skills skills={skills} />
      </Body>
      <Footer>
        <Space />
        <User profileUrl={profileUrl} name={name} />
      </Footer>
    </ArticleCardContainer>
  );
}

const ArticleCardContainer = styled.li`
  ${({ theme }) => theme.style.flexSpaceBetween}
  flex-direction: column;
  padding: 2rem;
  width: 18.75rem;
  height: 23.75rem;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.border.radius.L};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Header = styled.header`
  ${({ theme }) => theme.style.flexSpaceBetween}
  align-items: flex-start;
  height: 20%;

  .container {
    height: 1rem;
    display: flex;
    align-items: center;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 70%;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.XL};
  line-height: 130%;
`;

const Footer = styled.footer`
  ${({ theme }) => theme.style.flexSpaceBetween}
  align-items: flex-end;
  height: 10%;
`;

interface SpaceProps {
  width?: number;
  height?: number;
}
const Space = styled.div<SpaceProps>`
  width: ${({ width }) => (width ? `${width}px` : 0)};
  height: ${({ height }) => (height ? `${height}px` : 0)};
`;
