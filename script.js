function moveToSection(x, n) {
  switch (x) {
    case 'BottomId':
      window.scroll({
        top: window.innerHeight * n,
        behavior: 'smooth',
      });
      break;
    case 'TopId':
      window.scroll({
        top: window.innerHeight * n,
        behavior: 'smooth',
      });
  }
}
