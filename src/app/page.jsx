"use client";

import Image from "next/image";
import { useState } from "react";
import ColumnForm from "@my/components/ColumnForm";
import MultiOption from "@my/components/MultiOption";
import DisableState from "@my/components/DisableState";

export default function Home() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzh3FyVVgLVeKU2XIQPwEk7KRC-5kDSIHH61mNWkDx0teGzERDt7hB33oDDQlH_LSzT/exec";

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setSubmitting(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        alert("Thank you! Your form is submitted successfully");
        form.reset();
      } else {
        alert("Error submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Error!", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <div className="flex pt-56 pb-12 md:pt-40 md:pb-0 flex-col md:flex-row items-center justify-center gap-6">
        <Image src="/image 1.png" alt="me" width="128" height="128" />
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
        <form
          method="post"
          action=""
          name="contact-form"
          onSubmit={handleSubmit}
          className="py-12 space-y-4 bg-[#005599] mx-4 md:mx-8 px-4 md:px-96"
        >
          <ColumnForm
            label="Nomor Kepala Keluarga"
            type="text"
            name="Nomor Kartu Keluarga"
            placeholder="Masukkan Nomor Kartu Keluarga"
          />
          <ColumnForm
            label="Nama Kepala Keluarga"
            type="text"
            name="Nama Kepala Keluarga"
            placeholder="Masukkan Nama Kepala Keluarga"
          />
          <MultiOption
            label="Alamat Dusun"
            options={["Pilih Alamat Dusun", "Rejo Makmur"]}
            values={[null, "Rejo Makmur"]}
          />
          <DisableState label="Desa" desa="Sidorejo" />
          <DisableState label="Kecamatan" desa="Sekampung Udik" />
          <DisableState label="Kabupaten" desa="Lampung Timur" />

          <h1 className="text-[#84D25E] font-bold pt-8 pb-4 text-xl">
            P1 - Deskripsi Enumerator
          </h1>
          <ColumnForm
            label="P101 - Nama"
            type="text"
            name="P101 - Nama"
            placeholder="Masukkan Nama"
          />
          <ColumnForm
            label="P102 - Alamat"
            type="text"
            name="Alamat"
            placeholder="Masukkan Alamat"
          />
          <ColumnForm
            label="P103 - Telepon"
            type="number"
            name="P103 - Telepon"
            placeholder="Masukkan Nomor Telepon"
          />

          <h1 className="text-[#84D25E] font-bold pt-8 pb-4 text-xl">
            P2 - Deskripsi Lokasi
          </h1>
          <DisableState label="P201 - Provinsi" desa="Lampung" />
          <DisableState label="P202 - Kabupaten/kota" desa="Lampung Timur" />
          <DisableState label="P203 - Kecamatan" desa="Sekampung Udik" />
          <DisableState label="P204 - Desa" desa="Sidorejo" />
          <MultiOption
            label="P205 - RT/RW"
            options={["Pilih RT/RW", "RW 009/RW 002"]}
            values={[null, "RW 009/RW 002"]}
          />

          <h1 className="text-[#84D25E] font-bold pt-8 pb-4 text-xl">
            P3 - Deskripsi Keluarga
          </h1>
          <ColumnForm
            label="P301 - Nomor KK"
            type="number"
            name="P301 - Nomor KK"
            placeholder="Masukkan Nomor KK"
          />
          <ColumnForm
            label="P302 - NIK Kepala Keluarga"
            type="number"
            name="P302 - NIK Kepala Keluarga"
            placeholder="Masukkan NIK Kepala Keluarga"
          />

          <h1 className="text-[#84D25E] font-bold pt-8 pb-4 text-xl">
            P4 - Pemukiman
          </h1>
          <MultiOption
            label="P401 - Tempat tinggal yang ditempati"
            options={["Milik Sendiri", "Kontrak"]}
            values={["Milik Sendiri", "Kontrak"]}
          />
          <MultiOption
            label="P402 - Status lahan tempat tinggal yang ditempati"
            options={["Milik Sendiri", "Kontrak"]}
            values={["Milik Sendiri", "Kontrak"]}
          />
          <ColumnForm
            label="P403 - Luas lantai tempat tinggal"
            type="number"
            name="P403 - Luas lantai tempat tinggal"
            placeholder="Dalam satuan meter persegi"
          />
          <MultiOption
            label="P404 - Jenis lantai tempat tinggal terluas "
            options={["Marmer", "Granit"]}
            values={["Marmer", "Granit"]}
          />
          <MultiOption
            label="P405 - Dinding sebagian besar rumah"
            options={["Semen", "Beton", "Kayu berkualitas tinggi"]}
            values={["Semen", "Beton", "Kayu berkualitas tinggi"]}
          />
          <MultiOption
            label="P406 - Jendela"
            options={["Ada, Berfungsi", "Tidak ada"]}
            values={["Ada, Berfungsi", "Tidak ada"]}
          />
          <MultiOption
            label="P407 - Atap"
            options={["Genteng", "Seng", "Asbes"]}
            values={["Genteng", "Seng", "Asbes"]}
          />
          <MultiOption
            label="P408 - Penerangan rumah"
            options={["Listrik PLN", "Lilin"]}
            values={["Listrik PLN", "Lilin"]}
          />
          <MultiOption
            label="P409 - Energi untuk memasak"
            options={["Gas kota", "LPG", "Biogas"]}
            values={["Gas kota", "LPG", "Biogas"]}
          />
          <MultiOption
            label="P410 - Jika menggunakan kayu bakar untuk memasak, sumber kayu bakar"
            options={["Pembelian", "Mencari"]}
            values={["Pembelian", "Mencari"]}
          />
          <MultiOption
            label="P411 - Tempat pembuangan sampah"
            options={["Ada", "Tidak ada"]}
            values={["Ada", "Tidak ada"]}
          />
          <MultiOption
            label="P412 - Fasilitas MCK"
            options={["Sendiri", "Umum"]}
            values={["Sendiri", "Umum"]}
          />
          <MultiOption
            label="P413 - Sumber air mandi terbanyak dari"
            options={[
              "Ledeng",
              "Perpipaan berbayar",
              "air isi ulang",
              "Kemasan",
            ]}
            values={[
              "Ledeng",
              "Perpipaan berbayar",
              "air isi ulang",
              "Kemasan",
            ]}
          />

          <div className="flex flex-col items-center justify-center">
            <input
              type="submit"
              value={submitting ? "Submitting..." : "Submit"}
              id="submit"
              disabled={submitting}
              className="flex items-center justify-center w-full rounded-md py-3 px-2 text-white bg-[#84D25E] my-8"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
