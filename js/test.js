/**
 * Created by Admin on 10/6/2016.
 */
// var svgCanvas = document.querySelector('svg'),
//     svgNS = 'http://www.w3.org/2000/svg',
//     rectangles = [];
//
// function Rectangle (x, y, w, h, svgCanvas) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.stroke = 5;
//     this.el = document.createElementNS(svgNS, 'rect');
//
//     this.el.setAttribute('data-index', rectangles.length);
//     this.el.setAttribute('class', 'edit-rectangle');
//     rectangles.push(this);
//
//     this.draw();
//     svgCanvas.appendChild(this.el);
// }
//
// Rectangle.prototype.draw = function () {
//     var x = this.x,
//         y = this.y,
//         w = this.w,
//         h = this.h,
//         cssClass = 'edit-rectangle';
//
//     if (w < 0) {
//         x += w;
//         w = Math.abs(w);
//         cssClass += ' neg-w';
//     }
//     if (h < 0) {
//         y += h;
//         h = Math.abs(h);
//         cssClass += ' neg-h';
//     }
//
//     this.el.setAttribute('x', x + this.stroke / 2);
//     this.el.setAttribute('y', y + this.stroke / 2);
//     this.el.setAttribute('width' , Math.max(w, 10) - this.stroke);
//     this.el.setAttribute('height', Math.max(h, 10) - this.stroke);
//     this.el.setAttribute('stroke-width', this.stroke);
//
//     this.el.setAttribute('class', cssClass);
// }
//
// interact('.edit-rectangle')
// // change how interact gets the
// // dimensions of '.edit-rectangle' elements
//     .rectChecker(function (element) {
//         // find the Rectangle object that the element belongs to
//         var rectangle = rectangles[element.getAttribute('data-index')];
//
//         // return a suitable object for interact.js
//         return {
//             left  : rectangle.x,
//             top   : rectangle.y,
//             right : rectangle.x + rectangle.w,
//             bottom: rectangle.y + rectangle.h
//         };
//     })
//     .draggable({
//         inertia: true,
//         restrict: {
//             // restrict to a parent element that matches this CSS selector
//             restriction: 'svg',
//             // only restrict before ending the drag
//             endOnly: true,
//             // consider the element's dimensions when restricting
//             elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
//         },
//         onmove: function (event) {
//             var rectangle = rectangles[event.target.getAttribute('data-index')];
//
//             rectangle.x += event.dx;
//             rectangle.y += event.dy;
//             rectangle.draw();
//         }
//     })
//     .resizable({
//         edges: { left: true, right: true, top: true, bottom: true },
//         invert: 'reposition',
//         //restrict: {
//         //restriction: 'svg',
//         //elementRect: { top: 1, left: 1, bottom: 1, right: 1 }
//         //},
//         onmove: function (event) {
//             var rectangle = rectangles[event.target.getAttribute('data-index')];
//
//             rectangle.x = event.rect.left;
//             rectangle.y = event.rect.top;
//             rectangle.w = event.rect.width;
//             rectangle.h = event.rect.height;
//             rectangle.draw();
//         }
//     });
//
// for (var i = 0; i < 5; i++) {
//     new Rectangle(50 + 100 * i, 80, 80, 80, svgCanvas);
// }
//
// interact('input#invert').on('input change', function(event) {
//     interact('.edit-rectangle')
//         .resizable({ invert: event.target.value });
// })

$(function() {

    var folder = $("#drop2"),
        // img = $("#element div");
        img = $("#element .draggable");


    img.draggable();

    folder.droppable({
        drop : function(event, ui) {

            // Remove the dragged icon
            ui.draggable.remove();
            var img= $("#element .draggable");
            // alert(img.tagName);


        }
    });
})
$(document).ready(function () {
    var flag=true;
    $("#nav").click(function(){
        if(flag){
            flag=false;
            $(this).css({
                transition:"transform 1s",
                webkitTransition:"transform 1s",
                oTransition:"transform 1s",
                msTransition:"transform 1s",
                mozTransition:"transform 1s",

                transform:"scale(1.5)",
                webkitTransform:"scale(1.5)",
                oTransform:"scale(1.5)",
                msTransform:"scale(1.5)",
                mozTransform:"scale(1.5)"
            });
            $("#out").css({
                transition:"margin-left 1s, margin-top 1s",
                webkitTransition:"margin-left 1s, margin-top 1s",
                oTransition:"margin-left 1s, margin-top 1s",
                msTransition:"margin-left 1s, margin-top 1s",
                mozTransition:"margin-left 1s, margin-top 1s",

                marginLeft:"-350px",
                marginTop:"-350px"
            });
            $("#first").css({
                transition:"left 1.2s,top 1.2s",
                webkitTransition:"left 1.2s,top 1.2s",
                oTransition:"left 1.2s,top 1.2s",
                msTransition:"left 1.2s,top 1.2s",
                mozTransition:"left 1.2s,top 1.2s",

                left:"200px",
                top:"15px"
            });
            $("#second").css({
                transition:"left 1.5s,top 1.5s",
                webkitTransition:"left 1.5s,top 1.5s",
                oTransition:"left 1.5s,top 1.5s",
                msTransition:"left 1.5s,top 1.5s",
                mozTransition:"left 1.5s,top 1.5s",
                left:"150px",
                top:"150px"
            });
            $("#third").css({
                transition:"left 1.8s,top 1.8s",
                webkitTransition:"left 1.8s,top 1.8s",
                oTransition:"left 1.8s,top 1.8s",
                msTransition:"left 1.8s,top 1.8s",
                mozTransition:"left 1.8s,top 1.8s",
                left:"20px",
                top:"210px"
            });
        }else{
            flag=true;
            $(this).css({
                transition:"transform 1s",
                webkitTransition:"transform 1s",
                oTransition:"transform 1s",
                msTransition:"transform 1s",
                mozTransition:"transform 1s",

                transform:"scale(1)",
                webkitTransform:"scale(1)",
                oTransform:"scale(1)",
                mozTransition:"scale(1)",
                msTransform:"scale(1)"
            });
            $("#out").css({
                transition:"margin-left 0.5s, margin-top 0.5s",
                webkitTransition:"margin-left 0.5s, margin-top 0.5s",
                oTransition:"margin-left 0.5s, margin-top 0.5s",
                msTransition:"margin-left 0.5s, margin-top 0.5s",
                mozTransition:"margin-left 0.5s, margin-top 0.5s",
                marginLeft:"-550px",
                marginTop:"-550px"
            });
            $("#first").css({
                transition:"left 1s,top 1s",
                webkitTransition:"left 1s,top 1s",
                oTransition:"left 1s,top 1s",
                msTransition:"left 1s,top 1s",
                mozTransition:"left 1s,top 1s",
                left:"-100px",
                top:"-100px"
            });
            $("#second").css({
                transition:"left 1s,top 1s",
                webkitTransition:"left 1s,top 1s",
                oTransition:"left 1s,top 1s",
                msTransition:"left 1s,top 1s",
                mozTransition:"left 1s,top 1s",
                left:"-100px",
                top:"-100px"
            });
            $("#third").css({
                transition:"left 1s,top 1s",
                webkitTransition:"left 1s,top 1s",
                oTransition:"left 1s,top 1s",
                msTransition:"left 1s,top 1s",
                mozTransition:"left 1s,top 1s",
                left:"-100px",
                top:"-100px"
            });
        }
    });
});
