const ctx1 = document.getElementById('chartportfolio').getContext('2d');

const data1 = {
  labels: ['50% Investor earnings', '50% Companies earnings'],
  datasets: [{
    data: [50, 50],
    backgroundColor: ['lightblue', 'gray'],
  }],
};

const options1 = {
  responsive: true,
  maintainAspectRatio: false,
  // Your other options here// Your options for Chart 1
};

new Chart(ctx1, {
  type: 'pie',
  data: data1,
  options: options1,
});

