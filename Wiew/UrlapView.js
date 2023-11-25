export default class UrlapView{
    constructor(szuloelem){
    szuloelem.append("<form>");
    this.formElem= szuloelem.find("form")
    console.log(this.formelem);
    this.htmlOsszeallit();
    }


htmlOsszeallit(){
    let txt="";
    txt+=`<div class="mb-3 mt-3">
    <label for="nev" class="form-label">Név:</label>
    <input type="text" class="form-control" id="nev" placeholder="valaki vagyok" name="nev">
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