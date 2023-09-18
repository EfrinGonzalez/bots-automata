const ctx2 = document.getElementById('chartequity').getContext('2d');

const data2 = {
  labels: ['20% Investors Equity', '80% Company Equity'],
  datasets: [{
    data: [20, 80],
    backgroundColor: ['lightblue', 'gray'],
  }],
};

const options2 = {
  responsive: true,
  maintainAspectRatio: false,
  // Your other options here
};

new Chart(ctx2, {
  type: 'pie',
  data: data2,
  options: options2,
});