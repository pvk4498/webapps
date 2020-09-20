 
 function get_json(){
    var json;
    fetch("https://pvk4498.github.io/webapps/garage%20web%20app/json/data.json")
        .then(function(resp){
          return resp.json();
        })
        .then(function(data){
          `
            ${data.map(function(value) {
             
              var options = {
                valueNames: ['name','address','city','contact'],
                page: 3,
                pagination: [{outerWindow: 20}],
                item: '<div class="card mb-3 box-shadow"><div class="card-body"><ul class="list-unstyled mt-3 mb-4"><div class="card-header"><h4 class="name">F</h4></div><p class="address"></p><p class="city"></p><p class="contact"></p></ul><button type="button" class="btn btn-lg btn-block btn-outline-primary">View Details</button></div></div>'
                
              };
             json = value;
             var booksList = new List('users', options, json);
             console.log(json)

              
                booksList.on('updated', function (list) {
                  if (list.matchingItems.length > 0) {
                    $('.no-result').hide()
                  } else {
                    $('.no-result').show()
                  }
                });
            
            })}
           `
        });       
      }
    
    get_json();
     
