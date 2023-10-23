import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

export const AddWatchlist = async (body) => {
  return await commonAPI("POST", `${serverURL}/watchlist`, body);
};

export const getAllWatchlist = async () => {
  return await commonAPI("GET", `${serverURL}/watchlist`, "");
};

export const deleteWatchlist = async (id) => {
  return await commonAPI("DELETE", `${serverURL}/watchlist/${id}`, {});
};

export const updateWatchlist = async (id, body) => {
  await commonAPI("PUT", `${serverURL}/watchlist/${id}`, body);
};
