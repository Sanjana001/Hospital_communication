var gyno_doc = ["Dr. Reeta Malhota", "Dr. Shivani Gupta", "Dr. Gurjinder Kaur", "Dr. Harjinder Kaur Sethi"];
var ent_doc = ["Dr. Rishabh Banerjee", "Dr. Yogita Sharma","Dr. Simran Singh","Dr. BV Raman"];
var med_doc = ["Dr. Sourabh Kalra","Dr. Reeta Gupta","Dr. Santosh Singh","Dr. KamalPreet Kaur"];
var lung_doc = ["Dr.Harbans Verma","Dr. Arijit Singh","Dr. Kunal Malhotra"];
var skin_doc = ["Dr. Shivani Verma","Dr. Inderjeet Singh", "Dr. Reetu Aggarwal"];
var bone_doc = ["Dr. Harbans Walia","Dr. Satinder Singh","Dr. Gurjinder Singh","Dr. Satpal Aggarwal"];
/*var headache = "Take any paracetamol like <b>Saridon or any other paracetamol which you can easily get from local stores. If you are having spectacles then check your eyesight also. After 1-2 days if you are still facing this problem then please consult with the <b>Medicinal Doctor</b>";
var allergyic = "Take cetrizine anf if still having allergy after 1-2 day then please create your appointment with <b>Medicinal Doctor</b>"*/
function explanation(){
	document.getElementById("div5").innerHTML="<h2 class='text-center font-weight-bold' id='h2' style='color: fuchsia;text-shadow: 1px 2px blue'>About Dashboard</h2><p class='text-center' id='p'>If you are a new user and don't know how to use the dashboard then we are here to help you as a guide and mentor. Please follow the instructions if you want to know about dashboard.</p><ol class='list'><li>Go to the <b><em>Profile</em></b> option. If you see <span class='glyphicon'>&#xe014;</span> sign near the profile option it means you haven't create your complete profile. When you complete your profile you will see <span class='glyphicon glyphicon-ok'></span> sign near your profile option.</li><li><b><em>Prescription</em></b> option will prescribed you some medicines when you will be suffering from minor diseases.</li><li>In <b><em>Update</em></b> option you can see all the updates of the hospital.</li><li>You will be able to create your appointment by clicking on the <b><em>+Create Appointment</em></b> button.</li></ol>";
}
function create(){
	var str = "<h2 class='text-center font-weight-bold' id='h2' style='color: maroon;text-shadow: 2px 2px green;'>Create your Appointment</h2><br><div class='row' style='margin-left:10px;margin-right:20px;'><div class='col-sm-1'></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Age: <span id='span'><input type='number' style='height: 30px;'></span></p></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Gender: <span id='span' style='color:black;font-weight: lighter'><input type='radio' value='male' id='gender' name='gender'> Male&nbsp;&nbsp;<input type='radio' value='female' name='gender' id='gender'> Female&nbsp;&nbsp;<input type='radio' value='others' name='gender' id='gender'> Others</span></p></div><div class='col-sm-1'></div></div>";
	var str1 = "<div class='row' style='margin-left:10px;margin-right:20px;'><div class='col-sm-1'></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Select your desired timeslot: <span id='span'><select name='slot' id='slot'><option value='morning'>Morning (10:00am - 12:00pm)</option><option value='evening'>Evening (4:00pm - 7:00pm)</option></select></span></p></div><div class='col-sm-5'><p class='text-left font-weight-bold' id='p1'>Select your problem: <span id='span'><select name='problem' id='problem' style='width: 100%'><option value='skin'>Skin Related Problem (Skin Doctors)</option><option value='bones'>Arithiritius/Problems related to bones (Orthopedic Doctors)</option><option value='cough'>Cough/Cold/Fever/Headache/Migrane (Medicinal Doctors)</option><option value='gyno'>Pregnency related/ women's related (Gyno's)</option><option value='heart'>Heart related (Heart Doctors)</option><option value='ent'>Cough related (E.N.T Doctors)</option></select></span></p></div><div class='col-sm-1'></div></div>";
    var str2 = "<button type='button' class='btn' style='background-color: orange' id='btn1' onclick='appointment();'>+Create Appointment</button>";
    var str5 = "<div class='row' style='margin-left:10px;margin-right:20px;'><div class='col-sm-1'></div><div class='col-sm-5'><p style='color: red' id='sslot'> : <span id='aslot' style='color: green'></span></p></div><div class='col-sm-5'><p style='color: red' id='dslot'> : <span id='daslot' style='color: green'></span></p></div><div class='col-sm-1'></div></div>";
    document.getElementById("div5").innerHTML = str + str1 + str2+ str5;
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
