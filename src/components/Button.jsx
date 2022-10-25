
function Button({operador,fn}) {
    
  return (
    <button
        type="button"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded" 
        onClick={fn}
      >{operador}</button>

  )
}






export default Button