$("#submitButton").on("click", function(event) {
  // event.preventDefault();
  console.log($("input[value='logNewProject']:checked").val());
  if ($("input[value='logNewProject']:checked").val()) {
    $("#myNewModal").modal("toggle");
  } else if ($("input[value='logExistingProject']:checked").val()) {
    $("#myExistingModal").modal("toggle");
    $.get("/api/projects", function(response) {
      console.log("res is ........."+response);
      var projectsArr = response;
      for (var i = 0; i < projectsArr.length; i++) {
        console.log(i)
        var projectsOption = projectsArr[i].projectName;
        $("select").append("<li>" + projectsOption + "</li>");
      }
    });
  }
});

$("#updateButton").on("click", function(event) {
  event.preventDefault();
  var selectedProject = $("<option>");
  console.log(selectedProject);
  var hoursWorked = $("#hoursWorked").val();
  console.log(hoursWorked);
});
