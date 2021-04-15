$(document).ready(() => {
    $('#open-icon').on('click', () => {
        $(".nav-links").slideDown({
            start: function () {
              $(this).css({
                display: "flex"
              })
            }
          });
        $('#open-icon').hide();
        $('#close-icon').show();
    });

    $('#close-icon').on('click', () => {
        $('.nav-links').slideUp();
        $('#open-icon').show();
        $('#close-icon').hide();
    });
});