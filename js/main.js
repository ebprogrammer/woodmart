$(".navbar-toggler").click(function(){
    if($(".navbar-bg").css("display")=="none"){
        $(".navbar-bg").css("display","block")
    }else{
        $(".navbar-bg").css("display","none")
       }

})

$(".navbar-bg").click(function(){
    $(".navbar-collapse").removeClass("show");
    $(".navbar-bg").css("display","none")
    $(".navbar-toggler").addClass("collapsed");
})