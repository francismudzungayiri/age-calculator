document.getElementsById('calc').addEventListener('click', () => {
    alert('hello')

    var day = document.getElementById('day').value;
    var month = docunent.getElementById('month').value;
    var year = document.getElementById('year').value;


    console.log(day + '  ' + month + ' ' + year)
})