function get_json_Data(url,callback){

  var result;
  $.ajax({
    
    url:url,
    success:callback
  });
  return result;
}

var url='https://pvk4498.github.io/webapps/garage%20web%20app/json/data.json';
var data = get_json_Data(url,handleResult);

function handleResult(result){
  console.log(result);

   var options={
        valueNames:['name',
                    'address'
                    ,'city'
                    ,'contact',
                    { name: 'image', attr: 'src' } 
                  ],
        item:'myitem',
        page: 3,
        pagination: true
      };
     
   var userList = new List('mylist',options,result);
   
}

