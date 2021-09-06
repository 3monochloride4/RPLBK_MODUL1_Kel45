const conclude = async () => {
    let p = new Promise((resolve) => {
        setTimeout(() => resolve(compare()), 2000)
    });

    let result = await p;
    const a = result[0];
    const b = result[1];
    const c = (a >= b) ? `${a} lebih besar atau sama dengan ${b}`:`${a} lebih kecil dari ${b}`
    document.write(c + '<br>');
    document.write('Silahkan refresh halaman untuk mencoba lagi.')
}

const compare = () => {
    var a = document.getElementById('textbox_1').value;
    var b = document.getElementById('textbox_2').value;
    a = Number(a);
    b = Number(b);
    a = a % 5;
    b = b % 5;
    document.write();
    return [a, b];
}