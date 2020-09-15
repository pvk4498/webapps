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


//  function fetch(){
//      fetch("https://pvk4498.github.io/json/catering.json")
//      .then(response => response.json())
//     .then(rsp => {
//          console.log(rsp)
       
//     })
//  }

//  fetch()



