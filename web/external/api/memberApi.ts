import { Member } from "@/types/types";
import { api } from ".";

export const getMembers = async (): Promise<Member[]> => {
  try {
    const memberData = await api<Member[]>("/member");
    return memberData;
  } catch (error) {
    throw error;
  }
};

export const createMember = async (data: Member) => {
  try {
    const responseData = await api<Member>("/member", "POST", data);
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const updateMember = async (id: number, data: Member) => {
  try {
    const responseData = await api<Member>(`/member/${id}`, "PUT", data);
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const deleteMember = async (id: number) => {
  try {
    const responseData = await api<Member>(`/member/${id}`, "DELETE");
    return responseData;
  } catch (error) {
    throw error;
  }
};
