chrome.runtime.onMessage.addListener(function(request, sender) {
    console.log(request.data);
    let allElements = document.body.getElementsByTagName("*");
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
    if(request.data === 'Fantasy'){
        madlib(allElements, dictFant);
    }
    if(request.data === 'Conspiracy'){
        madlib(allElements, dictConsp);
    }
    if(request.data === 'Noir'){
        madlib(allElements, dictNoir);
    }
})