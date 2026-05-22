import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { create } from "zustand";
import { Spinner } from "@/components/ui/spinner";
import businessCat from "./business_cat.svg";

// const useRecommendationStore = create((set, get, store) => ({
//   favorite_movie: undefined,
//   update_favorite_movie: (fav_movie) =>
//     set(() => {
//       return { favorite_movie: fav_movie };
//     }),

//   newness: undefined,
//   update_newness: (newness) => set(() => ({ newness: newness })),

//   fun_or_serious: undefined,
//   update_fun_or_serious: (fun_or_serious) =>
//     set(() => ({ fun_or_serious: fun_or_serious })),

//   response: undefined,
//   update_response: (response) => set(() => ({ response: response })),
// }));

export default function App() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isSubmitting },
  // } = useForm();

  // const favMovie = useRecommendationStore((state) => state.favorite_movie);
  // const updateFavMovie = useRecommendationStore(
  //   (state) => state.update_newness,
  // );
  // const newness = useRecommendationStore((state) => state.newness);
  // const updateNewness = useRecommendationStore(
  //   (state) => state.update_favorite_movie,
  // );
  // const funOrSerious = useRecommendationStore((state) => state.fun_or_serious);
  // const updateFunOrSerious = useRecommendationStore(
  //   (state) => state.update_fun_or_serious,
  // );

  // const response = useRecommendationStore((state) => state.response);
  // const updateResponse = useRecommendationStore(
  //   (state) => state.update_response,
  // );

  // const onSubmit = async (data) => {
  //   var {
  //     favorite_movie,
  //     newness,
  //     fun_or_serious
  //   } = data;

  //   updateFavMovie(favorite_movie);
  //   updateNewness(newness);
  //   updateFunOrSerious(fun_or_serious);

  //   try {
  //     const response = await fetch("http://localhost:3000/recommendation", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     const result = await response.json();


  //     updateResponse(result.completion);
  //   } catch (err) {
  //     console.error(err);
  //     throw err;
  //   }
  // };

  // const restart = () => {
  //   updateFavMovie(undefined);
  //   updateNewness(undefined);
  //   updateFunOrSerious(undefined);
  //   updateResponse(undefined);
  // }

  const planTripComponent = () => {
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-6">
            <label className="mb-2 inline-block">Number of Travellers:</label>
            <Input
              className={"w-full bg-light-blue-purple"}
              placeholder="e.g. Arrival, because it feels thoughtful and emotional"
              {...register("favorite_movie", {
                required: "We'd like to learn about your favorite movie :)",
              })}
            />
          </div>
          <div className="my-6">
            <label className="mb-2 inline-block">Flying from</label>
            <Input
              className={"w-full bg-light-blue-purple"}
              placeholder="Something new, a classic, or surprise me"
              {...register("newness", {
                required: "We'd like to learn about your favorite movie :)",
              })}
            />
          </div>

          <div className="my-6">
            <label className="mb-2 inline-block">Flying to</label>
            <Input
              className={"w-full bg-light-blue-purple"}
              placeholder="Something new, a classic, or surprise me"
              {...register("newness", {
                required: "We'd like to learn about your favorite movie :)",
              })}
            />
          </div>

          <div className="my-6">
            <label className="mb-2 inline-block">To Date</label>
            <Input
              className={"w-full bg-light-blue-purple"}
              placeholder="Something new, a classic, or surprise me"
              {...register("newness", {
                required: "We'd like to learn about your favorite movie :)",
              })}
            />
          </div>

          <div className="my-6">
            <label className="mb-2 inline-block">Budget</label>
            <Input
              className={"w-full bg-light-blue-purple"}
              placeholder="Something new, a classic, or surprise me"
              {...register("newness", {
                required: "We'd like to learn about your favorite movie :)",
              })}
            />
          </div>

          <button
            type="submit"
            className="w-full text-black bg-green-pasty p-3 mt-5 rounded-md"
          >
            Plan my Trip!
          </button>
        </form>
      </>
    );
  }

  return (
    <div className="grid place-content-center mt-6 px-4">
      <img src={businessCat} />
      <button className="button border-black border-3 light-green rounded-full px-5 py-2 text-sm leading-5 font-semibold cursor-pointer">
        Let's Begin!
      </button>
    </div>
  );
}
