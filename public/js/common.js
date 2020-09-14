(function () {
  'use strict';

  $('document').ready(function () {
    console.log('JS LOADING');


    $('#dropdownMenuLink1').hover(function (ev) {
      ev.preventDefault();
      mouseEnterFunction('#dropdownCatalog1');
    });

    if ($(window).width() < 768) {
      console.log('IN SMALL WIDTH RANGE');
      $('#dropdownMenuLink1').click(function (ev) {
        $('.products-dropdown-menu').show();
        mouseEnterFunction('#dropdownCatalog1');
      });
    }

    // $('#dropdownMenuLink1').click(function (ev) {
    //   mouseEnterFunction('#dropdownCatalog1');
    // });

    $('#dropdownMenuLink1').mouseout(function (ev) {
      mouseLeaveFunction('#dropdownCatalog1');
    });

    $('#dropdownMenuLink2').hover(function (ev) {
      mouseEnterFunction('#dropdownCatalog2');
    });

    $('#dropdownMenuLink2').mouseout(function (ev) {
      mouseLeaveFunction('#dropdownCatalog2');
    });

    $('.consent-fxcm').click(function () {
      var policyConsent = $('#consentCheckbox');
      if ($('.consent-fxcm:checked').length === $('.consent-fxcm').length) {
        policyConsent.prop('checked', true);
      } else {
        policyConsent.prop('checked', false);
      }
    });
  });
})();

function mouseEnterFunction(element) {
  $(element).show();
  if ($(window).width() < 768) {
    $('#myNavbar').show();
    $('.dropdown').addClass('open');
  }
}

function mouseLeaveFunction(element) {
  console.log('in Leave FUNCTION' + element);
  // $(element).hide();
}
