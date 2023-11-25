export const adatLeiras={
    vezetekNev:{
        megjelenes:"vezeték név",
        tipus: "text",
        placeholder: "valaki vagyok",
        pattern: "^[A-Z][a-z]{3}",
        value: "",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie.",
        required: true,
    },

    keresztNev:{
        megjelenes:"kereszt név",
        tipus: "text",
        placeholder: "valaki vagyok",
        pattern: "[A-Z][a-z]{3}",
        value: "",
        szoveg: "Legalább 3 betű, a névnek nagybetűvel kell kezdődnie.",
        required: true,
    },

    szul:{
        megjelenes:"Születési idő",
        tipus: "number",
        value: "2000",
        pattern: {min: "1000", max:"2023"},
        szoveg: "1000 és 2023 közötti számot adhat meg",
        required: false,
       
    },

    
};
