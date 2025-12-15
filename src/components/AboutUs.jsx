function AboutUs() {
  return (
    <div className="w-full h-screen bg-slate-100">
      <div className="flex h-full">
        {/* Image column */}
        <div className="h-full basis-1/3 p-12 ">
          <img
            src="/godown.jpg"
            alt="Babji Enterprises Facility"
            className="h-full w-full object-cover rounded-t-3xl shadow-lg shadow-green-500/20
"
          />
        </div>

        {/* Text column */}
        <div className="h-full basis-2/3 flex flex-col p-12  justify-between">
          <h1 className="font-semibold text-3xl text-slate-900">
            Built On Trust and Quality
          </h1>

          <p className="text-lg text-slate-600">
            Established in 2002 and based in Vadodara, Gujarat, Babji
            Enterprises is a trusted leader in the metal scrap industry. With
            over 20 years of experience, we specialize in the trading, import,
            and supply of premium metal scraps, including Stainless Steel,
            Aluminium, Nickel, Copper, Alloy Steel, and Brass Scrap.
          </p>
          <div className="flex w-full ">
            <img src="/quality.png" className="h-18 w-18"></img>
            <div className="px-8">
              <h1 className="font-semibold text-lg">Quality</h1>
              <p>
                Our mission is to supply high-quality, recyclable, and
                eco-friendly scrap materials across Gujarat and India
              </p>
            </div>
          </div>
          <div className="flex w-full ">
            <img src="/reputation.png" className="h-18 w-18"></img>
            <div className="px-8">
              <h1 className="font-semibold text-lg">Reputation</h1>
              <p>
                Guided by strong financial and quality management practices, we
                have built lasting relationships with foundries, corporations,
                and reputable scrap traders.
              </p>
            </div>
          </div>

          <button className="bg-green-500 text-xl px-6 py-4 rounded-lg text-white hover:bg-green-600 transition">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
