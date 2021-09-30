const puppeteer = require("puppeteer");

(async () => {
  console.log("Starting scraping...");

  // Lanzamos el navegador
  const browser = await puppeteer.launch({
    headless: false, // Lanzate pero muestrame el navegador
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage(); // Creamos una nueva página
  await page.goto("https://es.wikipedia.org/wiki/Node.js"); // Vamos a esta pag
  await page.screenshot({ path: "example.png" }); // Guardamos la página en una imagen

  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });

  console.log(titulo1);

  console.log("Finished scraping");
  await browser.close(); // Cerramos el navegador
  console.log("Cerramos el navegador");
})();
