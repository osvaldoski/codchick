const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

async function loginTest() {
  // launch the browser
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.manage().deleteAllCookies();
    
    await driver.get("https://club.dantesco.cl/plan?plan=mensual");
    let newUser = makeid(15)+"@gmail.com"
    await driver.findElement(By.id("user_email")).sendKeys(newUser);
    await driver.findElement(By.id("user_password")).sendKeys("999999");
    await driver.findElement(By.id("user_country")).sendKeys("chile");
    await driver.findElement(By.id("user_region")).sendKeys("chile");
    await driver.findElement(By.id("user_phone")).sendKeys("569999999");
    
    await driver.findElement(By.className("login-form__button")).click();
    
    const pageTitle = await driver.getTitle();
    console.log(pageTitle)
    await driver.wait(until.titleIs("Suscripciones"), 4000);
    if(pageTitle=="Suscripciones"){
        console.log("usuario creado")
        console.log(newUser)
    }
    await driver.manage().deleteAllCookies();
    
  } finally {
    await driver.quit();
  }
}
loginTest();

//Vulnerabilidades encontradas

//no valida campos
//script injection->los campos no validan el ingreso de solo texto y etiqueta <script/>
//no valida spam injection
//probable denegacion de servicios
//validacion de largo campos->denegacion bd
//posible baneo de mercado pago por abuso de api (nuevo cliente = nuevo pago)