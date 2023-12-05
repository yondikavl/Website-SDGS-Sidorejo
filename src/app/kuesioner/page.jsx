import Submit from "@my/components/Form/Submit";

export const metadata = {
  title: "Pendataan | SDGs Desa Sidorejo",
};

const page = () => {
  return (
    <main className="bg-white min-h-screen">
      <div className="flex pt-28 pb-12 md:pt-20 md:pb-0 flex-col md:flex-row items-center justify-center gap-6">
        <div className="text-left px-4 md:py-20 flex flex-col">
          <h1 className="font-bold text-slate-800 text-2xl md:text-6xl">
            FORM SURVEY PENDATAAN
          </h1>
          <p className="font-bold text-[#0099CB] text-lg md:text-2xl">
            SDGs Desa Sidorejo, Kec. Sekampung Udik, Kab. Lampung Timur
          </p>
        </div>
      </div>
      <div className="mx-auto">
        <div className="flex mx-4 md:mx-8">
          <div className="bg-[#FD6633] flex-1 py-2"></div>
          <div className="bg-[#84D25E] flex-1 py-2"></div>
          <div className="bg-[#FECD01] flex-1 py-2"></div>
        </div>
        <Submit />
      </div>
    </main>
  );
};

export default page;
