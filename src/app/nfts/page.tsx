import React from 'react'

type Props = {}

const NFTCarousel = (props: Props) => {
    return (
        <div className='flex flex-col space-y-4 w-screen h-screen bg-black'>
            <h2 className='text-white text-center mt-[38px]'>Sé parte del cambio</h2>
            <div className="h-[250px] m-auto w-auto whitespace-nowrap">
                <div className="inline-block w-[calc(270px*8)] animate-bannermove">
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/1-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/2-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/3-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/4-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/5-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/6-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/7-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/8-min.png" alt="" />
                </div>
                <div className="inline-block w-[calc(270px*8)] animate-bannermove">
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/1-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/2-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/3-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/4-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/5-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/6-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/7-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/8-min.png" alt="" />
                </div>
            </div>
            <div className="h-[250px] m-auto w-auto whitespace-nowrap">
                <div className="inline-block w-[calc(270px*8)] animate-bannermoveright">
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/9-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/10-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/11-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/12-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/13-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/14-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/15-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/16-min.png" alt="" />
                </div>
                <div className="inline-block w-[calc(270px*8)] animate-bannermoveright">
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/9-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/10-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/11-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/12-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/13-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/14-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/15-min.png" alt="" />
                    <img className='inline-block w-[250px] mr-[20px] shadow-sm' src="/Pictures/rosenft/16-min.png" alt="" />
                </div>
            </div>
            <div className="absolute top-[35%] w-screen">
                <div className="w-full max-w-sm mx-auto">
                    <form className="bg-white shadow-md rounded p-[30px] mb-[16px] text-center">
                        <div className="mb-[16px]">
                            <label className="block text-gray-700 text-sm font-bold mb-[8px]" htmlFor="name">
                                Nombre
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-[8px] px-[12px] text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500/50 focus:placeholder:text-black/[.06] autofocus" id="name" type="text" placeholder="Nombre" />
                        </div>
                        <div className="mb-[24px]">
                            <label className="block text-gray-700 text-sm font-bold mb-[8px]" htmlFor="email">
                                Correo
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-[8px] px-[12px] text-gray-700 mb-[12px] leading-tight focus:outline-none focus:shadow-blue-500/50 focus:placeholder:text-black/[.06]" id="email" type="email" placeholder="tu@correo.com" />
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[8px] px-[16px] rounded focus:outline-none focus:shadow-blue-500/50 focus:placeholder:text-black/[.06]" type="button">
                                Regístrate
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NFTCarousel;