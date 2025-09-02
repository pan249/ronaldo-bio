// Ambil canvas
const ctx = document.getElementById('stats-canvas').getContext('2d');

// Buat gradien warna emas → merah
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'gold');
gradient.addColorStop(1, 'crimson');

// Chart prestasi
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ballon d\'Or', 'Liga Champions', 'Euro', 'Nations League', 'Top Skor UCL'],
        datasets: [{
            label: 'Jumlah Trofi',
            data: [5, 5, 1, 1, 7],
            backgroundColor: gradient,
            borderColor: '#fff',
            borderWidth: 2,
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: { color: '#fff' }
            },
            tooltip: {
                backgroundColor: '#222',
                titleColor: 'gold',
                bodyColor: '#fff'
            }
        },
        scales: {
            x: {
                ticks: { color: '#fff' },
                grid: { color: 'rgba(255,255,255,0.2)' }
            },
            y: {
                ticks: { color: '#fff' },
                grid: { color: 'rgba(255,255,255,0.2)' }
            }
        }
    }
});
