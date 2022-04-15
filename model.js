import {readFileSync} from 'fs' ;

export function bio (parameter) {
    const data = readFileSync('./data/biodata.json', 'utf-8');
    let hasil =""
    if (parameter == "datadiri1"){
        hasil = JSON.parse(data).datadiri1;
    }
    else if (parameter == "datadiri2"){
        hasil = JSON.parse(data).datadiri2
    }
    return hasil;
}