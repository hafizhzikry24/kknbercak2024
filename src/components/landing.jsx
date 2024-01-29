import React from "react";
import Land from "../assets/cov.jpg";

function Landing() {
  // Ganti path ke landing.png sesuai dengan struktur folder Anda
  const backgroundImage = `url(${Land})`;

  return (
    <section
      className="text-gray-600 body-font overflow-hidden shadow-2xl" id="landing"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 0, 0.1), rgba(255, 200, 0, 0.25)), ${backgroundImage}`, 
        backgroundSize: "100% 100%", // Menyesuaikan ukuran gambar sesuai section
      }}
    >
      <div class="container px-5 py-36 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-6xl text-5xl font-medium title-font mb-4 text-[#e2ffd7] font-serif">
            SELAMAT DATANG DI DESA BERCAK
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-[#ebefb6] font-mono">
            Merupakan sebuah website yang berisi profil, kondisi geografis dan potensi dari desa bercak yang berada di Kecamatan Wonosamodro, Kabupaten Boyolali, Jawa Tengah.
          </p>
        </div>
       
      </div>
    </section>
    
  );
}

export default Landing;
