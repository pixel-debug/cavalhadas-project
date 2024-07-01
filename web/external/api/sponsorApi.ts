import { Sponsor } from "@/types/types";
import { api } from ".";

export const getSponsors = async (): Promise<Sponsor[]> => {
  try {
    const sponsorData = await api<Sponsor[]>("/sponsors");
    return sponsorData;
  } catch (error) {
    throw error;
  }
};

export const createSponsor = async (data: Sponsor) => {
  try {
    const responseData = await api<Sponsor>("/sponsors", "POST", data);
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const updateSponsor = async (id: number, data: Sponsor) => {
  try {
    const responseData = await api<Sponsor>(`/sponsors/${id}`, "PUT", data);
    return responseData;
  } catch (error) {
    throw error;
  }
};

export const deleteSponsor = async () => {
  try {
    const responseData = await api<Sponsor>(`/sponsors`, "DELETE");
    return responseData;
  } catch (error) {
    throw error;
  }
};
