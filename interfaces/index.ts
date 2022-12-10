export interface Restaurant {
  id: string;
  name: string;
  photos: Photo[];
}

export interface Photo {
  name: string;
  width: number;
  height: number;
  authorId: string;
  url: string;
}

export interface RamenResponse {
  shops: Restaurant[];
  totalCount: number;
  pageInfo: PageInfo;
}

export interface PageInfo {
  currentPage: number;
  lastPage: number;
  nextPage: number | null;
  perPage: number;
  prevPage: number | null;
}

export interface SingleRestaurant {
  shop: Restaurant;
}

export type HTTPMethods = "GET" | "POST" | "PUT" | "DELETE";
