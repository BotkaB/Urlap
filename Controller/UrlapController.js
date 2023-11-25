import UrlapView from "../Wiew/UrlapView.js"



export default class  UrlapController{
    constructor(){
        
        console.log ("controller")
        new UrlapView ($(".urlap"));

        $(window).on("ujAdatHozzaAdasa", (event)=>{
        console.log(event.detail)

        //adatbázisba beilleszteni az adatot
        //dataService  post axios(api végpont, event.detail)
        })
    }
    }
