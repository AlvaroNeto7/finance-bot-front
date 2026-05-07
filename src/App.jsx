import { useState } from "react";

export default function App() {

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  async function sendMessage() {

    const res = await fetch("http://localhost:8081/webhook", {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: message,
    });

    const data = await res.text();

    setResponse(data);
    setMessage("");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">

      <div className="w-full max-w-2xl bg-slate-900 rounded-3xl shadow-2xl p-8 border border-slate-800">

        <div className="mb-8 text-center">

          <h1 className="text-5xl font-bold mb-3 text-emerald-400">
            Finance Bot
          </h1>

          <p className="text-slate-400 text-lg">
            Seu assistente financeiro inteligente
          </p>

        </div>

        <div className="bg-slate-800 rounded-2xl p-6 mb-6">

          <h2 className="text-xl mb-4 font-semibold text-emerald-300">
            Registrar gasto
          </h2>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ex: gastei 50 no ifood"
            className="w-full h-32 rounded-xl bg-slate-900 border border-slate-700 p-4 text-white outline-none resize-none focus:border-emerald-400"
          />

          <button
            onClick={sendMessage}
            className="mt-4 w-full bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 rounded-xl py-4 text-lg font-bold text-slate-900"
          >
            Enviar
          </button>

        </div>

        <div className="bg-slate-800 rounded-2xl p-6 min-h-[180px] border border-slate-700">

          <h2 className="text-xl mb-4 font-semibold text-cyan-300">
            Resposta da IA
          </h2>

          <pre className="whitespace-pre-wrap text-slate-200 text-lg leading-8">
            {response || "Aguardando mensagem..."}
          </pre>

        </div>

      </div>

    </div>
  );
}