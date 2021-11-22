$('#show_nav').click(function () {
	$('#inner_nav_id').addClass('inner_nav_section')
});
$('.cut_inner').click(function () {
	$('#inner_nav_id').removeClass('inner_nav_section')
})

$('#show_nav').click(function () {
	$('#inner_nav_id').before("<div class='black_chadow'></div>")
})
$('.cut_inner').click(function () {
	$('.black_chadow').addClass('hide_blace')
})
$('.black_chadow').click(function () {
	alert(1);
})

$('body').click(function (e) {
    if($(e.target).closest("#show_nav").length ===  0 && $(e.target).closest("#inner_nav_id").length ===  0 &&  $(e.target).closest("#hide_pop_mit_three").length === 0 && $(e.target).closest("#hide_pop_mit_new").length === 0 && $(e.target).closest("#hide_pop_mit_two").length === 0 && $(e.target).closest("#hide_pop_mit").length === 0 && $(e.target).closest("i.fa.fa-chevron-down").length ===  0) {  
        $('#inner_nav_id').removeClass('inner_nav_section')
        $('.black_chadow').addClass('hide_blace')
      }
});

// button effect--------------

var buttons = document.getElementsByClassName('tuch_effect');

Array.prototype.forEach.call(buttons, function(b){
  b.addEventListener('click', createRipple);
})

function createRipple(e)
{
  if(this.getElementsByClassName('ripple').length > 0)
    {
      this.removeChild(this.childNodes[1]);
    }
  
  var circle = document.createElement('div');
  this.appendChild(circle);
  
  var d = Math.max(this.clientWidth, this.clientHeight);
  circle.style.width = circle.style.height = d + 'px';
  
  circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
  circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';
  
  circle.classList.add('ripple');
}
