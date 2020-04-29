function formValidation()
{
var ymainauditorium = document.main.auditorium;

var ymeetingroom = document.meeting.room;

var LGstage = document.LG.stage;

var yauditoriuma = document.auditorium.a;

var yhuayuan = document.hua.yuan;

var yauditoriumb = document.auditorium.b;

var ylecturehalls = document.lecture.halls;

var yapplicantname =document.applicantname.applicantname;

var ydatetime=document.ydatetime.ydatetime;


if(validymainauditorium(ymainauditorium))
{
if(ymeetingroom(ymeetingroom))
{
if(LGstage(LGstage))
{
if(yauditoriuma(yauditoriuma))
{ 
if(yhuayuan(yhuayuan))
{
if(yauditoriumb(yauditoriumb))
{
if(ylecturehalls(ylecturehalls))
{
if (yapplicantname(yapplicantname)) 
{
if (ysign(ysign))
}


return false;
} 
function validymainauditorium(ymainauditorium){

    x=0;
    if(ymainauditorium.checked) 
    {
    x++;
    return true;
    } 
    if(x==0)
    {
    alert('Please select a venue');
    ymainauditorium.focus();
    return false;
    }
    
}

else
{
return true;
}

function yapplicantname(yapplicantname)
{
    x=0;
    if(yapplicantname.checked) 
    {
    x++;
    return true;
    }


function ysign(ysign)
{ 
var letters = /^[A-Z]+$/;
if(ysign.value.match(alphabets))
{
return true;
}
else
{
alert('This field must include only alphabet characters');
ysign.focus();
return false;
}

else
{
    alert('Success! We will get back to you soon!');
    window.location.reload()
return true;
}


