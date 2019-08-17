$("#submitButton").on("click", function(event) {
  // event.preventDefault();
  console.log($("input[value='logNewProject']:checked").val());
  if ($("input[value='logNewProject']:checked").val()) {
    $("#myNewModal").modal("toggle");
  } else if ($("input[value='logExistingProject']:checked").val()) {
    $("#myExistingModal").modal("toggle");
    $.get("/api/projects", function(response) {
      console.log("res is ........." + response);
      var projectsArr = response;
      for (var i = 0; i < projectsArr.length; i++) {
        console.log(i);
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

$.get("/api/data", function(data) {
  var svgWidth = 500,
    svgHeight = 300,
    radius = Math.min(svgWidth, svgHeight) / 2;
  var svg = d3
    .select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  var g = svg
    .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

  var color = d3.scaleOrdinal(d3.schemeCategory10);

  var pie = d3.pie().value(function(d) {
    return d.hourName;
  });

  var path = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(0);

  var arc = g
    .selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");

  arc
    .append("path")
    .attr("d", path)
    .transition()
    .delay(function(d, i) {
      return i * 500;
    })
    .duration(500)
    .attr("fill", function(d) {
      return color(d.data.hourName);
    });

  var label = d3
    .arc()
    .outerRadius(radius)
    .innerRadius(0);

  arc
    .append("text")
    .attr("transform", function(d) {
      return "translate(" + label.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .transition()
    .delay(500)
    .text(function(d) {
      return d.data.hourName + ":" + d.data.projectName + "%";
    });
});
