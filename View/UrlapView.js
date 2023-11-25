import { adatLeiras } from "./Adat.js";
import TextUrlapView from "./TextUrlapView.js";

export default class UrlapView {

  #formAdat = {}
  #inputElemObjektumokLista = [] // itt tároljuk azokat az objerktumokat, amelyek létrehozzák a form elemeket
  constructor(szuloelem) {
    szuloelem.append("<form>");
    this.formElem = szuloelem.find("form")
    console.log(this.formElem);
    this.htmlOsszeallit();

    /***submit gomb kezelése
     * 1.létrehozom a gombhoz a kapaszkodót
     * 2. hozzárendelem az eseményt
     * 3. ebben az eseményben összegyűjtöm a form elemeit
     * 4. és elküldöm a kontrollernek.
     */

    this.submitElem = this.formElem.find("#submit");
    console.log(this.submitElem);
    /*this.nevElem = this.formElem.find("#nev");
    this.szulEvElem = this.formElem.find("#szul_ev");*/
    this.submitElem.on("click", (event) => {
      event.preventDefault();

      this.#inputElemObjektumokLista.forEach(

       
        (elem) => {
          this.#formAdat[elem.key]=elem.getValue()
          //console.log(elem)
          //console.log(elem.key)
         this.trigger("ujAdatHozzaadasa")
        }

        
     )

     console.log(this.#formAdat);
     // this.#formAdat.nev = this.nevElem.val();
     // this.#formAdat.szul = this.szulEvElem.val();
      console.log(this.#formAdat);
      this.trigger("ujAdatHozzaAdasa");
    })
  }

  trigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev, { detail: this.#formAdat })
    window.dispatchEvent(e);
  }



  numberUrlapElem(obj, key) {
    let txt = `<div class="mb-3 mt-3">
      <label for="${key}" class="form-label">${obj.megjelenes}</label>
      <input type="${obj.tipus}" class="form-control" id="${key}" 
      placeholder="${obj.placeholder}" min="${obj.pattern.min}"  max="${obj.pattern.max}"
      value="${obj.value}" name="${key}">
      </div>`

    return txt

  }

  htmlOsszeallit() {
    let txt = "";

    for (const key in adatLeiras) {
      switch (adatLeiras[key].tipus) {
        case "text":
          this.#inputElemObjektumokLista.push(new TextUrlapView(this.formElem, adatLeiras[key], key))
          break;
        case "number":
          txt += this.numberUrlapElem(adatLeiras[key], key)
          break;

        default:
          break;
      }

    }

    //console.log(this.#inputElemObjektumokLista)


    txt += `<div class="mb-3 mt-3">
   
    <input type="submit"  id="submit" value="küld">
    </div>`
    this.formElem.append(txt)
  }
}