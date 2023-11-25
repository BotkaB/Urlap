import UrlapView from "../Wiew/UrlapView.js"



export default class  UrlapController{
    constructor(){
        
        console.log ("controller")
        new UrlapView ($(".urlap"));
        }
    }
