import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white gap-8">
      {/* Contenedor de Logos */}
      <div className="flex gap-10">
        <img src={viteLogo} className="h-20 animate-bounce" alt="Vite logo" />
        <img src={reactLogo} className="h-20 animate-spin-slow" alt="React logo" />
      </div>

      <h1 className="text-5xl font-black bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Citapp + Vite
      </h1>

      <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl text-center">
        <p className="text-slate-400 mb-4 font-mono">Contador de clics:</p>
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all px-6 py-3 rounded-xl font-bold text-xl"
        >
          El valor es {count}
        </button>
      </div>

      <p className="text-slate-500 text-sm italic">
        Configuración exitosa con Tailwind v4 y pnpm
      </p>
    </div>
  )
}

export default App