//7518943c027a43f28a592c595519229c

	
var topicSearch = $(this).attr("data-name");
// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "7518943c027a43f28a592c595519229c", 'q': "taco bell"
});
//console.log(response);
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result.docs.snippet);
}).fail(function(err) {
  throw err;

});




