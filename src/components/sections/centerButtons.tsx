import { useState } from "react";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
// Styles must use direct files imports
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

const CenterButtons = () => {
  const jsonRpcUrlMap = {
    // 1: ["https://mainnet.infura.io/v3/<YOUR_INFURA_PROJECT_ID>"],
    137: ["https://polygon-rpc.com"],
  };
  // const CMC_TOKEN_LIST =
  //   "https://cors-anywhere.herokuapp.com/https://api.coinmarketcap.com/data-api/v3/uniswap/all.json";
  const CUSTOM_TOKEN_LIST = [
    {
      name: "Rose",
      address: "0x37e06DEf1c214CF734023CaAF78225D3C6A73e23",
      symbol: "DAI",
      decimals: 18,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x37e06DEf1c214CF734023CaAF78225D3C6A73e23/logo.png",
    },
    {
      name: "Dai Stablecoin",
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      symbol: "DAI",
      decimals: 18,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
    },
    {
      name: "Tether USD",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      symbol: "USDT",
      decimals: 6,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
    },
    {
      name: "USD Coin",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      symbol: "USDC",
      decimals: 6,
      chainId: 1,
      logoURI:
        "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
    },
  ];

  const NATIVE = "0x37e06DEf1c214CF734023CaAF78225D3C6A73e23";
  const WBTC = "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599";

  return (
    <div
      id="Form"
      className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 
      w-[95%] md:w-[50%] h-fit"
    >
      <div className="bg-white shadow-lg sm:text-sm text-md rounded p-[20px] text-center">
        <Swiper
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {/* Slide 1: Voluntarios y Organizaciones */}
          <SwiperSlide style={{ padding: 10 }}>
            <div className="text-center">
              <div style={{ marginBottom: 10 }}>
                <h2 className="font-bold text-md mb-4">Voluntarios</h2>
                <p className="mb-4" style={{ fontSize: 10, marginTop: 5 }}>
                  Toma el primer paso hacia un futuro mejor. Reclama tus 100,000
                  Rose Petal Tokens y regístrate como voluntario para obtener 1
                  millón adicional.
                </p>
              </div>
              <div style={{ marginBottom: 10 }}>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 block w-full"
                  style={{ padding: 10 }}
                >
                  Reclamar 100,000 <br />
                  Tokens
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block w-full"
                  style={{ marginTop: 10, padding: 10 }}
                >
                  Registrarse como <br />
                  Voluntario y Ganar 1 Millón
                </button>
              </div>

              <div style={{ marginBottom: 10 }}>
                <h2 className="font-bold text-md mt-8 mb-4">
                  Para Organizaciones
                </h2>
                <p className="mb-4" style={{ fontSize: 10, marginTop: 5 }}>
                  ¿Representas una organización? Únete al Rose Kingdom para
                  coordinar esfuerzos, compartir recursos y ser parte de nuestra
                  metacomunidad.
                </p>
              </div>
              <div style={{ marginBottom: 10 }}>
                <button
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded block w-full"
                  style={{ padding: 10 }}
                >
                  Unirse como <br />
                  Organización
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2: Uniswap Widget */}
          <SwiperSlide>
            <div className="text-center">
              <h2 className="font-bold text-md mb-4">
                Compra Rose Petal Tokens
              </h2>
              <p
                className="mb-4"
                style={{ fontSize: 10, marginTop: 5, marginBottom: 10 }}
              >
                {/* ¿Necesitas más Rose Petal Tokens? Compra aquí y sigue impulsando
                el cambio. */}
              </p>
              <div className="flex justify-center">
                <SwapWidget
                  width={400}
                  tokenList={CUSTOM_TOKEN_LIST}
                  defaultInputTokenAddress={NATIVE}
                  defaultOutputTokenAddress={WBTC}
                  defaultInputAmount={100}
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3: Redes Sociales */}
          <SwiperSlide>
            <div className="text-center">
              <h2 className="font-bold text-md mb-4">Sigue Nuestra Historia</h2>
              <p className="mb-4"  style={{ fontSize: 10, marginTop: 5, marginBottom: 10 }}>
                Sigue la historia de Mirai y aprende más sobre el Rose Kingdom
                en nuestras redes sociales.
              </p>
              <div className="flex justify-center flex-col items-center">
                <a
                  href="https://www.medium.com/@MiraiEnshi.en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 mb-2"
                  style={{ fontSize: 10, marginTop: 5, marginBottom: 10 }}
                >
                  Mirai Medium (Inglés)
                </a>
                <a
                  href="https://www.medium.com/@Mirai_Enshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 mb-2"
                  style={{ fontSize: 10, marginTop: 5, marginBottom: 10 }}
                >
                  Mirai Medium (Español)
                </a>
                <a
                  href="https://x.com/Mirai_Enshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 mb-2"
                  style={{ fontSize: 10, marginTop: 5, marginBottom: 10 }}
                >
                  Twitter
                </a>
                <a
                  href="https://www.instagram.com/mirai.enshi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700"
                >
                  Instagram
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CenterButtons;
