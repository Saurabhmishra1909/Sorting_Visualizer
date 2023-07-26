const n=20;
const array=[];
init();
function init(){
    for(let i=0;i<n;i++){
        array[i]=~~(100*Math.random());
    }
    ShowBars();
}

function play(){
    const copy=[...array];
    const moves=bubbleSort(copy);
    animate(moves);
}

function animate(moves){
    if(moves.length==0){
        ShowBars();
        return;
    }
    const move=moves.shift();
    const[i,j]=move.indices;
    if(move.type=="swap"){
        [array[i],array[j]]=[array[j],array[i]];
    }
    ShowBars(move);
    setTimeout(function(){
        animate(moves);
    },100 );
}


//Bubble Sort
function bubbleSort(array){
    const moves=[];
    do{
        var swapped=false;
        for(let i=1;i<array.length;i++){
            moves.push({indices:[i-1,i],type:"comp"});
            if(array[i-1]>array[i]){
                swapped=true;
                moves.push({indices:[i-1,i],type:"swap"});
                [array[i-1],array[i]]=[array[i],array[i-1]]        
            }
        }
        console.log(array);
    }while(swapped);
    return moves;
}


function ShowBars(move){
    container.innerHTML="";
    for(let i=0;i<array.length;i++){
        const bar=document.createElement("div");
        bar.style.height=array[i]+"%";
        bar.classList.add("bar");

        if(move&& move.indices.includes(i)){
            bar.style.backgroundColor=
                move.type=="swap"?"grey":"red";
        }
        container.appendChild(bar);
    }
}
  