import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

// const MAX_RATING = 5;
// const MIN_RATING = 1;

function Product({ id, title, price, description, category, image, rating }) {
  //   const [rating] = useState(
  //     Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  //   );

  const [hasPrime] = useState(Math.random() < 0.5);
  const dispatch = useDispatch();

  function addItemToBasket() {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      hasPrime,
    };
    //Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product));
  }
  return (
    <div className=" relative flex flex-col m-5 bg-white z-30 p-10">
      <p className=" absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(Math.round(Number(rating))) // Convert to a number and default to 0
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-12"
            src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/untitled-1_282.png?zBgfG0XEfdsPUq33GRuhu6udfY3Yu_rs&itok=39OQ7JCF"
            alt=""
          />
          <p className=" text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
