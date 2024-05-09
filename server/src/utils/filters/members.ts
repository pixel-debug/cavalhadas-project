export interface MemberFilterInput {
  isMale?: boolean;
  isAdm?: boolean;
  AND?: MemberFilterInput[];
  OR?: MemberFilterInput[];
  NOT?: MemberFilterInput[];
}
