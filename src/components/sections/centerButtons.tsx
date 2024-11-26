"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "@uniswap/widgets/fonts.css";

// Importaciones de Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importación de íconos
import { FaMedium, FaXTwitter, FaInstagram } from "react-icons/fa6";

// Importación dinámica del SwapWidget con ssr: false
const SwapWidget = dynamic(
  () => import("@uniswap/widgets").then((mod) => mod.SwapWidget),
  { ssr: false }
);

const CenterButtons = () => {
  const jsonRpcUrlMap = {
    137: ["https://polygon-rpc.com"],
  };

  const CUSTOM_TOKEN_LIST = [
    {
      name: "RPT",
      address: "0x37e06DEf1c214CF734023CaAF78225D3C6A73e23",
      symbol: "DAI",
      decimals: 18,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x37e06DEf1c214CF734023CaAF78225D3C6A73e23/logo.png",
    },
    {
      name: "MATIC",
      address: "0x37e06DEf1c214CF734023CaAF78225D3C6A73e23",
      symbol: "DAI",
      decimals: 18,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x37e06DEf1c214CF734023CaAF78225D3C6A73e23/logo.png",
    },
  ];

  const NATIVE = "0x37e06DEf1c214CF734023CaAF78225D3C6A73e23";
  const WBTC = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";

  return (
    <div
      id="Form"
      className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 sm:w-[90vw] w-[40vw] h-fit"
    >
      <div className="relative">
        <div className="bg-white shadow-lg sm:text-sm text-md rounded p-[15px] text-center mt-[10px]">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            spaceBetween={50}
            slidesPerView={1}
          >
            {/* Slide 1: Voluntarios y Organizaciones */}
            <SwiperSlide className="px-[10px] flex justify-center items-center align-middle content-center justify-items-center">
              <div className="text-center mt-[20px]">
                <div className="px-[20px]" style={{ marginBottom: 10 }}>
                  <h2 className="font-bold sm:text-sm text-md mb-4">
                    Voluntarios
                  </h2>
                  <p className="mb-4 text-sm" style={{ marginTop: 5 }}>
                    Toma el primer paso hacia un futuro mejor. Reclama tus
                    100,000 Rose Petal Tokens y regístrate como voluntario para
                    obtener 1 millón adicional.
                  </p>
                </div>
                <div
                  className="grid grid-cols-1 gap-[10px] justify-center items-center"
                  style={{ marginBottom: 30 }}
                >
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mb-4 block text-sm w-full"
                    style={{ padding: 10 }}
                  >
                    Reclamar 100k RPT
                  </button>
                  <a
                    href="https://forms.gle/ffVoe5aZZbKXMrJK7"
                    target="_blank"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block text-sm w-full"
                    style={{ padding: 10 }}
                  >
                    Reggístrate como voluntario
                  </a>
                </div>

                <div className="px-[20px]" style={{ marginBottom: 10 }}>
                  <h2 className="font-bold sm:text-sm text-md mt-8 mb-4">
                    Para Organizaciones
                  </h2>
                  <p className="mb-4 text-sm" style={{ marginTop: 5 }}>
                    ¿Representas una organización? Únete al Rose Kingdom para
                    coordinar esfuerzos, compartir recursos y ser parte de
                    nuestra metacomunidad.
                  </p>
                </div>
                <div className="flex gap-[10px] justify-center items-center">
                  <a
                    href="https://forms.gle/7Qx16yHiMcYLHAxU6"
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded block w-full text-sm"
                    style={{ padding: 10 }}
                  >
                    Unirse
                  </a>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2: Uniswap Widget */}
            <SwiperSlide>
              <div className="text-center mt-[20px]">
                <h2 className="font-bold sm:text-sm text-md mb-[20px]">
                  Compra Rose Petal Tokens
                </h2>
                <div className="flex justify-center">
                  <SwapWidget
                  width={300}
                  tokenList={CUSTOM_TOKEN_LIST}
                  defaultInputTokenAddress={NATIVE}
                  defaultOutputTokenAddress={WBTC}
                  defaultInputAmount={100}
                  jsonRpcUrlMap={jsonRpcUrlMap}
                />
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3: Redes Sociales */}
            <SwiperSlide className="px-[40px]">
              <div className="text-center mt-[20px]">
                <p
                  className="mb-4"
                  style={{ fontSize: 10, marginTop: 5, marginBottom: 10 }}
                >
                  Sigue la historia de Mirai y aprende más sobre el Rose Kingdom
                  en nuestras redes sociales.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: 40, // Elimina el `mt-6` de Tailwind para un centrado completo
                  }}
                >
                  <a
                    href="https://www.instagram.com/mirai.enshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 70, marginBottom: 15 }}
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.medium.com/@MiraiEnshi.en"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 70, marginBottom: 15 }}
                  >
                    <FaMedium />
                  </a>
                  <a
                    href="https://x.com/Mirai_Enshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 70, marginBottom: 15 }}
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* Estilos personalizados para reducir el tamaño de las flechas */}
          <style jsx global>{`
            .swiper-button-next,
            .swiper-button-prev {
              color: #000;
              width: 20px;
              height: 20px;
              top: 10%;
              transform: translateY(-50%);
            }

            .swiper-button-next:after,
            .swiper-button-prev:after {
              font-size: 20px;
            }

            .swiper-button-next {
              right: 10px;
              z-index: 50;
            }

            .swiper-button-prev {
              left: 10px;

              z-index: 50;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default CenterButtons;
