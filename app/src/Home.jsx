import CarList from "./components/CarList";

const Home = () => {
  return (
    <>
      <section
        class="relative bg-[url(https://images.unsplash.com/photo-1611858246382-da4877c6476d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80)] bg-cover bg-center bg-no-repeat"
      >
        <div
          class="absolute inset-0 bg-gray-50 sm:bg-transparent sm:from-gray-50 sm:to-gray-50 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div class="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
              WELCOME TO

              <strong class="block font-extrabold text-orange-red">
                EVE MOTORS
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white">
              Embark on Your Journey of Luxury and Performance: Discover Your Perfect Ride with Us.
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                class="inline-block shrink-0 rounded-md border border-orange-red bg-orange-red px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-orange-red focus:outline-none focus:ring active:text-orange-red"
              >
                See our collection
              </a>
            </div>
          </div>
        </div>
      </section>

      <h1 className="font-bold text-3xl text-gray-900 text-center p-6">Discover Our Collection!</h1>

      <p class=" max-w-full sm:text-xl/relaxed text-gray-700 text-center font-light">
        Embark on Your Journey of Luxury and Performance: Discover Your Perfect Ride with Us.
      </p>

      <CarList />
      <CarList />
    </>
  );
};

export default Home;
