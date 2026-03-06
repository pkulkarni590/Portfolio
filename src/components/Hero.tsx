export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center text-white">

      <h1 className="text-6xl font-bold mb-4">
        Prathmesh Kulkarni
      </h1>

      <p className="text-lg text-gray-300 max-w-xl">
        Building intelligent systems, scalable cloud platforms,
        and human centered technology.
      </p>

      <div className="flex gap-6 mt-8">
        <button className="bg-white text-black px-6 py-2 rounded-full">
          Explore Work
        </button>

        <button className="border border-white px-6 py-2 rounded-full">
          Get in Touch
        </button>
      </div>

    </section>
  )
}