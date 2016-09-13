/**
 * Created by liu-yao on 2016/8/18.
 */
$(function(){
    $('#submit').click(function(){

        txtObj = $.ajax({url:"/playground/html/ajax/text.txt",async:false})


        $('#box h2').html(txtObj.responseText);
    });
})