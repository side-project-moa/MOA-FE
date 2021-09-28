import { atom } from 'recoil';

export const gatherTypeAtom = atom({
  key: 'gatherTypeAtom',
  default: '',
});

export const isRecruitingTypeAtom = atom({
  key: 'isRecruitingTypeAtom',
  default: '모집중/모집완료',
});
