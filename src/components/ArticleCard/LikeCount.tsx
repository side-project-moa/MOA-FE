import styled from 'styled-components';
import { ReactComponent as OutlineHeart } from '../../icons/heart-outline.svg';
import { ReactComponent as FilledHeart } from '../../icons/heart-solid.svg';

/**
 *
 * isLiked true 이면 색칠된 하트, false 이면 빈 하트
 * like button 클릭 시 서버에 요청, 그리고 다시 GET 요청 -> 채워진 하트, count+1 렌더링
 * like button 다시 클릭 시 서버에 요청, 그리고 다시 GET 요청 -> 빈 하트, count-1 렌더링
 */

export default function LikeCount({
  isLiked,
  count,
}: {
  isLiked: boolean;
  count: number;
}) {
  return (
    <LikeCountContainer>
      <LikeButton>
        {isLiked ? <FilledHeartIcon /> : <OutlineHeartIcon />}
      </LikeButton>
      <Count>{count}</Count>
    </LikeCountContainer>
  );
}

const LikeCountContainer = styled.div`
  ${({ theme }) => theme.style.flexAlignItemsCenter}
`;

const LikeButton = styled.button`
  all: unset;
`;

const OutlineHeartIcon = styled(OutlineHeart)`
  width: 1rem;
  height: 1rem;
`;

const FilledHeartIcon = styled(FilledHeart)`
  width: 1rem;
  height: 1rem;
`;

const Count = styled.div`
  margin-left: 0.2rem;
`;
