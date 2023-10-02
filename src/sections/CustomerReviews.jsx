import { reviews } from "../constants";
import { ReviewCard } from "../components/ReviewCard";

export function CustomerReviews () { 
  return (
    <section className="max-w-[1440px] mx-auto">
        <h3 className="font-palanquin text-center text-4xl font-bold">O que nossos <span className="text-sky-600">Clientes</span> dizem?</h3>
        <p className="m-auto font-montserrat text-slate-gray text-lg leading-7 mt-4 max-w-lg text-center">
        Ouça histórias genuínas de nossos clientes satisfeitos sobre suas experiências excepcionais conosco.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <ReviewCard key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            />
          ))}

        </div>
    </section>
  )
}
