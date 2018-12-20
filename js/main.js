let source = document.getElementById("entry-template").innerHTML;
let template = Handlebars.compile(source);


$('#envoyer').click(function (ev) {
  // empêche le comportement par défaut
  ev.preventDefault();
  //au click sur envoyer
  let reponse = $("#name").val()
  $.getJSON("//api.apixu.com/v1/current.json?key=6174f7eca2034a80b0793838182012&q=" + reponse)
    .done(function (data) {
      let html = template(data);
      $("#container").html(html);
      let condition = data.current.condition.text;

  //$("main").removeClass("").addClass(condition)

      if (condition.includes("rain")) {
        console.log('il pleut');
        $("main").removeClass("cloudy");
        $("main").removeClass("sunny");
        $("main").addClass("rain");
      }
      else if (condition.includes("cloudy")) {
        console.log('nuageux');
        $("main").removeClass("rain");
        $("main").removeClass("sunny");
        $("main").addClass("cloudy");
      }
      if (condition.includes("sunny")) {
        $("main").removeClass("cloudy");
        $("main").removeClass("rain");
        $("main").addClass("sunny");
      }
    })
  });

