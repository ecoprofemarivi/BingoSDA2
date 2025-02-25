"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const afirmaciones = [
  "He inventado un juego propio",
  "He colaborado en una idea original",
  "He encontrado una solución inesperada",
  "Me gusta dibujar o hacer bocetos",
  "He creado con materiales reciclados",
  "Soy bueno/a improvisando",
  "Me entusiasma descubrir cosas nuevas",
  "Hago preguntas fuera de lo común",
  "Disfruto imaginando futuros posibles",
  "He cambiado una regla de un juego",
  "He escrito una historia original",
  "He compuesto una melodía",
  "He diseñado un logo o cartel",
  "He resuelto un acertijo difícil",
  "He creado una receta nueva",
  "He hecho un experimento científico",
  "He inventado un personaje ficticio",
  "He decorado mi espacio de forma única",
  "He creado un baile o coreografía",
  "He construido algo con LEGO sin instrucciones",
  "He ideado una forma de reciclar",
  "He inventado un idioma o código secreto",
  "He personalizado mi ropa o accesorios",
  "He creado un meme original",
]

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export default function BingoCreatividad() {
  const [casillas, setCasillas] = useState(() => {
    const shuffled = shuffleArray([...afirmaciones])
    return [...shuffled.slice(0, 12), "He transformado un error en una oportunidad", ...shuffled.slice(12, 24)]
  })
  const [marcadas, setMarcadas] = useState<boolean[]>(new Array(25).fill(false))

  const toggleMarcada = (index: number) => {
    const nuevasMarcadas = [...marcadas]
    nuevasMarcadas[index] = !nuevasMarcadas[index]
    setMarcadas(nuevasMarcadas)
  }

  const reiniciarJuego = () => {
    setCasillas((prev) => {
      const shuffled = shuffleArray([...afirmaciones])
      return [...shuffled.slice(0, 12), "He transformado un error en una oportunidad", ...shuffled.slice(12, 24)]
    })
    setMarcadas(new Array(25).fill(false))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-amber-50 p-4">
      <Card className="w-full max-w-2xl bg-white shadow-xl rounded-lg overflow-hidden">
        <CardContent className="p-6">
          <h1 className="text-4xl font-bold text-center mb-6 text-amber-600">BINGO DE LA CREATIVIDAD</h1>
          <div className="grid grid-cols-5 gap-2 mb-4">
            {"BINGO".split("").map((letra, i) => (
              <div key={i} className="bg-amber-500 text-white text-center font-bold py-2">
                {letra}
              </div>
            ))}
            {casillas.map((casilla, index) => (
              <button
                key={index}
                onClick={() => toggleMarcada(index)}
                className={`aspect-square p-1 border-2 border-amber-300 rounded ${
                  index === 12 ? "bg-amber-200" : marcadas[index] ? "bg-green-200" : "bg-white"
                } transition-colors duration-200`}
              >
                <span className="text-xs font-medium text-gray-800 break-words">{casilla}</span>
              </button>
            ))}
          </div>
          <div className="flex justify-center">
            <Button
              onClick={reiniciarJuego}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition-all duration-200"
            >
              Nuevo Cartón
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

