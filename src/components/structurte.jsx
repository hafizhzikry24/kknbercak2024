import Struktur from "../assets/petaadm.png";
import React from "react";

function Structure() {
  return (
    <section
      className="  dark:bg-gray-900 section-intro "
      id="structure"
    >
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6  object-cover object-center rounded"
          alt="hero"
          src={Struktur}
        />
        <div class="text-center lg:w-3/3 w-full">
          <h1 class="title-font sm:text-4xl text-3xl mb-5 font-medium text-gray-900">
            Struktur Organisasi Desa Bercak
          </h1>
          <h2 class="text-gray-900 title-font font-medium">Nur Ichsan</h2>
          <p class="text-gray-500">Kepala Desa</p>
          <div class="flex-grow flex flex-wrap md:pl-20 md:mt-4 my-2 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full my-2 ">
              <h2 class="text-gray-900 title-font font-medium">Suharno</h2>
              <p class="text-gray-500">Sekretaris Desa</p>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full my-2 ">
              <h2 class="text-gray-900 title-font font-medium">Mulyono</h2>
              <p class="text-gray-500">Kepala Urusan Umum dan Perencanaan </p>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full my-2 ">
              <h2 class="text-gray-900 title-font font-medium">Nyuwarto</h2>
              <p class="text-gray-500">Kepala Urusan Keuangan</p>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full my-2 ">
              <h2 class="text-gray-900 title-font font-medium">Sugiyanto</h2>
              <p class="text-gray-500">Kepala Seksi Pemerintahan</p>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full my-2 ">
              <h2 class="text-gray-900 title-font font-medium">
                Purwo Agung W
              </h2>
              <p class="text-gray-500">
                Kepala Seksi Kesejahteraan dan Pelayanan
              </p>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full my-2 ">
              <h2 class="text-gray-900 title-font font-medium">Martoyo</h2>
              <p class="text-gray-500">Kadus I</p>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full my-2 ">
              <h2 class="text-gray-900 title-font font-medium">Nurhadi</h2>
              <p class="text-gray-500">Kadus II</p>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full my-2 ">
              <h2 class="text-gray-900 title-font font-medium">Muh Hantoro</h2>
              <p class="text-gray-500">Kadus III</p>
            </div>
          </div>

          {/* <div class="flex justify-center">
            <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Button
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Structure;
