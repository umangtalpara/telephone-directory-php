$(document).ready(function(){

//code for data show
function showdata(){
    output="";
    $.ajax({
        url: "retrieve.php",
        method: "GET",
        // timeout: 10,
        dataType:'json',
        success:function(data){
            // console.log(data);
            if (data) {
                x = data;
            }else {
                x = "";
            }
            for(i=0; i<x.length; i++){
                output += "<tr><td>" + x[i].id + "</td><td>" + x[i].name + " </td><td> " + x[i].number + " </td><td> <button class=' btn-sm btn-status' data-sid=" + x[i].id+ " data-status=" + x[i].status+ " > " + x[i].status+ " </button> </td><td> <button class='btn btn-danger btn-sm btn-delete' data-sid=" + x[i].id+ " >delete</button></td></tr> " 
            }
            $("#tbody").html(output);
            
        },
        error: function (errorMessage) { 
            $('#msg').append('Error: ' +errorMessage );
        }
    });
}
showdata();

 //code for data insert   
$("#submit").click(function(e){
    e.preventDefault();
    console.log("submit button clicked");
    let nm = $("#name").val();
    let mn = $("#number").val();
    // console.log(nm);
    // console.log(mn);

    mydata = { name:nm, number:mn };
    // console.log(mydata);

    $.ajax({
        url: "insert.php",
        method: "POST",
        data: JSON.stringify(mydata),
        success: function(data){
            // console.log(data);
            msg ="<div class='alert alert-dark mt-3'>" + data + "</div>";
            $("#msg").html(msg);
            $('#form')[0].reset();
            showdata()
        },
    });
});

// delete code
$("tbody").on("click",".btn-delete",function(){
    console.log("delete button clicked");
    let id = $(this).attr("data-sid");
    // console.log(id);
    mydata = {sid:id};
    $.ajax({
        if (id === 1){
            url:"lete.php",
            method: "POST",
            data: JSON.stringify(mydata),
          }else{
            url:"delete.php",
            method: "POST",
          }
      
        success: function(data){
            // console.log(data);
            showdata()
            msg ="<div class='alert alert-dark mt-3'>" + data + "</div>";
            $("#msg").html(msg);
        },error: function (errorMessage) { 
            $('#msg').append('Error: ' +errorMessage );
        }
    });
});

// status code
$("tbody").on("click",".btn-status",function(){
    console.log("status button clicked");
    let st = $(this).attr("data-status");
    let id = $(this).attr("data-sid");
    // console.log(st);
    mydata = {sid:id , status:st};
    // console.log(mydata);
    $.ajax({
        url:"status.php",
        method: "POST",
        data: JSON.stringify(mydata),
        success: function(data){
            console.log(data);
            showdata()
            msg ="<div class='alert alert-dark mt-3'>" + data + "</div>";
            $("#msg").html(msg);
        },
        error: function (errorMessage) { 
            $('#msg').append('Error: ' +errorMessage );
        }
    });
});

});