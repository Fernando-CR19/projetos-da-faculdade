// Atualizar

document.getElementById('about').addEventListener('click', function() {
  var aboutContent = document.getElementById('aboutContent');
  if (aboutContent.classList.contains('hidden')) {
    aboutContent.classList.remove('hidden');
  } else {
    aboutContent.classList.add('hidden');
  }
});

// 

document.getElementById('supplier').addEventListener('click', function() {
  var supplierContent = document.getElementById('supplierContent');
  if (supplierContent.classList.contains('hidden')) {
    supplierContent.classList.remove('hidden');
  } else {
    supplierContent.classList.add('hidden');
  }
});