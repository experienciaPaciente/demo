  window.onload = function() {
    const selectElement = document.getElementById("regionSelect");
    selectElement.value = "Total Nacional (31 aglomerados urbanos)";
    updateYear(2003);
    actualizarBanderaPorRegion();
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
