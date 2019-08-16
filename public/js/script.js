$("#submitButton").on("click", function(event) {
//   event.preventDefault();
  console.log($("input[value='logNewProject']:checked").val());
  if ($("input[value='logNewProject']:checked").val()) {
    $("#myNewModal").modal("toggle");
  } else if ($("input[value='logExistingProject']:checked").val()) {
    $("#myExistingModal").modal("toggle");
  }
});
