const row = document.querySelector('.container-carousel-js');
const series = document.querySelectorAll('.series-carousel-js');
const series2 = document.querySelectorAll('.series-carousel');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// Add event listener for right arrow //
rightArrow.addEventListener('click', () => {
    row.scrollLeft += row.offsetWidth;

    const kpiActive = document.querySelector('.kpis .active');
    if(kpiActive.nextSibling){
        kpiActive.nextSibling.classList.add('active');
        kpiActive.classList.remove('active');
    }
});

// Add event listener for left arrow //
leftArrow.addEventListener('click', () => {
    row.scrollLeft -= row.offsetWidth;

    const kpiActive = document.querySelector('.kpis .active');
    if(kpiActive.previousSibling){
        kpiActive.previousSibling.classList.add('active');
        kpiActive.classList.remove('active');
    }
});

// Pages //
const numPages = Math.ceil(series.length / 5);

for(let i = 0; i < numPages; i++){
    const kpi = document.createElement('button');

    if(i === 0){
        kpi.classList.add('active');
    }

    document.querySelector('.kpis').appendChild(kpi);

    kpi.addEventListener('click', (e) => {
        row.scrollLeft = i * row.offsetWidth;

        document.querySelector('.kpis .active').classList.remove('active');
        e.target.classList.add('active');
    });
}

// Hover image //
series.forEach((serie) => {
    serie.addEventListener('mouseenter', (e) => {
        const element = e.currentTarget;
        setTimeout(() => {
            series.forEach(serie => serie.classList.remove('hover'));
            element.classList.add('hover');
        }, 300);
    });
});

row.addEventListener('mouseleave', () => {
    series.forEach(serie => serie.classList.remove('hover'));
})



series2.forEach((serie2) => {
    serie2.addEventListener('mouseenter', (e) => {
        const element = e.currentTarget;
        setTimeout(() => {
            series2.forEach(serie2 => serie2.classList.remove('hover'));
            element.classList.add('hover');
        }, 300);
    });
});

row.addEventListener('mouseleave', () => {
    series2.forEach(serie2 => serie2.classList.remove('hover'));
})