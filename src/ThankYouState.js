export default function ThankYouState({ rate }) {
  return (
    <section className="text-center">
      {/* <!-- Thank you state start --> */}
      <img
        src="./images/illustration-thank-you.svg"
        alt=""
        className="mx-[auto] mb-8 w-32"
      />
      <p className="mb-5 text-orange py-[5px] px-[15px] rounded-3xl bg-rating-blue inline-block ">
        You selected out {rate} of 5
      </p>
      <h1 className="text-3xl text-white font-medium mb-5 tracking-[2px]">
        Thank you!
      </h1>
      <p className="text-medium-grey text-[14px]">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      {/* <!-- Thank you state end --> */}
    </section>
  );
}
