export default function Home() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="../home/home.png"
        alt="Consultant helping family"
        className="w-full h-full object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Overlay Text */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5E9EA8] mb-2 leading-tightest">
          EMPOWER ZONE
        </h1>
        <p className="text-lg md:text-xl text-[#5E9EA8] max-w-2xl mx-auto leading-snug">
          Helping You Applying With Ease
        </p>
      </div>
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center inset-0 bg-[#302641]/40 backdrop-blur-sm rounded-4xl ">
        We at our office are proud to provide the highest quality legal services
     cd   to companies, governmental institutions, and individuals, which
        contributes to building a strong and long-term relationship based on
        mutual trust. We spare no efforts to provide the best legal services to
        achieve optimal outcomes, with our guarantee to protect your legal
        rights and interests
      </div>
    </div>
  );
}
