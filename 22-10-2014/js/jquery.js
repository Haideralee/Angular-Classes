jQuery(document).ready(function($){
    $('.nav a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});