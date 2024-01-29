import React from "react";
import Logo from "../assets/favicon-32x32.png";
import KKN from "../assets/kknbercak.png"

function Footer() {
  return (
    <footer class="text-gray-600 body-font bg-[#fffbe4] ">
      <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
        <img
            src={KKN}
            alt="Gambar Desa"
            className="w-1/2 h-auto rounded-lg object-cover lg:object-center mx-auto"
          />
          
    </div>
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span class=" text-gray-500 text-m text-center sm:text-left">
              ©KKNTIM1DesaBercak2024
            </span>
          </a>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-1 -mb-10 md:mt-0 mt-10 md:text-left text-center mx-3">
          <div class="lg:w-1/4 md:w-1/2 w-full ">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Dzikrina Fatahul Nur Ifa
            </h2>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full ">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Khadis Satria Wibisono
            </h2>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full ">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Muhammad Choirul Mahmud S
            </h2>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full ">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Nadia Eki Salsabila
            </h2>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full ">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Nauroh Hasniyah Bilizzahtur R
            </h2>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full ">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Rahmat Mukhalin
            </h2>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full ">
            <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Zaenab Annabelah
            </h2>
          </div>
        </div>
  </div>
      
      <div class="bg-[#F4F27E] ">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img alt="gallery" src={Logo} />
            <span class=" ml-3 text-l title-font font-bold">Desa Bercak</span>
          </a>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              href=" https://linktr.ee/DesaBercak"
              class="ml-3 text-gray-500"
            >
              <svg
                fill="#707070"
                viewBox="0 0 24 24"
                role="img"
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#707070"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.89h1.294v4.776c0 .486-.404.89-.89.89H6.577a.898.898 0 0 1-.889-.891v-4.774H.992c-.728 0-1.214-.729-.89-1.377l6.96-12.627a1.065 1.065 0 0 1 1.863 0l2.913 5.585-3.885 7.042zm15.945 0-6.96-12.627a1.065 1.065 0 0 0-1.862 0l-2.995 5.586 3.885 7.04c.081.164.081.326.081.487-.08.517-.529.897-1.052.89h-1.296v4.776c.005.49.4.887.89.89h2.914a.9.9 0 0 0 .892-.89v-4.775h4.612c.73 0 1.214-.729.89-1.377z"></path>
                </g>
              </svg>
            </a>

            <a class="ml-3 text-gray-700" href="https://desabercak.gis.co.id">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M21 12L12 16L3.00001 12M21 16L12 20L3 16M21 8L12 12L3.00001 8L12 4L21 8Z"
                    stroke="#6f6d6d"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
