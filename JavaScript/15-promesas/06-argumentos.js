let promesa1 = user => new Promise((res,rej) => {
    res(user);
});

let promesa2 = user => new Promise((res,rej) => {
    res(user + ', hola mundo');
});

promesa1('Magdiel')
    .then(user => promesa2(user))
    .then(dato => console.log(dato))