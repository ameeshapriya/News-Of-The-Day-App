$(document).ready(function(){
	var url= 'https://hn.algolia.com/api/v1/search?query=javascript';
	$.getJSON(url,function(data){
		currentQuote=''
		var quotes=data.hits;
		$('.read').on('click',function(){
			currentQuote=quotes[Math.floor(Math.random()*quotes.length)];
            $('.quoteBody').hide();
			$('.quoteBodyLink').html(currentQuote.title);
			 $('.quoteBodyLink')
                .attr('href', currentQuote.url)
                .attr('target', '_blank');
			//console.log(currentQuote);
			//$('.quoteBody').html(currentQuote.title);
			$('.quoteAuthor').html( currentQuote.author);
			$('.tweetQuote').attr(
			'href',
			'https://twitter.com/indent/tweet?text=' +currentQuote.title+ ' - '+currentQuote.author
		    ).attr('target','_blank').attr('disabled',false);
			$('.read').html('Show me one more');
	});
	//console.log(quotes[0].title);
	console.log(data);
	});
});