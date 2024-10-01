const datos = [
  {
    año: 2003,
    pobreza: { porcentaje: 58.2, cantidad: '22.270.000' },
    indigencia: { porcentaje: 21.1, cantidad: '8.058.000' }
  },
  {
    año: 2004,
    pobreza: { porcentaje: 54.55, cantidad: '21.336.000' },
    indigencia: { porcentaje: 18.2, cantidad: '7.197.000' }
  },
  {
    año: 2005,
    pobreza: { porcentaje: 48.7, cantidad: '19.290.000' },
    indigencia: { porcentaje: 14.2, cantidad: '5.608.500' }
  },
  {
    año: 2006,
    pobreza: { porcentaje: 41.45, cantidad: '15.973.500' },
    indigencia: { porcentaje: 11.1, cantidad: '4.267.500' }
  },
  {
    año: 2007,
    pobreza: { porcentaje: 37.4, cantidad: '14.599.500' },
    indigencia: { porcentaje: 8.85, cantidad: '3.452.000' }
  },
  {
    año: 2008,
    pobreza: { porcentaje: 35.55, cantidad: '14.067.000' },
    indigencia: { porcentaje: 8.25, cantidad: '3.262.000' }
  },
  {
    año: 2009,
    pobreza: { porcentaje: 33.7, cantidad: '13.267.500' },
    indigencia: { porcentaje: 7.75, cantidad: '3.051.000' }
  },
  {
    año: 2010,
    pobreza: { porcentaje: 32.25, cantidad: '12.925.000' },
    indigencia: { porcentaje: 7.55, cantidad: '3.024.500' }
  },
  {
    año: 2011,
    pobreza: { porcentaje: 28.7, cantidad: '11.385.000' },
    indigencia: { porcentaje: 6.4, cantidad: '2.539.000' }
  },
  {
    año: 2012,
    pobreza: { porcentaje: 27.8, cantidad: '11.378.500' },
    indigencia: { porcentaje: 6.25, cantidad: '2.553.500' }
  },
  {
    año: 2013,
    pobreza: { porcentaje: 27.45, cantidad: '11.419.500' },
    indigencia: { porcentaje: 5.85, cantidad: '2.432.000' }
  },
  {
    año: 2014,
    pobreza: { porcentaje: 31.25, cantidad: '12.973.000' },
    indigencia: { porcentaje: 6.55, cantidad: '2.719.500' }
  },
  {
    año: 2015,
    pobreza: { porcentaje: 30.1, cantidad: '12.738.000' },
    indigencia: { porcentaje: 5.9, cantidad: '2.501.000' }
  },
  {
    año: 2016,
    pobreza: { porcentaje: 30.85, cantidad: '12.875.500' },
    indigencia: { porcentaje: 6.25, cantidad: '2.610.500' }
  },
  {
    año: 2017,
    pobreza: { porcentaje: 27.15, cantidad: '11.038.000' },
    indigencia: { porcentaje: 5.5, cantidad: '2.235.500' }
  },
  {
    año: 2018,
    pobreza: { porcentaje: 29.65, cantidad: '11691.500' },
    indigencia: { porcentaje: 5.8, cantidad: '2.288.000' }
  },
  {
    año: 2019,
    pobreza: { porcentaje: 35.45, cantidad: '14.729.000' },
    indigencia: { porcentaje: 7.85, cantidad: '3.262.000' }
  },
  {
    año: 2020,
    pobreza: { porcentaje: 41.45, cantidad: '17.106.000' },
    indigencia: { porcentaje: 10.5, cantidad: '4.335.000' }
  },
  {
    año: 2021,
    pobreza: { porcentaje: 38.95, cantidad: '16.954.500' },
    indigencia: { porcentaje: 9.45, cantidad: '4116500' }
  },
  {
    año: 2022,
    pobreza: { porcentaje: 37.85, cantidad: '16.821.000' },
    indigencia: { porcentaje: 8.45, cantidad: '3.755.000' }
  },
  {
    año: 2023,
    pobreza: { porcentaje: 40.9, cantidad: '17.910.000' },
    indigencia: { porcentaje: 10.6, cantidad: '4.640.500' }
  },
  {
    año: 2024,
    pobreza: { porcentaje: 52.9, cantidad: '24.455.670' },
    indigencia: { porcentaje: 18.1, cantidad: '8.367.630' }
  }
];
  
  function updateYear(selectedYear) {
    // Actualizamos el año seleccionado en la interfaz
    document.getElementById('selectedYear').innerText = selectedYear;
  
    const data = datos.find(d => d.año == selectedYear);
    
    if (data) {
      const pobrezaHeight = data.pobreza.porcentaje;
      const indigenciaHeight = data.indigencia.porcentaje;
      const middleStripeHeight = 100 - pobrezaHeight - indigenciaHeight;
  
      document.getElementById('pobreza').style.setProperty('--flag__stripe--height', pobrezaHeight + '%');
      document.getElementById('indigencia').style.setProperty('--flag__stripe--height', indigenciaHeight + '%');
      document.getElementById('oportunidades').style.setProperty('--flag__stripe--height', middleStripeHeight + '%');
      
      const porcentajePobreza = document.getElementById('porcentaje-pobreza');
      const porcentajeIndigencia = document.getElementById('porcentaje-indigencia');
      const personasPobreza = document.getElementById('personas-pobreza');
      const personasIndigencia = document.getElementById('personas-indigencia');

      const holderPorcentajePob = document.querySelector('.flag__output--top');
      const holderPorcentajeInd = document.querySelector('.flag__output--bottom');
      
      porcentajePobreza.textContent = `${data.pobreza.porcentaje}%`;
      porcentajeIndigencia.textContent = `${data.indigencia.porcentaje}%`;
      holderPorcentajePob.textContent = `${data.pobreza.porcentaje}%`;
      holderPorcentajeInd.textContent = `${data.indigencia.porcentaje}%`;
      
      personasPobreza.textContent = `${data.pobreza.cantidad} personas`
      personasIndigencia.textContent = `${data.indigencia.cantidad} personas`
      
      // Blink effect
      const slider = document.getElementById('yearRange');
      const topStripe =  document.getElementById('pobreza');
      const bottomStripe =  document.getElementById('indigencia');
      slider.onchange = function () {
        document.querySelector('.flag__stripe--bottom').classList.add('stripe__blink--bottom');
        document.querySelector('.flag__stripe--top').classList.add('stripe__blink--top');
          setTimeout(function() {
            bottomStripe.classList.remove('stripe__blink--bottom');
            topStripe.classList.remove('stripe__blink--top');
        }, 3000);
      }
    }
  }
  
  updateYear(2003);
  
  