  window.onload = function() {
    const selectElement = document.getElementById("regionSelect");
    selectElement.value = "Patagonia";
    actualizarBanderaPorRegion();
    // updateYear(2003);
};

function openTab(event, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
  
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active'));
  
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
  }
  
  document.getElementById("defaultTab").click();



  document.addEventListener("DOMContentLoaded", () => {
    const tooltipWrapper = document.querySelector('.tooltip__wrapper');
    const tooltipContent = document.getElementById('tooltip-pobreza');
  
    tooltipWrapper.addEventListener('click', (event) => {
      event.stopPropagation(); // Para evitar que el evento se propague
      tooltipContent.style.visibility = 'visible';
      tooltipContent.style.opacity = '1';
    });
  
    document.addEventListener('click', () => {
      tooltipContent.style.visibility = 'hidden';
      tooltipContent.style.opacity = '0';
    });
  
    tooltipWrapper.addEventListener('mouseleave', () => {
      tooltipContent.style.visibility = 'hidden';
      tooltipContent.style.opacity = '0';
    });
  });
  
