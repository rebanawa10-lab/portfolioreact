// file:    src/api/salesServiceAPI.ts
// salesServiceAPI

import { nodeApi } from "./axiosClient";

export type User = {
  userid: number;
  username: string;
  country: string;
  countrydesc: string;
  hired: string;
  active: number;
  sales: number;
};

export const getSalesman = async (): Promise<User[]> => {
  const res = await nodeApi.get("/salesman");
  return res.data;
};