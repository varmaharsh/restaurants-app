import { useEffect, useState } from "react";
import { PRETTY, RAMEN_URL } from "../constants";
import { PageInfo, RamenResponse, Restaurant } from "../interfaces";
import makeApiCall from "./makeApiCall";

export default function useHook() {
  const [pageInfo, setPageInfo] = useState<PageInfo>();
  const [restaurants, setRestaurants] = useState<Restaurant[]>();
  const [totalCount, setTotalCount] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredRestaurants, setFilteredRestaurants] =
    useState<Restaurant[]>();

  useEffect(() => {
    (async () => {
      const response = await makeApiCall<RamenResponse>(
        RAMEN_URL + PRETTY + "&page=" + page + "&perPage=" + perPage
      );

      setRestaurants(response.shops);
      setPageInfo(response.pageInfo);
      setTotalCount(response.totalCount);
      console.log(perPage);
    })();
  }, [page, perPage]);

  useEffect(() => {
    const filteredRestaurants = restaurants?.filter(
      (restaurant) =>
        restaurant.id.includes(searchTerm) ||
        restaurant.name.includes(searchTerm)
    );
    if (searchTerm.length) {
      setFilteredRestaurants(filteredRestaurants);
    } else {
      setFilteredRestaurants(restaurants);
    }
  }, [searchTerm, restaurants]);

  return {
    filteredRestaurants,
    pageInfo,
    totalCount,
    setPage,
    setPerPage,
    searchTerm,
    setSearchTerm,
  };
}
