import "./style.css";
import viteLogo from "/vite.svg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    
    <h1>Homework TS 1</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
   
  </div>
`;
