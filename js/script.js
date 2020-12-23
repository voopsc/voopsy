// $(document).ready(function(){
//   // Burger
//   $('.burger').click(function(){
//     $('.burger-line').toggleClass('active');
//     $('.header-container').toggleClass('open');
//     // $('.header').toggleClass('dark');
//   });
//
//   // Required part
//   // cart
//   $('.buy-btn').on("click", function(){
//     var id = $(this).attr("data-id");
//
//     $.post("/cart/add/"+id, {}, function(data) {
//       let info = data.replace('[', '');
//         info = info.replace(']', '');
//         info = info.split(',');
//         $('#cart-count').html(info[0]);
//         $('#cart-price').html(info[1]);
//     });
//     // if (!$('.cart svg').hasClass('.full')) {
//     //   $('.cart svg').addClass('full');
//     // }
//
//     $('.buy-modal').fadeIn('medium').css('display', 'flex');
//     $('.buy-notice').addClass('active');
//     setTimeout(function() {
//       $('.buy-modal').fadeOut('fast');
//     }, 1500);
//
//   });
//
//   function modals() {
//     $('[data-modal-btn]').on('click', function() {
//       var dataId = $(this).data('modal-btn');
//       $("[data-modal="+ dataId +"]").fadeIn('medium').css('display', 'flex');
//     });
//
//     $('.overlay').on('click', function() {
//       $(this).parent('.modal').fadeOut('medium');
//       // $('#modal-search-input').val('');
//       // $('.checkbox-wrp').removeClass('hide');
//       // $('.modal').removeClass('open');
//     });
//   }
//   modals();
//
//   //Animated-scroll
//   $("a.scrollto").click(function() {
//     var elementClick = $(this).attr("href");
//     var destination = $(elementClick).offset().top;
//     jQuery("html:not(:animated),body:not(:animated)").animate({
//       scrollTop: destination
//     }, 800);
//     $('.burger-line').removeClass('active');
//     $('.header-nav').removeClass('open');
//     return false;
//   });
//
//   var height = $(window).scrollTop();
//   if(height > 50){
//     $('.header_middle, .header_bot').addClass('fixed');
//   }
//
//   $(window).scroll(function() {
//     var height = $(window).scrollTop();
//      /*Если сделали скролл на 100px задаём новый класс для header*/
//     if(height > 50){
//     $('.header_middle, .header_bot').addClass('fixed');
//     } else{
//     /*Если меньше 100px удаляем класс для header*/
//     $('.header_middle, .header_bot').removeClass('fixed');
//     }
//   });
//
//   // Tabs script
//   $('li[data-tab-btn]').on('click', function(){
//     var type = $(this).data('tab-btn');
//     var tab = $("[data-tab-content = "+ type +"]");
//     $('.checkbox-list li').removeClass('active');
//     $(this).addClass('active');
//     $('.product-slider').removeClass('active');
//     $(tab).addClass('active');
//   });
//
// $('.hidden-trigger').on('click', function() {
//   $('.hidden-form').fadeIn().css('display', 'flex');
//   $('.burger-line').removeClass('active');
//   $('.header-nav').removeClass('open');
// });
//
// $('.hidden-form .overlay').on('click', function() {
//   $('.hidden-form').fadeOut('slow');
// });
//
//   $('.slider').slick({
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 5500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: false,
//     arrows: false
//   });
//
// function todayDatepicker()
// {
//   var today = new Date();
//   var day = today.getDate();
//   var month = ("0" + (today.getMonth() + 1)).slice(-2);
//   var year = today.getFullYear();
//
//   var element = document.querySelector('.datepicker-here');
//   if (element) {
//     var string = element.value;
//     var stringLength = string.length;
//
//     if (stringLength == 0) {
//       element.value = day + '.' + month + '.' + year;
//     }
//   } else {
//     return false;
//   }
// }
// todayDatepicker();
//
// function maskIt()
// {
//   $('.price').mask('000 000 000 000 000', {reverse: true});
//   $('[name="item_quantity"]').mask('Z00', {
//     translation: {
//       'Z': {
//         pattern: /[1-9]/,
//       }
//     }
//   });
//   $('.time').mask('00.00');
//   $('.datepicker-here').mask('00.00.0000');
//
// }
// maskIt();
//
// function checkPhoneLenth()
// {
//   var phoneInput = document.querySelector('.phone-input');
//   var submitBtn = document.getElementsByName('submit');
//
//   if (phoneInput) {
//     var phoneValue = phoneInput.value;
//     var phoneLength = phoneValue.length;
//
//     console.log(phoneLength);
//
//     if (phoneLength < 17) {
//       phoneInput.classList.add('error');
//       jQuery('[name="submit"]').prop("disabled", true);
//     } else {
//       phoneInput.classList.remove('error');
//       jQuery('[name="submit"]').prop("disabled", false);
//     }
//   } else {
//     return false;
//   }
// }
// checkPhoneLenth();
//
// function phoneCheck() {
//   $('.phone-input').mask('+38A Z0 000 00 00', {
//     translation: {
//       'A': {
//         pattern: 0,
//       },
//       'Z': {
//         pattern: /[1-9]/,
//       }
//     }
//   });
//   $('.phone-input').on('change', function(){
//     checkPhoneLenth();
//   });
// }
// phoneCheck();
//
// function productForm()
// {
//   $('.product-form').submit(function(e){
//     e.preventDefault();
//     return false;
//   });
//
//   $('.product-form button').on('click', function(){
//     var operation = $(this).val();
//     var form = $(this).parents('.product-form');
//     var element = $(form).find('.item_quantity');
//     var elementValue = $(element).val();
//
//     if (operation == 0) {
//       var newVal = --elementValue;
//       if (newVal == 0) {
//         newVal = 1;
//       }
//       element.val(newVal);
//     }
//     if (operation == 1) {
//       var newVal = ++elementValue;
//       element.val(newVal);
//     }
//
//   });
//
//   $('.form-buy-btn').on('click', function(){
//     var dataId = $(this).data('id');
//     var form = $("[data-form="+ dataId + "] .item_quantity");
//     var formElement = $(form).val();
//
//     var id = $(this).attr("data-id");
//
//     $.ajax({
//       type: "POST",
//       url: "/cart/add_products",
//       data: {
//         product_id: id,
//         product_quantity: formElement,
//       },
//       success: function(data){
//         let info = data.replace('[', '');
//           info = info.replace(']', '');
//           info = info.split(',');
//           $('#cart-count').html(info[0]);
//           $('#cart-price').html(info[1]);
//           // $('#myModal').html(data);
//       }
//     });
//
//     $('.buy-modal').fadeIn('medium').css('display', 'flex');
//     $('.buy-notice').addClass('active');
//     setTimeout(function() {
//       $('.buy-modal').fadeOut('fast');
//     }, 1500);
//   });
//
// }
//
// function cartRadios()
// {
//   $('[name="user_shipping"]').on('change', function(){
//     var value = $(this).val();
//     // var value = $(this).data('trigger');
//     $('[data-tab]').hide('medium');
//     $("[data-tab="+ value +"]").slideDown('medium');
//
//   });
// }
//
// function showCartInfo(quantity, price)
// {
//   price = Number(price);
//   var shippingType = $('input[name="user_shipping"]:checked').val();
//
//   $('#cart-price').html(price);
//   $('#cart-count').html(quantity);
//
//   if (price <= 399) {
//     if (shippingType == 1) {
//       $('#deliveryStatus').html(0);
//       $('#checkoutPrice').html(price);
//     } else {
//       $('#deliveryStatus').html(50);
//       $('#checkoutPrice').html(price + 50);
//     }
//   } else {
//     $('#deliveryStatus').html(0);
//     $('#checkoutPrice').html(price);
//   }
// }
//
// function priceRequest(day, time, shippingType)
// {
//   $.ajax({
//    type: "POST",
//    url: "/cart/checkprice",
//    data: {
//      day: day,
//      time: time,
//      type: shippingType,
//    },
//    success: function(data){
//      let info = data.replace('[', '');
//      info = info.replace(']', '');
//      info = info.split(',');
//      showCartInfo(info[0], info[1]);
//    }
//  });
// }
//
// function changePriceByOptions()
// {
//   var dates = new Date();
//   var weekday = dates.getDay();
//   var currentHour = dates.getHours();
//   var currentMinutes = dates.getMinutes();
//   var currentTime = currentHour.toString() + '.' + currentMinutes.toString();
//
//   var item = $('input[name="user_shipping"]:checked').val();
//   var scheduleItem = $('input[name="shipping_schedule"]:checked').val();
//
//   var day = $('[name="order_date"]').val();
//       day = day.split(".").reverse().join('.');
//   var newDate = new Date(day);
//   var dayNum = newDate.getDay();
//
//   var scheduleTime = $('[name="order_time"]').val();
//
//   if (dayNum == 0) {
//     dayNum = 7;
//   }
//   if (weekday == 0) {
//     weekday = 7;
//   }
//
//   if (scheduleItem == 2) {
//     priceRequest(weekday, currentTime, item);
//   }
//   if (scheduleItem == 3) {
//     priceRequest(dayNum, scheduleTime, item);
//   }
// }
//
// function cartPrices()
// {
//   var dates = new Date();
//   var weekday = dates.getDay();
//   var currentHour = dates.getHours();
//   var currentMinutes = dates.getMinutes();
//   var currentTime = currentHour.toString() + '.' + currentMinutes.toString();
//
//   $('.checkout-form').submit(function(e){
//     e.preventDefault();
//     return false;
//   });
//
//   if (weekday == 0) {
//     weekday = 7;
//   }
//
//   var price = $('#cart-price').html();
//   price = Number(price);
//   if (price <= 399) {
//     $('#checkoutPrice').html(price + 50);
//   }
//
//   $('.product-table [name="button_minus"]').on('click', function(){
//     var id = $(this).val();
//     var element = $(this).next('input');
//     var elementQuantity = $(this).next('input').val();
//     var result = --elementQuantity;
//
//     if (result == 0) {
//       $(element).val(1);
//       return false;
//     } else {
//       $.ajax({
//        type: "POST",
//        url: "/cart/set_products",
//        data: {
//          product_id: id,
//          product_quantity: result,
//        },
//        success: function(data){
//          let info = data.replace('[', '');
//            info = info.replace(']', '');
//            info = info.split(',');
//            changePriceByOptions();
//            $(element).val(result);
//        }
//      });
//     }
//   });
//
//   $('.product-table [name="button_plus"]').on('click', function(){
//     var id = $(this).val();
//     var element = $(this).prev('input');
//     var elementQuantity = $(this).prev('input').val();
//     var result = ++elementQuantity;
//
//     $.ajax({
//      type: "POST",
//      url: "/cart/set_products",
//      data: {
//        product_id: id,
//        product_quantity: result,
//      },
//      success: function(data){
//        let info = data.replace('[', '');
//          info = info.replace(']', '');
//          info = info.split(',');
//          changePriceByOptions();
//          $(element).val(result);
//      }
//    });
//
//   });
//
//   $('.product-table [name="item_quantity"]').on('change', function(){
//     var id = $(this).data('id');
//     var quantity = $(this).val();
//
//     if (quantity == 0) {
//       quantity = 1;
//     }
//
//     $.ajax({
//      type: "POST",
//      url: "/cart/set_products",
//      data: {
//        product_id: id,
//        product_quantity: quantity,
//      },
//      success: function(data){
//        let info = data.replace('[', '');
//          info = info.replace(']', '');
//          info = info.split(',');
//          showCartInfo(info[0], info[1]);
//      }
//    });
//   });
//
//   $('[name="user_shipping"], [name="shipping_schedule"]').on('change', function(){
//     changePriceByOptions();
//   });
//   $('[data-modal="3"]').on('click', function(){
//     changePriceByOptions();
//   });
//
// }
//
//
// cartRadios();
//
// productForm();
//
// cartPrices();
// // end
// });
