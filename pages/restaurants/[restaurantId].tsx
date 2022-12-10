import { useRouter, withRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Restaurant as RestaurantType } from "../../interfaces";
import useRestaurant from "../../utils/useRestaurant";

const Restaurant = () => {
  const router = useRouter();
  const { getRestaurant } = useRestaurant();
  const [restaurant, setRestaurant] = useState<RestaurantType>();

  console.log(router.query.restaurantId);
  useEffect(() => {
    (async () => {
      if (router.query.restaurantId) {
        const restaurant = await getRestaurant(
          router.query.restaurantId as string
        );
        setRestaurant(restaurant.shop);
        console.log(restaurant);
      }
    })();
  }, []);

  return (
    <div>
      <div className="mt-16 ml-16">Id: {restaurant?.id}</div>
      <div className="ml-16">Name: {restaurant?.name}</div>
      <h4 className="ml-16">Photos:</h4>

      <div className="mt-16 ml-16 flex flex-wrap justify-between w-full">
        {restaurant?.photos.map((restaurant, index) => {
          return (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-white mx-4 my-4 shadow-sm cursor-pointer"
              style={{ width: "280px" }}
            >
              <Image
                key={index}
                style={{
                  maxWidth: "500px",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
                src={restaurant.url}
                alt="Book Cover"
                layout="responsive"
                width={restaurant.width}
                height={restaurant.height}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(Restaurant);
