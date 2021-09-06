import styled from 'styled-components';

export type Skill = {
  id: number;
  imgUrl: `https://${string}`;
};

export default function Skills({ skills }: { skills: Skill[] }) {
  return (
    <Ul>
      {skills.map((skill: Skill) => (
        <SkillImg key={skill.id} src={skill.imgUrl} />
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  ${({ theme }) => theme.style.flexAlignItemsCenter}
  gap: 0.5rem;
`;

const SkillImg = styled.img`
  all: unset;
  width: 3rem;
  height: 3rem;
  background-color: lightyellow;
  border-radius: 0.5rem;
`;
