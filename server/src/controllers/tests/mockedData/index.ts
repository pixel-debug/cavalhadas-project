const mockMember1 = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  role: "user",
  image: "profile.jpg",
  memberSince: new Date("2022-01-01"),
  isAdm: false,
  isMale: true,
};

const mockMember2 = {
  id: 2,
  name: "John Doe",
  email: "john@example.com",
  role: "user",
  image: "profile.jpg",
  memberSince: new Date("2022-01-01"),
  isAdm: false,
  isMale: true,
};

const mockedCreateMember = {
  name: "John Doe",
  email: "john@example.com",
  role: "user",
  image: "profile.jpg",
  memberSince: new Date("2022-01-01"),
  isAdm: false,
  isMale: true,
};

const mockedMemberData = [mockMember1, mockMember2];
export default {
  mockMember1,
  mockMember2,
  mockedCreateMember,
  mockedMemberData,
};
