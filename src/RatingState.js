export default function RatingState({ handleRate, handleSubmit }) {
  return (
    <section>
      <h1>hello</h1>
      <img
        src="./images/icon-star.svg"
        alt=""
        className="p-3 bg-rating-blue rounded-full mb-4"
      />
      <h1 className="text-white text-2xl font-bold mb-4">How did we do?</h1>
      {/* Rating state start  */}
      <p className="text-[14px] text-light-grey mb-8 font-normal">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={handleSubmit}>
        <ul className="flex justify-between items-center mb-6">
          {[1, 2, 3, 4, 5].map((r, i) => (
            <button
              className=" w-10 h-10 rounded-full bg-rating-blue text-center grid place-items-center text-light-grey font-bold hover:bg-medium-grey focus:bg-medium-grey"
              type="button"
              key={i}
              onClick={() => handleRate(r)}
            >
              {r}
            </button>
          ))}
        </ul>
        <button
          type="submit"
          className="w-full py-2 bg-orange uppercase text-white font-medium tracking-[3px] rounded-full"
        >
          Submit
        </button>
      </form>
      {/* <!-- Rating state end --> */}
    </section>
  );
}
