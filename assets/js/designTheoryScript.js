//side bar navigation for home page 
function openNav() {
  document.getElementById("sideNav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

// function showBalance(){
//   let  balanceBtn = document.getElementById("btnDP")[0];
//   balanceBtn.style.display = "block";
//   console.log(balanceBtn);
// }

// To Show & Hide 
// Design Theory 
// Balance Button
$(document).ready(function()
{
  $("#btnBal").click(function()
  {
      $("#balance").toggle();
      console.log('toggle balance reached!');
  });
}); 

// Harmony Button
$(document).ready(function()
{
  $("#btnHar").click(function()
  {
      $("#harmony").toggle();
      console.log('toggle harmony reached!');
  });
}); 

// Contrast Button
$(document).ready(function()
{
  $("#btnCon").click(function()
  {
      $("#contrast").toggle();
      console.log('toggle contrast reached!');
  });
}); 

// Emphasis Button
$(document).ready(function()
{
  $("#btnEmph").click(function()
  {
      $("#emphasis").toggle();
      console.log('toggle emphasis reached!');
  });
}); 

// Scale Button
$(document).ready(function()
{
  $("#btnScale").click(function()
  {
      $("#scale").toggle();
      console.log('toggle scale reached!');
  });
}); 

// Repitition Button 
$(document).ready(function()
{
  $("#btnRep").click(function()
  {
      $("#repitition").toggle();
      console.log('toggle repitition reached!');
  });
}); 

// Hierarchy Button
$(document).ready(function()
{
  $("#btnHier").click(function()
  {
      $("#hierarchy").toggle();
      console.log('toggle hierarchy reached!');
  });
}); 

// Colour Theory 
// Primary Button
$(document).ready(function()
{
  $("#btnPri").click(function()
  {
      $("#primary").toggle();
      console.log('toggle primary reached!');
  });
}); 

// Secondary Button
$(document).ready(function()
{
  $("#btnSec").click(function()
  {
      $("#secondary").toggle();
      console.log('toggle secondary reached!');
  });
}); 

// Tertiary Button
$(document).ready(function()
{
  $("#btnTer").click(function()
  {
      $("#tertiary").toggle();
      console.log('toggle tertiary reached!');
  });
}); 


// Complementary Colours Button
$(document).ready(function()
{
  $("#btnCom").click(function()
  {
      $("#complementary").toggle();
      console.log('toggle Complementary Colours reached!');
  });
}); 


// Analogous Button
$(document).ready(function()
{
  $("#btnAnal").click(function()
  {
      $("#analogous").toggle();
      console.log('toggle analogous reached!');
  });
}); 

// Warm & Cool Colours Button
$(document).ready(function()
{
  $("#btnWarmCool").click(function()
  {
      $("#warmCool").toggle();
      console.log('toggle Warm & Cool Colours reached!');
  });
}); 

// Tint, Shade & Tone Button
$(document).ready(function()
{
  $("#btnTintShadeTone").click(function()
  {
      $("#tintShadeTone").toggle();
      console.log('toggle Tint, Shade & Tone reached!');
  });
}); 
