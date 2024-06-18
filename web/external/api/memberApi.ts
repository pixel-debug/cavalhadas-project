import { Member } from "@/types/types";
import { api } from ".";

export const getMembers = async (): Promise<Member[]> => {
  try {
    const memberData = await api<Member[]>("/members");
    return memberData;
  } catch (error) {
    throw error;
  }
};

export const createMember = async (data: Member) => {
  try {
    console.log(data);
    const responseData = await api<Member>("/members", "POST", data);
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const updateMember = async (id: number, data: Member) => {
  try {
    const responseData = await api<Member>(`/members/${id}`, "PUT", data);
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const removeMember = async (id: number) => {
  try {
    const responseData = await api<Member>(`/members/${id}`, "DELETE");
    return responseData;
  } catch (error) {
    throw error;
  }
};
