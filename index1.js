var gyno_doc = ["Dr. Reeta Malhota", "Dr. Shivani Gupta", "Dr. Gurjinder Kaur", "Dr. Harjinder Kaur Sethi"];
var ent_doc = ["Dr. Rishabh Banerjee", "Dr. Yogita Sharma","Dr. Simran Singh","Dr. BV Raman"];
var med_doc = ["Dr. Sourabh Kalra","Dr. Reeta Gupta","Dr. Santosh Singh","Dr. KamalPreet Kaur"];
var lung_doc = ["Dr.Harbans Verma","Dr. Arijit Singh","Dr. Kunal Malhotra"];
var skin_doc = ["Dr. Shivani Verma","Dr. Inderjeet Singh", "Dr. Reetu Aggarwal"];
var bone_doc = ["Dr. Harbans Walia","Dr. Satinder Singh","Dr. Gurjinder Singh","Dr. Satpal Aggarwal"];
function explanation(){
	document.getElementById("div5").innerHTML="<h2 class='text-center font-weight-bold' id='h2' style='color: fuchsia;text-shadow: 1px 2px blue'>About Dashboard</h2><p class='text-center' id='p'>If you are a new user and don't know how to use the dashboard then we are here to help you as a guide and mentor. Please follow the instructions if you want to know about dashboard.</p><ol class='list'><li>Go to the <b><em>Profile</em></b> option. If you haven't create your complete profile or a new user then it will give you a form otherwise it will show you your's complete profile which you can edit also.</li><li><b><em>Online Doctor</em></b> option will prescribed you some medicines when you will be suffering from minor diseases.</li><li>In <b><em>Appointment</em></b> option you can see yours next appointment.</li><li>You will be able to create your appointment by clicking on the <b><em>+Create Appointment</em></b> button.</li></ol>";
}
function create(){
	var str = "<h2 class='text-center font-weight-bold' id='h2' style='color: maroon;text-shadow: 2px 2px green;'>Create your Appointment</h2><br><div class='row' style='margin-left:10px;margin-right:20px;'><div class='col-sm-1'></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Age: <span id='span'><input type='number' style='height: 30px;'></span></p></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Gender: <span id='span' style='color:black;font-weight: lighter'><input type='radio' value='male' id='gender' name='gender'> Male&nbsp;&nbsp;<input type='radio' value='female' name='gender' id='gender'> Female&nbsp;&nbsp;<input type='radio' value='others' name='gender' id='gender'> Others</span></p></div><div class='col-sm-1'></div></div>";
	var str1 = "<div class='row' style='margin-left:10px;margin-right:20px;'><div class='col-sm-1'></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Select your desired timeslot: <span id='span'><select name='slot' id='slot'><option value='morning'>Morning (10:00am - 12:00pm)</option><option value='evening'>Evening (4:00pm - 7:00pm)</option></select></span></p></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Select your problem: <span id='span'><select name='problem' id='problem' style='width: 100%'><option value='skin'>Skin Related Problem (Skin Doctors)</option><option value='bones'>Arithiritius/Problems related to bones (Orthopedic Doctors)</option><option value='cough'>Cough/Cold/Fever/Headache/Migrane (Medicinal Doctors)</option><option value='gyno'>Pregnency related/ women's related (Gyno's)</option><option value='heart'>Heart related (Heart Doctors)</option><option value='ent'>Cough related (E.N.T Doctors)</option></select></span></p></div><div class='col-sm-1'></div></div>";
    var str2 = "<button type='button' class='btn' style='background-color: orange' id='btn1' onclick='appointment();'>+Create Appointment</button>";
    var str5 = "<div class='row' style='margin-left:10px;margin-right:20px;'><div class='col-sm-1'></div><div class='col-sm-5'><p id='p1'>Choose a Date for Appointment: <input type='date' id='appt_date' name='date for appointment' value='2020-12-01' min='2020-12-04' max='2023-12-04'></p></div><div class='col-sm-5'><p style='color: red' id='dslot'></div><div class='col-sm-1'></div></div>";
    document.getElementById("div5").innerHTML = str + str1 + str5+ str2;
}
function appointment(){
	var str = "";
	var slot = document.getElementById("slot").value;
	var problem = document.getElementById("problem").value;
	if(problem=="skin") str += skin_doc[Math.floor(Math.random()*skin_doc.length)];
	else if(problem=="bones") str += bone_doc[Math.floor(Math.random()*bone_doc.length)];
	else if(problem=="heart") str += lung_doc[Math.floor(Math.random()*lung_doc.length)];
	else if(problem=="ent") str += ent_doc[Math.floor(Math.random()*ent_doc.length)];
	else if(problem=="gyno") str += gyno_doc[Math.floor(Math.random()*gyno_doc.length)];
	else str += med_doc[Math.floor(Math.random()*med_doc.length)];
    document.write("Take the screenshot of the following instructions: <br>1.) You slot timing is <b><em>"+slot+"</em></b>.<br>2.) Your's problem lies in <em><b>"+problem+"</b></em> category.<br>3.) The name of the doctor who will check/consults you is <em><b>"+ str+"</b></em>.");
	alert("Your appointment for "+problem+" in the "+slot+" slot has created and your doctor's name is " +str +". You will get all the furthur information and timings of your appointment within 15-30 minutes on your registered email id. Thank you and Have a nice and healthy day :)");
}
function online(){
	var str = "<h2 class='text-center font-weight-bold' id='h2' style='color: maroon;text-shadow: 2px 2px green;'>Online Survey</h2><form><table><legend>Choose symptoms which are showing nowadays:</legend><tr><td><label><input type='checkbox' id='head'> Headache</label></td><td>&nbsp;&nbsp;&nbsp;</td><td><label><input type='checkbox' id='fever'> Fever</label></td></tr><tr><td><label><input type='checkbox' id='stomach'> Stomach Ache</label></td><td>&nbsp;&nbsp;&nbsp;</td><td><label><input type='checkbox' id='cold'> Cold</label></td></tr><tr><td><label><input type='checkbox' id='cough'> Cough</label></td><td>&nbsp;&nbsp;&nbsp;</td><td><label><input type='checkbox' id='allergy'> Skin Allergy</label></td></tr></table></form><br>";
    var str1 = "<form><table><legend>From how many days you are facing above symptoms:</legend><tr><td><label><input type='radio' id='days' name='days' value='4-6 hours'> 4-6 hours</label></td></tr><tr><td><label><input type='radio' id='days' name='days' value='1 day'> 1 day</label></tr><tr><td><label><input type='radio' id='days' name='days' value='2-3 days'> 2-3 days</label></td></tr><tr><td><label><input type='radio' id='days' name='days' value='4-6 days'> 4-6 days</label></td></tr></table></form><button class='btn btn-dark' onclick='survey();'>Start Survey</button>";
    document.getElementById("div5").innerHTML = str+str1;
}
function survey(){
   alert("We have recorded your response. You will shortly get an email from our hospital site which will tell you about your selected symptoms and prescribe you the medicines also.")
}
function appoint(){
	var str = "<p id='p3'>Your next appointment is scheduled after: </p><h1 class='text-left font-weight-bold' id='h3'></h1>";
    document.getElementById("div5").innerHTML = str;
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
    var x = setInterval(function() {
       var now = new Date().getTime();
       var distance = countDownDate - now;
       var days = Math.floor(distance / (1000 * 60 * 60 * 48));
       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
       document.getElementById("h3").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
       if (distance < 0) {
          clearInterval(x);
          alert("Today is your appointment with the doctor");
       }
    }, 1000);
    alert("This is just an example. As we don't have enough time to build its code so we have given an example how the appointment option will tell you about your next appointment.");
}
