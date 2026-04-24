// 1. Najdeme si všechny důležité prvky na stránce pomocí jejich ID
const testButton = document.getElementById("testButton");
const userInput = document.getElementById("userInput");
const result = document.getElementById("result");

// 2. Přidáme "posluchač" události - kód uvnitř se spustí po kliknutí na tlačítko
testButton.addEventListener("click", function () {
  
  // Načteme text z políčka a odstraníme zbytečné mezery na začátku a konci
  const predmet = userInput.value.trim();

  // 3. KONTROLA: Pokud uživatel nic nenapsal
  if (predmet === "") {
    result.innerHTML = "<p style='color: red;'>Chyba: Nejprve musíš zadat název předmětu!</p>";
    return; // Funkce skončí a zbytek kódu se neprovede
  }

  // 4. GENEROVÁNÍ TABULKY: Pokud je vstup v pořádku, vytvoříme HTML tabulku
  // Používáme zpětné uvozovky ` ` , které umožňují psát text na více řádků
  const tabulkaHTML = `
    <h3>Plán učení pro předmět: ${predmet}</h3>
    <table border="1" style="border-collapse: collapse; width: 100%; text-align: left;">
      <thead>
        <tr style="background-color: #f2f2f2;">
          <th style="padding: 8px;">Den</th>
          <th style="padding: 8px;">Činnost</th>
          <th style="padding: 8px;">Splněno</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 8px;">Pondělí</td>
          <td style="padding: 8px;">Příprava materiálů a zápisků</td>
          <td style="padding: 8px;">[ ]</td>
        </tr>
        <tr>
          <td style="padding: 8px;">Středa</td>
          <td style="padding: 8px;">Studium teorie a příkladů</td>
          <td style="padding: 8px;">[ ]</td>
        </tr>
        <tr>
          <td style="padding: 8px;">Pátek</td>
          <td style="padding: 8px;">Opakování a cvičný test</td>
          <td style="padding: 8px;">[ ]</td>
        </tr>
      </tbody>
    </table>
  `;

  // 5. ZOBRAZENÍ: Vložíme vytvořenou tabulku do připraveného místa na stránce
  result.innerHTML = tabulkaHTML;
});
