export default function Form() {
  /*  
  async function handleSubmit() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const celular = document.getElementById('celular').value;
    
        const response = await fetch('http://localhost:3001/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, celular })
        });
    
        const data = await response.json();
        console.log(data);
    }
    */
  return (
    <div id="Form" className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 
    w-fit sm:w-2/3 h-fit">
        <form className="bg-white shadow-md sm:text-sm text-md rounded p-[30px] mb-[16px] text-center">
          <div className="mb-[16px]">
            <label
              className="block text-gray-700  font-bold mb-[8px]"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-[8px] px-[12px]
               text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500/50
                focus:placeholder:text-black/[.06] autofocus"
              id="name"
              type="text"
              placeholder="Nombre"
            />
          </div>
          <div className="mb-[24px]">
            <label
              className="block text-gray-700 font-bold mb-[8px]"
              htmlFor="email"
            >
              Correo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-[8px] px-[12px] text-gray-700 mb-[12px] leading-tight focus:outline-none focus:shadow-blue-500/50 focus:placeholder:text-black/[.06]"
              id="email"
              type="email"
              placeholder="tu@correo.com"
            />
          </div>
          <div className="mb-[24px]">
            <label
              className="block text-gray-700 font-bold mb-[8px]"
              htmlFor="celular"
            >
              Numero de celular
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-[8px] px-[12px] text-gray-700 mb-[12px] leading-tight focus:outline-none focus:shadow-blue-500/50 focus:placeholder:text-black/[.06]"
              id="celular"
              type="number"
              placeholder="+x-xxxxxxxxxx"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold
               py-[8px] px-[16px] rounded focus:outline-none focus:shadow-blue-500/50
                focus:placeholder:text-black/[.06]"
              type="button"
            >
              Regístrate
            </button>
          </div>
        </form>
    </div>
  );
}
