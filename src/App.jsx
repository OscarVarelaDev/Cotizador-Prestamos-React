import Header from "./components/Header";
import Button from "./components/Button";
import { useState, useEffect } from "react";
import { formatearDinero, calcularTotalPagar } from './helpers/index'
function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6)
  const [total, setTotal] = useState(0)
  const [pago, setPago] = useState(0)
  const MIN = 0
  const MAX = 20000
  const STEP = 100

  useEffect(() => {
    const resutaldo = calcularTotalPagar(cantidad, meses)
    setTotal(resutaldo)
    //Calcular pago mensual

  }, [cantidad, meses])

  useEffect(() => {
    setPago(total / meses)
  }, [total])

  function handleChange(e) {
    setCantidad(+e.target.value);
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP;

    if (valor < MIN) {
      alert("No puedes bajar de 0")
      return;
    }
    setCantidad(valor);

  }
  function handleClickIncremento() {
    const valor = cantidad + STEP;
    if (valor > MAX) {
      alert("No puedes no valida")
      return;
    }

    setCantidad(valor)

  }




  return (
    <div className="my-20 max max-w-lg mx-auto bg-white  shadow p-10 rounded-md">
      <Header />
      <div className="flex justify-between my-14">

      </div>

      <div className="flex justify-between my-6">
        <Button
          operador='-'
          fn={handleClickDecremento}
        />

        <Button
          operador='+'
          fn={handleClickIncremento}
        />
      </div>

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        VALUE={cantidad}
      />
      <p className="text-center text-indigo-600 my-10 text-5xl font-extrabold ">{formatearDinero(cantidad)}
      </p>
      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">plazo</span> a pagar
      </h2>
      <select className="mt-5 w-full p-2 bg-white border text-center text-xl border-gray-300 rounded-lg font-bold text-gray-500" value={meses}
        onChange={e => setMeses(+e.target.value)}


      >
        <option value='6'> 6 Meses </option>
        <option value='12'>12 Meses</option>
        <option value='24'>24 Meses</option>
      </select>
      <div className="my-5 space-y-3 bg-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de pagos</span>
        </h2>
        <p className="text-xl text-center font-bold"> {meses} Meses</p>
        <p className="text-xl text-center font-bold">{formatearDinero(total)} Total a pagar</p>
        <p className="text-xl text-center font-bold">{formatearDinero(pago)}Mensualidades</p>
      </div>
    </div>
  )
}


export default App
