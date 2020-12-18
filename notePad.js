
// function Note(date,title,note){
//     this.date=date;
//     this.title=title;
//     this.note=note;
//     this.titlelist=function(){
//         return this.title+"\n"+"-------------"
//     }
// }

//  var notes=[];



function save(){
    var title= document.getElementById("title").value;
    console.log(title);
    var li = document.createElement("li");
        li.innerHTML = title;  
        document.getElementById("ul").appendChild(li);
}        

var li= getElementsByTag("li");

    
        
