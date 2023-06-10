const chart = document.querySelector("#chart").getContext('2d');

// Fetch the initial Bitcoin value from the API
fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
  .then(response => response.json())
  .then(data => {
    // Update the Bitcoin value in the HTML container
    const bitcoinValue = data.USD.toFixed(2);
    document.getElementById('btc').textContent = `$${bitcoinValue}`;
  })
  .catch(error => {
    console.error('Error fetching Bitcoin value:', error);
  });

// Update the Bitcoin value every 10 seconds
setInterval(() => {
  fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
    .then(response => response.json())
    .then(data => {
      // Update the Bitcoin value in the HTML container
      const bitcoinValue = data.USD.toFixed(2);
      document.getElementById('btc').textContent = `$${bitcoinValue}`;
    })
    .catch(error => {
      console.error('Error fetching Bitcoin value:', error);
    });
}, 5000); // 10 seconds in milliseconds

// Fetch the initial Ethereum value from the API
fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
  .then(response => response.json())
  .then(data => {
    // Update the Ethereum value in the HTML container
    const ethereumValue = data.USD.toFixed(2);
    document.getElementById('eth').textContent = `$${ethereumValue}`;
  })
  .catch(error => {
    console.error('Error fetching Ethereum value:', error);
  });

// Update the Ethereum value every 10 seconds
setInterval(() => {
  fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
    .then(response => response.json())
    .then(data => {
      // Update the Ethereum value in the HTML container
      const ethereumValue = data.USD.toFixed(2);
      document.getElementById('eth').textContent = `$${ethereumValue}`;
    })
    .catch(error => {
      console.error('Error fetching Ethereum value:', error);
    });
}, 10000); // 10 seconds in milliseconds



new Chart(chart,{
    type:'line',
    data : {
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],

        datasets: [
            {
                label:'BTC',
                data:[29374,33543,49543,56943,52345,36543,33423,39653,54322,46442,61232],
                borderColor:'red',
                borderWidth:2
            },
            {
                label:'ETH',
                data:[31500,56886,55443,34313,52345,45321,34213,65454,54322,67543,21235],
                borderColor:'blue',
                borderWidth:2
            }
        ]
    },options: {
        responsive:true 
    }
})

// show or hide sidebar

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click' , ()=>{
    sidebar.style.display = 'block';
})


closeBtn.addEventListener('click',()=>{
    sidebar.style.display = 'none';
})


// change theme

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');

})