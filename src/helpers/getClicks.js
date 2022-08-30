import clienteAxios from "../axios"

export const obtenerClicks = async() =>{
    const {data} = await clienteAxios('/click/');

    let clicks = [];


    data.map((c) => {
        clicks.push({
            fecha: c.fecha.substr(0,10),
            nombreVista: c.nombreVista
        });
    });


    const agrupados = clicks.reduce((acum, item) => {
        let i = acum.findIndex(x => x.fecha === item.fecha);
        return i === -1 ? acum.push({fecha: item.fecha, cantidad: 1}) : acum[i].cantidad++, acum;
    }, []);

    return agrupados.slice(-10);
}