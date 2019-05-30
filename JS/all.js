$(document).ready(function(){
    $('.header i').click(function(){
        $('body').toggleClass('open');
    });

    $('.food .heart').click(function(){
        event.preventDefault();
        $(this).find('i').toggleClass('active');

    });
    
});