import { useState } from "react";
import "./index.css";

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
    <div className="container">

      <div className="card">

        <h1 className="title">Finance Bot</h1>

        <p className="subtitle">
          Seu assistente financeiro inteligente
        </p>

        <div className="section">

          <h2>Registrar gasto</h2>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ex: gastei 50 no ifood"
          />

          <button onClick={sendMessage}>
            Enviar
          </button>

        </div>

        <div className="section">

          <h2>Resposta da IA</h2>

          <div className="response">
            {response || "Aguardando mensagem..."}
          </div>

        </div>

      </div>

    </div>
  );
}