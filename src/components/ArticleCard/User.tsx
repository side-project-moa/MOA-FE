import styled from 'styled-components';

/**
 * header 부분과 아티클카드 부분에서 같은 사이즈로 사용할지?
 * 추후 size 프롭스를 추가해도 됨
 */

export default function User({
  name,
  profileUrl,
}: {
  name: string;
  profileUrl: string;
}) {
  return (
    <UserContainer>
      <ProfileImg src={profileUrl} />
      <Name>{name}</Name>
    </UserContainer>
  );
}

const UserContainer = styled.div`
  ${({ theme }) => theme.style.flexAlignItemsCenter}
`;

const ProfileImg = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: lightcoral;
`;

const Name = styled.div`
  margin-left: 0.5rem;
`;
