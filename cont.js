

function khadija(){
    let comment=document.querySelector('#comment').value;
    let name=document.querySelector('#name').value;
    let address=document.querySelector('#address').value;
    let email=document.querySelector('#email').value;
    localStorage.setItem("jina",name);
    localStorage.setItem("address",address);
    localStorage.setItem("paruapepe",email);
    localStorage.setItem("maoni",comment);
};

let myname=localStorage.getItem('jina');
let myaddress=localStorage.getItem('address');
let myemail=localStorage.getItem('paruapepe');
let mycomment=localStorage.getItem('maoni');

let khadijamm=document.getElementById('mynames');
let punda=document.getElementById('myadresse');
let kuku=document.getElementById('mayemail');
let mahmud=document.getElementById('comm');


if(myname && myaddress){
    if(myemail && mycomment){
        khadijamm.innerHTML = `name: ${myname}`;
        punda.innerHTML = `name: ${myaddress}`
        kuku.innerHTML = `name: ${myemail}`
        mahmud.innerHTML = `name: ${mycomment}`
    };
};


// console.log(name);
// console.log(address);
// console.log(comment);
// console.log(email);














// let button=document.querySelector('#submit').value;
// let textArea=document.getElementById('comment').value;
// let name=document.getElementById('name').value;
// let email=document.getElementById('email').value;
// let contact={name:name,email:email,comment:comment};
// let contacts=JSON.parse(localStorage.getItem("contacts"))||[];
// contacts.push(contact)
// localStorage.setItem("contacts",JSON.stringify(contacts));
// alert(`thank you ${name} for your comment ${comment}`);
// contactform.reset();

// button.addEventListener('click',function(){
//     if (textArea === ""){
//         alert("must be comment")
//     }else{
//         alert("form is submitted")
//     }
// });

