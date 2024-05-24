import { Sponsor } from "@/types/types";
import { api } from ".";

export const getSponsors = async (): Promise<Sponsor[]> => {
  try {
    const sponsorData = await api<Sponsor[]>("/sponsor");
    return sponsorData;
  } catch (error) {
    throw error;
  }
};

export const createSponsor = async (data: Sponsor) => {
  try {
    const responseData = await api<Sponsor>("/sponsor", "POST", data);
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const updateSponsor = async (id: number, data: Sponsor) => {
  try {
    const responseData = await api<Sponsor>(`/sponsor/${id}`, "PUT", data);
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const deleteSponsor = async (id: number) => {
  try {
    const responseData = await api<Sponsor>(`/sponsor/${id}`, "DELETE");
    return responseData;
  } catch (error) {
    throw error;
  }
};
