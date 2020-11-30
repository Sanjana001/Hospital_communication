var name, email, pass;
var info = {"sanjana@gmail.com":"Sanjana 2056","yogita@gmail.com":"Yogita 2026"};
var info1 = {"sanjana@gmail.com": "Patiala!Punjab!147001!#2898,new colony,patiala"};
function fun(){
	name = document.getElementById("name").value;
    email = document.getElementById("email").value;
	pass = document.getElementById("password").value;
    if(info[email]==undefined && name!="" && pass!=""){
        info[email] = name+" "+pass;
        document.querySelector('.bg-modal').style.display = 'none';
        fun1();
    }
    else if(email=="" || name=="" || pass=="")
        alert("Please fill the complete form");
    else check();
}
function check(){
    var str = info[email];
    var split = str.split(" ");
    if(split[0]==name && split[1]==pass){
        document.querySelector('.bg-modal').style.display = 'none';
        fun1();
    }
    else if(split[0]!=name && split[1]!=pass)
        alert("This email id is already registered for another user");
    else if(split[0]==name && split[1]!=pass)
        alert("Incorrect password");
}
function fun1(){
    var str = "";
    var date = new Date();
    var hours = date.getHours();
    if(hours<12) str += "Good Morning";
    else if(hours>=12 && hours<16) str += "Good Afternoon";
    else str += "Good Evening";
    str += " "+name;
    document.getElementById("wish").innerHTML = str;
    explanation();
}
function profile(){
    if(info1[email]!=undefined) next();
    else form();
}
function next(){
    var split = info1[email].split("!");
    var str= "<h2 class='text-center font-weight-bold' id='h2' style='text-shadow:2px 2px white;'>Profile</h2><div class='row' style='margin-left:10px;margin-right:20px;'><div class='col-sm-1'></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Name: <span id='span'>"+ name + "</span></p></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Email: <span id='span'>"+email+"</span></p></div><div class='col-sm-1'></div></div>";
    var str1="<div class='row' style='margin-left:10px;margin-right:20px;'><div class='col-sm-1'></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>State: <span id='span'>"+split[1]+"</span></p></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>City: <span id='span'>"+split[0]+"</span></p></div><div class='col-sm-1'></div></div>";
    var str2="<div class='row' style='margin-left:10px;margin-right:20px;'><div class='col-sm-1'></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Postal Code: <span id='span'>"+split[2]+"</span></p></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Address: <span id='span'>"+split[3]+"</span></p></div><div class='col-sm-1'></div></div>";
    var str3 = "<a class='alert-link text-dark' href='#header' style='margin-left: 80px;' onclick='form();'>Edit your profile?</a>";
    document.getElementById("div5").innerHTML=str+str1+str2+str3;
}
function form(){
    var str = "<h2 class='text-center font-weight-bold' id='h2' style='text-shadow:2px 2px white;'>Create your Profile</h2><br><div class='row' style='margin-left:10px;margin-right:20px;'><div class='col-sm-1'></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Name: <span id='span'>"+name+"</span></p></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Email: <span id='span'>"+email+"</span></p></div><div class='col-sm-1'></div></div>";
    var str2="<div class='row' style='margin-left:10px;margin-right:20px;'><div class='col-sm-1'></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>State: <input type='text' id='state' style='width: 65%;' required></p></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>City: <input type='text' id='city' style='width: 72%;' required></p></div><div class='col-sm-1'></div></div>";
    var str3 = "<div class='row' style='margin-left:10px;margin-right:20px;'><div class='col-sm-1'></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Postal Code: <input type='text' id='code' style='width: 50%' required></p></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Address: <textarea id='add' style='width: 72%;' required></textarea></p></div><div class='col-sm-1'></div></div>";
    var str4 = "<div class='row' style='margin-left:10px;margin-right:20px;'><div class='col-sm-1'></div><div class='col-sm-5'><button class='btn-dark text-center' style='font-size: 25px;' onclick='explanation();'>Save</button> </div></div>";
    document.getElementById("div5").innerHTML=str+str2+str3+str4;
}
