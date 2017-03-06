
$("document").ready(function() {

  //show Date
  var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    var today = year + "-" + month + "-" + day;
    $("#myDate").attr("value", today);

  $("#newProj").on("tap", btnMouseClick);
  $(".projects").on("tap", "#newTask", btnNewTask);
  $(".projects").on("doubletap", ".projectName", editName);
  $(".projects").on("doubletap", ".task", editTask);
  // $(".projects").prop("checked", "input[type='checkbox']", checkedTask); //not working
  $("#removeTasks").on("tap", checkedTask)
  $(".projects").on("drag", ".projectName", removeProj)


  function btnMouseClick(evt){
    if ($(".project").last().hasClass("col-xs-12")) {
      $(".project").last().replaceWith("<div class='col-xs-6 project'><div class='projectName'>Project Name</div><button type='button' id='newTask' class='btn btn-lg btn-block'><span class='glyphicon glyphicon glyphicon-plus' aria-hidden='true'></span></button></div><div class='col-xs-6 project'><div class='projectName'>Project Name</div><button type='button' id='newTask' class='btn btn-lg btn-block'><span class='glyphicon glyphicon glyphicon-plus' aria-hidden='true'></span></button></div>")
    } else {
      $(".projects").append("<div class='row'><div class='col-xs-12 project'><div class='projectName'>Project Name</div><button type='button' id='newTask' class='btn btn-lg btn-block'><span class='glyphicon glyphicon glyphicon-plus' aria-hidden='true'></span></button></div></div>")
    }
  }
  function btnNewTask(evt){
    $(this).before("<div class='checkbox'><span style='padding-left:30px;'><input type='checkbox' value=''></span><span class='task' style='display:inline;'>Add task</span></div>")
  }
  function editName(evt){
    var $div = $(this), isEditable=$div.is('.editable');
    $div.prop('contenteditable',!isEditable).toggleClass('editable')
  }
  function editTask(evt){
    var $div = $(this), isEditable=$div.is('.editable');
    $div.prop('contenteditable',!isEditable).toggleClass('editable')
  }
  function checkedTask(evt){
      $(".checkbox input:checked").parentsUntil(".project").detach();
    // }
  }
  function removeProj(){
    if ($(this).parent().hasClass("col-xs-6")){
      console.log($(this).siblings().parent())
      $(this).siblings().removeClass("col-xs-6") //this line is not working
      $(this).siblings().addClass("col-xs-12") //this line is not working
    }
    $(this).parent().remove();
  }
    skygear.config({
    'endPoint': 'https://tasky.skygeario.com/', // trailing slash is required
    'apiKey': '004f8e16221046a79a827a5040b7547b',
    }).then(() => {
    console.log('skygear container is now ready for making API calls.');
    }, (error) => {
    console.error(error);
    });
});
// phoneGap (jquery import)
// Full height for rows
// How to store the page
