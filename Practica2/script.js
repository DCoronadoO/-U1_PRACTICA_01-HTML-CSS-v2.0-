function residente() {
    //var residente = document.getElementsByClassName("residente").style.background = "GreenYellow";
    const residente = Array.from(
        document.getElementsByClassName('r_sindeudas')
    );
    residente.forEach(item => {
        item.style.backgroundColor = 'GreenYellow';
    });
    //
    const con_deudas = Array.from(
        document.getElementsByClassName('con_deudas')
    );
    con_deudas.forEach(item => {
        item.style.backgroundColor = 'red';
    });
    //
    const sin_dueno = Array.from(
        document.getElementsByClassName('sin_dueno')
    );
    sin_dueno.forEach(item => {
        item.style.backgroundColor = 'grey';
    });
    const med_deudas = Array.from(
        document.getElementsByClassName('med_deudas')
    );
    med_deudas.forEach(item => {
        item.style.backgroundColor = 'yellow';
    });
}
function rsinDeudas() {
    //var residente = document.getElementsByClassName("residente").style.background = "GreenYellow";
    const residente = Array.from(
        document.getElementsByClassName('r_sindeudas')
    );
    residente.forEach(item => {
        item.style.backgroundColor = 'GreenYellow';
    });
    //
    const con_deudas = Array.from(
        document.getElementsByClassName('con_deudas')
    );
    con_deudas.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
    //
    const sin_dueno = Array.from(
        document.getElementsByClassName('sin_dueno')
    );
    sin_dueno.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
    const med_deudas = Array.from(
        document.getElementsByClassName('med_deudas')
    );
    med_deudas.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
}
function rconDeudas() {
    //var residente = document.getElementsByClassName("residente").style.background = "GreenYellow";
    const residente = Array.from(
        document.getElementsByClassName('r_sindeudas')
    );
    residente.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
    //
    const con_deudas = Array.from(
        document.getElementsByClassName('con_deudas')
    );
    con_deudas.forEach(item => {
        item.style.backgroundColor = 'red';
    });
    //
    const med_deudas = Array.from(
        document.getElementsByClassName('med_deudas')
    );
    med_deudas.forEach(item => {
        item.style.backgroundColor = 'yellow';
    });
    //
    const sin_dueno = Array.from(
        document.getElementsByClassName('sin_dueno')
    );
    sin_dueno.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
}
function rsinPropiedad() {
    //var residente = document.getElementsByClassName("residente").style.background = "GreenYellow";
    const residente = Array.from(
        document.getElementsByClassName('r_sindeudas')
    );
    residente.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
    //
    const con_deudas = Array.from(
        document.getElementsByClassName('con_deudas')
    );
    con_deudas.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
    //
    const med_deudas = Array.from(
        document.getElementsByClassName('med_deudas')
    );
    med_deudas.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
    //
    const sin_dueno = Array.from(
        document.getElementsByClassName('sin_dueno')
    );
    sin_dueno.forEach(item => {
        item.style.backgroundColor = 'gray';
    });
}