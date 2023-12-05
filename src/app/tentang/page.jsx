import React from "react";
import Image from "next/image";
import Cardsdgs from "@my/components/Cardsdgs";

export const metadata = {
  title: "Tentang | SDGs Desa Sidorejo",
};

const page = () => {
  return (
    <div className="bg-white px-4 md:px-20 py-20">
      <section className="bg-white flex items-center">
        <article class="text-black flex flex-col items-center">
          <Image src="/Logo-SDGs-Desa.png" alt="me" width="250" height="250" />
          <h1 className="font-bold text-2xl text-center my-4">
            Apa itu SDGs Desa?
          </h1>
          <p class="text-base">
            SDGs Desa adalah upaya terpadu mewujudkan Desa tanpa kemiskinan dan
            kelaparan, Desa ekonomi tumbuh merata, Desa peduli kesehatan, Desa
            peduli lingkungan, Desa peduli pendidikan, Desa ramah perempuan,
            Desa berjejaring, dan Desa tanggap budaya untuk percepatan
            pencapaian Tujuan Pembangunan Berkelanjutan. Dalam bahasa kerennya
            Sustainable Development Goals disingkat SDGs. SDGs Desa merupakan
            role pembangunan berkelanjutan yang akan masuk dalam program
            prioritas penggunaan Dana Desa Tahun 2021.
          </p>
        </article>
      </section>
      <section className="grid md:grid-cols-4 lg:grid-cols-6 py-8">
        {Array.from({ length: 18 }, (_, index) => (
          <Cardsdgs key={index} image={`/sdgs/${index + 1}.jpg`} />
        ))}
      </section>
    </div>
  );
};

export default page;
