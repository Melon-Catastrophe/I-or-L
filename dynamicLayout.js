// var THIN_WIDTH = 1000;

// function getBrowserWidth() {
//     if (window.innerWidth) {
//         return window.innerWidth;
//     } else if (document.documentElement && document.documentElement.clientWidth != 0) {
//         return document.documentElement.clientWidth;
//     } else if (document.body) {
//         return document.body.clientWidth;
//     }

//     return 0;
// }

// function dynamicLayout() {
//     var browserWidth = getBrowserWidth();

//     if (browserWidth < THIN_WIDTH) {
//         changeLayout("thin");
//         console.log("Changing layout to thin")
//     }
// }

// // addEvent() by John Resig
// function addEvent(obj, type, fn) {
//     if (obj.addEventListener) {
//         obj.addEventListener(type, fn, false);
//     } else if (obj.attachEvent) {
//         obj["e" + type + fn] = fn;
//         obj[type + fn] = function() { obj["e" + type + fn](window.event); }
//         obj.attachEvent("on" + type, obj[type + fn]);
//     }
// }

// // Run dynamicLayout function when page loads and when it resizes.
// addEvent(window, 'load', dynamicLayout);
// addEvent(window, 'resize', dynamicLayout);