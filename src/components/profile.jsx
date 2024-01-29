import React from "react";
import Peta from "../assets/gmaps.png";

function Profile() {
  return (

    <section class="text-gray-600 body-font overflow-hidden" id="profile">
      <div class="container px-5 py-36 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            src={Peta}
            alt="Gambar Desa"
            className="w-1/2 h-auto mx-auto rounded-lg"
          />
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            
            <h1 class="text-gray-900 text-4xl title-font font-bold mb-1 ">
                Profil Desa Bercak, Kecamatan Wonosamodro, Kabupaten Boyolali
            </h1>
         
            <p class="leading-relaxed text-justify">
            Desa Bercak merupakan salah satu desa yang termasuk dalam bagian
            dari administrasi Kecamatan Wonosamodro, Kabupaten Boyolali. Desa
            bercak memiliki 3 dusun yang tersebar yaitu dusun bercak kidul,
            dusun bercak lor karangtengah dan dusun bendobobok. Luas total
            wilayah Desa Bercak sekitar 376,63 Hektare atau sekitar 6,40% dari
            seluruh luas wilayah Kecamatan Wonosamodro, adapun batas-batas
            wilayah Desa Bercak Sebagai Berikut
            </p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            
              
            </div>
            <div className="flex mb-4">
            <div className="mr-4">
              <h3 className="text-xl font-bold mb-2">Utara</h3>
              <p className="text-gray-700">Kabuaten Grobogan</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Selatan</h3>
              <p className="text-gray-700">Desa Bojong</p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <h3 className="text-xl font-bold mb-2">Timur</h3>
              <p className="text-gray-700">Kecamatan Juwangi </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Barat</h3>
              <p className="text-gray-700">Desa Bengle</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
