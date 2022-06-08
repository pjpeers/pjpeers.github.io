$(document).ready(function () {

  jQuery.validator.setDefaults({
      success: "valid"
  });


  $(function(){

      $("#emailFormLarge").validate({
        success: "valid",
        messages: {
          email: {
              required: "<i class=\'fas fa-exclamation-circle\'></i> We need your email address to contact you",
              email: "<i class='fas fa-exclamation-circle'></i> Your address must have the format name@domain"
          }
        },
        submitHandler: function(form) {
          fetch('/user-record', {
                method: 'POST',
                body: JSON.stringify({
                  argument: 'Create',
                  user_email: document.getElementById('registerEmailLarge').value,
                }),
                headers: {'content-type': 'application/json'},
              })
            .then(function(response) {
               $(".registration").hide();
               $("#success").fadeIn();
            })
        }
      });

  })


  $(function(){
    $("#emailFormSmall").validate({
      success: "valid",
      messages: {
        email: {
            required: "<i class=\'fas fa-exclamation-circle\'></i> We need your email address to contact you",
            email: "<i class='fas fa-exclamation-circle'></i> Your address must have the format name@domain"
        }
      },
      submitHandler: function(form) {
        fetch('/user-record', {
              method: 'POST',
              body: JSON.stringify({
                argument: 'Create',
                user_email: document.getElementById('registerEmailSmall').value,
              }),
              headers: {'content-type': 'application/json'},
            })
          .then(function(response) {
              $(".registration").hide();
              $("#success").fadeIn();
          })
      }
    });
  })

});
