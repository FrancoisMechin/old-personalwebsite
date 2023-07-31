/* ===== Logic for creating fake Select Boxes ===== */
$('.sel').each(function () {
    $(this).children('select').css('display', 'none');

    var $current = $(this);

    $(this).find('option').each(function (i) {
        if (i == 0) {
            $current.prepend($('<div>', {
                class: $current.attr('class').replace(/sel/g, 'sel__box')
            }));

            var placeholder = $(this).text();
            $current.prepend($('<span>', {
                class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
                text: placeholder,
                'data-placeholder': placeholder
            }));

            return;
        }

        $current.children('div').append($('<span>', {
            class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
            text: $(this).text()
        }));
    });
});

// Toggling the `.active` state on the `.sel`.
$('.sel').click(function () {
    $(this).toggleClass('active');
});

// Toggling the `.selected` state on the options.
$('.sel__box__options').on('click', function () {
    const option1 = document.getElementById('sitedylice');
    let url = "http://dylicecover.alwaysdata.net";

    option1.addEventListener('change',function(){
    window.open(url, '_blank').focus();
    });
    var txt = $(this).text();
    var index = $(this).index();

    $(this).siblings('.sel__box__options').removeClass('selected');
    $(this).addClass('selected');

    var $currentSel = $(this).closest('.sel');
    $currentSel.children('.sel__placeholder').text(txt);
    $currentSel.children('select').prop('selectedIndex', index + 1);
});

// //// Redirect onlick
// function SelectRedirect() {
//     //alert( document.getElementById('s1').value);

//     switch (document.getElementById('select-profession').value) {
//         case "sitedylice":
//             window.open("http://dylicecover.alwaysdata.net",'_blank').focus();
//             break;

//         case "projetafpa":
//             window.open("https://francoismechin.com/files/apilicious.pdf",'_blank').focus();
//             break;

//         default:
//             window.location = "../";
//             break;
//     }
// }

// const option1 = document.getElementById('sitedylice');
// let url = "http://dylicecover.alwaysdata.net";

// option1.addEventListener('change',function(){
//     window.open(url, '_blank').focus();
// });