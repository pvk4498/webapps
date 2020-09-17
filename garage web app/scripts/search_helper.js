var options = {
  valueNames: [
    'name',
    'price',
    'address',
    'city'
  ],
  page: 3,
  pagination: true
};
var userList = new List('users', options);

// sort by price-->
$('.sort').on('keypress', function() {
 sortList();
});

function sortList() {
  var searchprice = $(this).val();
  console.log(searchprice);
  userList.sort(searchprice, ['price']);
}


function resetList(){
  userList.search();
  userList.filter();
  userList.update();
  $(".filter-all").prop('checked', true);
  $('.filter').prop('checked', false);
  $('.sort').prop('checked', false);
  $('.search').val('');
  console.log('Reset Successfully!');
};

function updateList(){
  var values_price = $("input[name=price]:checked").val();

 
  userList.update();
  //console.log('Filtered: ' + values_gender);
}

$(function(){
  //updateList();
  $("input[name=price]").change(updateList);

  userList.on('updated', function (list) {
    if (list.matchingItems.length > 0) {
      $('.no-result').hide()
    } else {
      $('.no-result').show()
    }
  });
});


function get_json(){
  var name=[];
fetch("https://pvk4498.github.io/webapps/garage%20web%20app/json/data.json")
    .then(function(resp){
      return resp.json();
    })
    .then(function(data){
        
       document.getElementById("card").innerHTML = `
        ${data.map(function(value) {
          return ` 
          <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${value.name}</div>
              <div class="card-body text-primary">
                <h5 class="card-title">${value.address}</h5>
                <p class="card-text">${value.city}</p>
                <p class="card-text">${value.contact}</p>
              </div>
           </div>
          </div>
           `
        }).join("")}
       `
    });  
  
  }

  get_json();




