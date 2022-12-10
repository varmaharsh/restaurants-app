import { PRETTY, RAMEN_URL } from "../constants";
import { Restaurant, SingleRestaurant } from "../interfaces";
import makeApiCall from "./makeApiCall";

export default function useRestaurant() {
  const getRestaurant = async (id: string): Promise<SingleRestaurant> => {
    const response = await makeApiCall<SingleRestaurant>(
      RAMEN_URL + "/" + id + PRETTY
    );
    return response;
  };
  return { getRestaurant };
}
