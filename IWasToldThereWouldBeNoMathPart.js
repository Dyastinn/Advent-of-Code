
function IWasToldThereWouldBeNoMathPartOne(strList){
    let totalBox = 0
    for(let i = 0; i < strList.length; i++){

        const dimensions = strList[i].split('x') 

        let l = 2*(dimensions[0])*(dimensions[1]);
        let w = 2*(dimensions[1])*(dimensions[2]);
        let h = 2*(dimensions[2])*(dimensions[0]);

        let minValue = Math.min(l/2, w/2, h/2);

        totalBox += l + w + h + minValue
    }

    return totalBox
}

function IWasToldThereWouldBeNoMathPartTwo(strList){
    let totalBox = 0
    for(let i = 0; i < strList.length; i++){

        const dimensions = strList[i].split('x') 

        let l = (dimensions[0])
        let w = (dimensions[1])
        let h = (dimensions[2])
 
        let ribbon =  (2 * l + 2 * w + 2 * h) - (Math.max(l, w, h)) * 2;
  
        totalBox += (l * w * h) + ribbon

    }

    return totalBox
}


