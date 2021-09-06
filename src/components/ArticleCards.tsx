import styled from 'styled-components';
import ArticleCard, { IArticleCard } from './ArticleCard/ArticleCard';

type ArticlesArr = IArticleCard[];

export default function ArticleCards() {
  const articles: ArticlesArr = [
    {
      key: 1,
      isRecruiting: true,
      isLiked: false,
      count: 2,
      title: '리액트 하실 분',
      labels: {
        gatherType: '온라인',
        category: '스터디',
        periodType: '정기',
      },
      skills: [
        {
          id: 1,
          imgUrl: `https://zz`,
        },
      ],
      profileUrl: '',
      name: 'Autumn',
    },
    {
      key: 2,
      isRecruiting: false,
      isLiked: true,
      count: 5,
      title: '미라클코딩 스터디원을 모집합니다.',
      labels: {
        gatherType: '온오프라인',
        category: '프로젝트',
        periodType: '정기',
      },
      skills: [
        {
          id: 1,
          imgUrl: `https://zz`,
        },
        {
          id: 2,
          imgUrl: `https://zz`,
        },
        {
          id: 3,
          imgUrl: `https://zz`,
        },
      ],
      profileUrl: '',
      name: 'Eamon',
    },
    {
      key: 3,
      isRecruiting: false,
      isLiked: true,
      count: 5,
      title: '제목이 세 줄 넘어가면 어떻게 되는지 실험용으로 하고 있습니다.',
      labels: {
        gatherType: '온오프라인',
        category: '프로젝트',
        periodType: '정기',
      },
      skills: [
        {
          id: 1,
          imgUrl: `https://zz`,
        },
        {
          id: 2,
          imgUrl: `https://zz`,
        },
        {
          id: 3,
          imgUrl: `https://zz`,
        },
      ],
      profileUrl: '',
      name: '오톰',
    },
  ];

  return (
    <Ul>
      {articles.map((article) => {
        const {
          key,
          isRecruiting,
          isLiked,
          count,
          title,
          labels,
          skills,
          profileUrl,
          name,
        } = article;
        return (
          <ArticleCard
            key={key}
            isRecruiting={isRecruiting}
            isLiked={isLiked}
            count={count}
            title={title}
            labels={labels}
            skills={skills}
            profileUrl={profileUrl}
            name={name}
          />
        );
      })}
    </Ul>
  );
}

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
