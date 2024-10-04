  window.onload = function() {
    const selectElement = document.getElementById("regionSelect");
    selectElement.value = "Total Nacional (31 aglomerados urbanos)";
    actualizarBanderaPorRegion();
    // updateYear(2003);
    
    checkScreenWidth = () => {
      
      const screenWidth = window.innerWidth;
     // const kpiWrapper = document.querySelector('.text__wrapper--grid'); // Sólo encontrará al primero
      const kpiWrappers = document.querySelectorAll('.text__wrapper--grid'); // Sólo encontrará al primero

      kpiWrappers.forEach(wrapper => {
        if (screenWidth < 768) {
          wrapper.classList.add('hidden');
        } else {
          wrapper.classList.remove('hidden');
        }
      })
    }

    checkScreenWidth()
    window.addEventListener('resize', checkScreenWidth)
    
  };
