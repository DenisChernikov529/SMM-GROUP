var select = document.querySelector('select');

select.onchange = function() {
  var indexSelected = select.selectedIndex,
      option = select.querySelectorAll('option')[indexSelected];

  var selectedId = option.getAttribute('id');

  if( selectedId == '1' ) alert(1);
  if( selectedId == '2' ) alert(2);
  if( selectedId == '3' ) alert(3);
  if( selectedId == '4' ) alert(4);
  if( selectedId == '5' ) alert(5);
  if( selectedId == '6' ) alert(6);
};