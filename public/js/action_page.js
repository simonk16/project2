module.exports = function(app) {
  app.post("/public/js/action_page.js", function(req, res) {
    var $formData = req.body.selectedAction;
    console.log($formData);
    res.send("You chose: " + $formData);
  });
};
