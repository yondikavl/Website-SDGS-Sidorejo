"use client";

import React from "react";
import { useState } from "react";
import ColumnForm from "@my/components/Form/ColumnForm";
import MultiOption from "@my/components/Form/MultiOption";
import DisableState from "@my/components/Form/DisableState";

const Submit = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyzgTMvr8Qy1I1NqvazELYkA1NH3XvplCbi0nKu18DZXcqUWQohNTKqfWemEJuq4VA/exec";

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
        alert("Terima Kasih! Data berhasil dimasukkan.");
        form.reset();
      } else {
        alert("Data gagal dimasukkan! coba lagi.");
      }
    } catch (error) {
      console.error("Eror!", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      method="post"
      action=""
      name="contact-form"
      onSubmit={handleSubmit}
      className="py-12 space-y-4 bg-gradient-to-b from-blue-800 to-slate-900 px-4 md:px-96"
    >
      <ColumnForm
        label="Nomor Kepala Keluarga"
        type="number"
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
      <DisableState label="Desa" desa="Sidorejo" type="text" />
      <DisableState label="Kecamatan" desa="Sekampung Udik" type="text" />
      <DisableState label="Kabupaten" desa="Lampung Timur" type="text" />

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
        name="P102 - Alamat"
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
      <DisableState label="P201 - Provinsi" desa="Lampung" type="text" />
      <DisableState
        label="P202 - Kabupaten/kota"
        desa="Lampung Timur"
        type="text"
      />
      <DisableState
        label="P203 - Kecamatan"
        desa="Sekampung Udik"
        type="text"
      />
      <DisableState label="P204 - Desa" desa="Sidorejo" type="text" />
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
        options={["Ledeng", "Perpipaan berbayar", "air isi ulang", "Kemasan"]}
        values={["Ledeng", "Perpipaan berbayar", "air isi ulang", "Kemasan"]}
      />
      <MultiOption
        label="P414 - Fasilitas buang air besar"
        options={["Jamban Sendiri", "Jamban Bersama"]}
        values={["Jamban Sendiri", "Jamban Bersama"]}
      />
      <MultiOption
        label="P415 - Sumber air minum terbanyak dari"
        options={["Ledeng", "Perpipaan Berbayar", "Air isi ulang", "Kemasan"]}
        values={["Ledeng", "Perpipaan Berbayar", "Air isi ulang", "Kemasan"]}
      />
      <MultiOption
        label="P416 - Tempat pembuangan limbah cair"
        options={["Tangki", "Instalasi pengelolaan limbah"]}
        values={["Tangki", "Instalasi pengelolaan limbah"]}
      />
      <MultiOption
        label="P417 - Rumah berada di bawah SUTET/SUT/SUTTAS"
        options={["Ya", "Tidak"]}
        values={["Ya", "Tidak"]}
      />
      <MultiOption
        label="P418 - Rumah di bantaran sungai"
        options={["Ya", "Tidak"]}
        values={["Ya", "Tidak"]}
      />
      <MultiOption
        label="P419 - Rumah di lereng bukit/gunung"
        options={["Ya", "Tidak"]}
        values={["Ya", "Tidak"]}
      />
      <MultiOption
        label="P420 - Secara keseluruhan kondisi rumah"
        options={["Bersih", "Kumuh"]}
        values={["Bersih", "Kumuh"]}
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
  );
};

export default Submit;
