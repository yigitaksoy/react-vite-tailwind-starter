import { useState } from "react";
import "./assets/css/style.css";

function App() {
  const [spin, setSpin] = useState([]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-neutral-900  ">
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl p-20 shadow-xl shadow-slate-700">
        <div className="flow-row flex items-center justify-center gap-12">
          <div>
            <img src="/vite.svg" className="logo h-28 w-28" alt="Vite logo" />
            <p className="py-5 text-center text-xs font-extralight text-zinc-500">
              Vite 4.10
            </p>
          </div>
          <div>
            <img
              src="/react.svg"
              className={`${
                spin ? "animate-spin" : "pause"
              } logo react h-28 w-28`}
              alt="React logo"
            />
            <p className="py-5 text-center text-xs font-extralight text-zinc-500">
              React 18.2
            </p>
          </div>
          <div>
            <img
              src="/tailwind.svg"
              className="h-28 w-28"
              alt="Tailwind logo"
            />
            <p className="py-5 text-center text-xs font-extralight text-zinc-500">
              Tailwind 3.2.7
            </p>
          </div>
        </div>
        <div>
          <h1 className="py-14 text-center font-mono text-3xl font-bold text-neutral-200">
            Hello! 👋
          </h1>
          <div className="text-center text-neutral-200">
            <button
              className="bg-success text-md rounded-md bg-blue-500 px-4 pt-2 pb-2 font-mono leading-loose text-white transition duration-300 hover:bg-blue-600"
              onClick={() => setSpin(!spin)}
            >
              {spin ? "Pause" : "Spin"}
            </button>
          </div>
          <div className="mt-5">
            <p className="text-xs font-extralight text-zinc-500">
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              {" | "}
              <a
                className="App-link"
                href="https://vitejs.dev/guide/features.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite Docs
              </a>
              {" | "}
              <a
                className="App-link"
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind CSS Docs
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
