export default class UrlapView{

  #formAdat={}
    constructor(szuloelem){
    szuloelem.append("<form>");
    this.formElem= szuloelem.find("form")
    console.log(this.formElem);
    this.htmlOsszeallit();

    /***submit gomb kezelése
     * 1.létrehozom a gombhoz a kapaszkodót
     * 2. hozzárendelem az eseményt
     * 3. ebben az eseményben összegyűjtöm a form elemeit
     * 4. és elküldöm a kontrollernek.
     */

    this.submitElem=this.formElem.find("#submit");
    console.log( this.submitElem);
    this.nevElem=this.formElem.find("#nev");
    this.szulEvElem=this.formElem.find("#szul_ev");
    this.submitElem.on("click", (event)=>{
      event.preventDefault();
    this.#formAdat.nev=this.nevElem.val();
    this.#formAdat.szul=this.szulEvElem.val();
    console.log(this.#formAdat);
    this.trigger("ujAdatHozzaAdasa");
    })
    }

trigger(esemenyNev){
  const e =new CustomEvent(esemenyNev,{detail:this.#formAdat})
  window.dispatchEvent(e);
}

htmlOsszeallit(){
    let txt="";
    txt+=`<div class="mb-3 mt-3">
    <label for="nev" class="form-label">Név:</label>
    <input type="text" class="form-control" id="nev" placeholder="valaki vagyok" pattern="[A-Z][a-z]{3}" name="nev">
    </div>`

    txt+=`<div class="mb-3 mt-3">
    <label for="szul_ev" class="form-label">Születési év</label>
    <input type="number" class="form-control" id="szul_ev" value="1975"min="1000" max="2500" name="szul_ev">
    </div>`

    txt+=`<div class="mb-3 mt-3">
   
    <input type="submit"  id="submit" value="küld">
    </div>`
this.formElem.append(txt)
  }
}