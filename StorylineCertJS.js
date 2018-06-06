Javascript for Storyline certificate generator

//grab the LMS object
var lmsAPI = parent;

//ask the LMS object to get the name
var rawName = lmsAPI.GetStudentName();

//the name comes very formal "Last, First"
//we will fix that by sticking the name into an array
var nameArray = rawName.split(",");

//get the first name
var firstName = nameArray[1];

//get the last name
var lastName = nameArray[0];

//now we grab the Articulate player
var p = GetPlayer();

//finally we set our Articulate vars to our js values
p.SetVar("firstname",firstName );
p.SetVar("lastname",lastName );
p.SetVar("rawname",rawName );

// keep and combine js values
var fullName = firstName + " " + lastName;

// FIRST BIT FROM RESULTS SLIDE

var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = month + "/" + day + "/" +year
player.SetVar("DateValue", newName);


// SECOND BIT FROM RESULTS SLIDE

var player = GetPlayer();

var firstName =(
player.GetVar("firstname")
)

var lastName =(
player.GetVar("lastname")
)

var courseName =(
player.GetVar("coursename")
)

var theDate =(
player.GetVar("DateValue")
)

var urlstring = ("printCertificate.html?print=" + firstName + "&" + lastName + "&" + courseName + "&" + theDate);

window.open(urlstring,"_blank","width=800,height=600,menubar=no");