import { useState } from "react";
import { SwapWidget } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";

const CenterButtons = () => {
  const [showSwapWidget, setShowSwapWidget] = useState(false);
  const jsonRpcUrlMap = {
    1: ["https://mainnet.infura.io/v3/<YOUR_INFURA_PROJECT_ID>"],
    3: ["https://ropsten.infura.io/v3/<YOUR_INFURA_PROJECT_ID>"],
  };

  const handleUniswapClick = () => {
    setShowSwapWidget(true); // Mostrar el SwapWidget y ocultar los demás botones
  };

  const handleBackClick = () => {
    setShowSwapWidget(false); // Regresar al estado inicial
  };

  return (
    <div
      id="Form"
      className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 
      w-[95%] md:w-[50%] h-fit"
    >
      <div className="bg-white shadow-lg sm:text-sm text-md rounded p-[40px] mb-[16px] text-center">
        {/* Mostrar SwapWidget o los botones de registro/redes sociales */}
        {!showSwapWidget ? (
          <>
            <div className="mb-[16px]">
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[12px] px-[24px] rounded mb-[12px] block w-full"
              >
                Registro de Voluntarios
              </a>
              <a
                href="#"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-[12px] px-[24px] rounded block w-full"
              >
                Registro para Organizaciones
              </a>
            </div>
            <div className="mt-[24px] mb-[16px]">
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-[12px] px-[24px] rounded w-full text-lg"
                type="button"
                onClick={handleUniswapClick}
              >
                Uniswap
              </button>
            </div>
            <div className="flex justify-center flex-wrap space-x-0 sm:space-x-[16px] space-y-[10px] sm:space-y-0 mt-[20px] items-center">
              
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700 block sm:inline"
              >
                Instagram
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 block sm:inline"
              >
                Twitter
              </a>
            </div>
          </>
        ) : (
          <div style={{padding: -100}}>
            <SwapWidget
              width={200}
              provider={undefined} // Reemplazar con un provider si usas una wallet conectada
              jsonRpcUrlMap={jsonRpcUrlMap}
            />
            <div className="mt-[16px]">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-[10px] px-[20px] rounded w-full"
                onClick={handleBackClick}
              >
                Volver
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CenterButtons;
