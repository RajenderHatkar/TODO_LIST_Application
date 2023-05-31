//creating class for implementing design to different category 
let designcl = ['work','Personal','Claeaning','Others'] 
$(document).ready(function(){

    // getting all the class name categories
    let categories= document.getElementsByClassName('catesec'); 
    // looping in the  categories to find the which categry class belongs and implement according sesign check home.css to get the color of eact section
        for(let i=0;i<categories.length;i++){ 
            if(categories[i].innerHTML.trim()=='Work'){ 
               categories[i].classList.add(designcl[0])
               categories[i].classList.add('commonClass')
            }
            else if(categories[i].innerHTML.trim()=='Personal'){
                categories[i].classList.add(designcl[1])
                categories[i].classList.add('commonClass')
            }else if(categories[i].innerHTML.trim()=='Claeaning'){
                categories[i].classList.add(designcl[2])
                categories[i].classList.add('commonClass')
            }else if(categories[i].innerHTML.trim()=='Others'){
                categories[i].classList.add(designcl[3])
                categories[i].classList.add('commonClass')
            }
        }
});

document.getElementById("deleteButton").addEventListener("click", function () {
  let checkvalue = document.querySelectorAll(".delecheck:checked"); // getting only checked values
  let arrcheck = []; // creating the lsit of checked array
  for (let i of checkvalue) {
    let attri = "";
    attri = i.getAttribute("value"); // getting uniue id from and pushing into array
    arrcheck.push(attri);
  }
  if(arrcheck.length===0){ // checking if array is null the 
    return window.location = "/";
}
  
  //here we are making delete request with the help of Ajax request
  $.ajax({
    type: "post",
    url: "/delete_todo/?id=" + arrcheck,
    success: function () {
        //if it is sucess return to home
        window.location = "/";
    },
    error: function (err) {
      console.log(err);
    },
  });
});