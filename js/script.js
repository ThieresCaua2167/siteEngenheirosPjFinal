document.querySelectorAll('.barra').forEach(barra => {
  const lucro = barra.style.getPropertyValue('--lucro');
  barra.style.setProperty('--lucro', `${lucro}%`);
});