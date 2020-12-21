
function Note(date,title,note){
    this.date= date;
    this.title= title;
    this.note= note;
}


init();

function save(){
     const date = new Date();
     const title = document.getElementById("title").value;
     const note = document.getElementById("note").value;
     const theNote = new Note(date, title, note);
     saveNotes(theNote);
     document.getElementById("title").value='';
     document.getElementById("note").value='';
     init();
 }


function saveNotes(note){
    
    let noteArray= JSON.parse(localStorage.getItem('note'));
    if(noteArray ==null ){
        noteArray=new Array();
        noteArray.push(note);
    } else {
        noteArray.push(note);
    }
    localStorage.setItem('note', JSON.stringify(noteArray));
    
}    
    

function init(){
    
    document.getElementById("container").innerHTML="";
    let noteArray= JSON.parse(localStorage.getItem('note'));
    if(noteArray !=null && noteArray !=""){
        
        for(let x=0; x<noteArray.length; x++){
         
        var box = document.createElement("div");
        box.setAttribute("class", "box");

        var notedate=document.createElement("h5");
        notedate.innerHTML = "Date: " + noteArray[x].date ;  
        
        var subject = document.createElement("h4");
        subject.innerHTML = "title: " + noteArray[x].title ;    
        
        var body= document.createElement("p");
        body.innerHTML = "note:"+noteArray[x].note;
        
        var remove = document.createElement("button");
        remove.innerHTML= "Delete";
        remove.setAttribute("id","remove");
        
        box.appendChild(notedate);
        box.appendChild(subject);
        box.appendChild(body);
        box.appendChild(remove);
        document.getElementById("container").appendChild(box);
        remove.addEventListener("click", function(){
        noteArray.splice(x,1);
        localStorage.setItem('note',JSON.stringify(noteArray));
        init();
        });
 
           
      }
    }
}

