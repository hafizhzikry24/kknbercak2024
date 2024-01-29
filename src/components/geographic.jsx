import React from "react";
import PetaAdministrasi from "../assets/petaadministrasi.png";

function Geographic() {
  return (
    <section className=" bg-[#fffbe4] dark:bg-gray-900 section-intro " id="demographic">
      <div className="grid max-w-screen-xl px-4 py-28 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 ">
          <h1 className="motion-safe:animate-fadeIn max-w-2xl mb-4 text-3xl font-bold title-font tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
            Mengenai Desa Bercak
          </h1>
          <p className="motion-safe:animate-fadeIn max-w-2xl mb-2 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-justify">
            Secara Demografi, Jumlah penduduk Desa Bercak pada tahun 2023
            sekitar 1.808 jiwa yang terdiri dari 918 jiwa perempuan dan 890 jiwa
            laki-laki. Mayoritas penduduk Desa Bercak bekerja sebagai petani,
            sehingga komoditas unggulan Desa Bercak merupakan perkebunan yang
            meliputi jagung, pisang, kelapa dan singkong. hasil dari pertanian
            tersebut di distribusikan sampai ke luar desa. Selain itu dilihat
            dari kondisi fisik alam, Desa bercak memiliki kelerengan yang tidak
            stabil dan Desa Bercak memiliki potensi bencana kekringan. salah
            satu faktor kekeringan yang disebabkan relatif beragam yakni musim
            kemarau berkepanjangan sehingga menyebabkan pasokan kebutuhan air
            menurun.
          </p>
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex rounded-lg mt-4 motion-safe:animate-fadeIn">
          <img
            src={PetaAdministrasi}
            alt="Gambar Desa"
            className="w-full h-auto rounded-lg object-cover lg:object-center"
          />
        </div>
      </div>
      <div class="flex flex-col text-center w-full mb-2">
        
      </div>
    </section>
  );
}

export default Geographic;
