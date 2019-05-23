let allElements = document.body.getElementsByTagName("*");
// function setDictionary(){
//     if(value == 1){
//         madlib(allElements, dictFant);
//     }
//     if(value == 2){
//         madlib(allElements, dictConsp);
//     }
//     if(value == 3){
//         madlib(allElements, dictNoir);
//     }
//    
//}

function madlib(elements, obj){
    for(let i = 0; i < elements.length; i++){
        elements[i].childNodes.forEach(function(node){
            if(node.nodeType == 3){
               let value = node.nodeValue; 
               for(item in obj){   
                let regex = new RegExp(item, "gi");
                value = value.replace(regex, obj[item]);
               }
               node.nodeValue = value; 
            }
        })
    }
}

const dictNoir = {
    "chrome" : "attemped",
    "extension" : "murder"
};

const dictConsp = {
    "globe" : "flat earth",
    "NASA" : "space-nazis",
    "Millenials" : "bratz"
};

const dictFant = {
    "Senator" : "Elf lord",
    "Trump" : "Sauron",
    "Millenials" : "Jeoffrey"
}

let fantButton = document.getElementById('Fantasy');
let conspButton = document.getElementById('Conspiracy');
let noirButton = document.getElementById('Noir');

madlib(allElements, dictNoir);
fantButton.onclick(madlib(allElements, dictFant));
conspButton.onclick(madlib(allElements, dictConsp));
noirButton.onclick(madlib(allElements, dictNoir));