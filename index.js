var name, email, pass;
var info = {"sanjana@gmail.com":"Sanjana 2056","yogita@gmail.com":"Yogita 2026"};
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
