$(".book").click(function(){
  var book = $(this);
  book.css({'position':'absolute','width':'100%',
                'z-index':'1'})
  
    book.dblclick(function(){
      book.css({'position':'static','width':'98%',
                    'z-index':'0'})
     })
 })
