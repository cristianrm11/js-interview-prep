// Convert the following 

import jsonFile from './data/input.json';

function spreadObjectToString(header: any, row: any, headers: Set<string>, rows: any[]) {
    Object.keys(row).map((prop: any) => {
        console.log(`prop: ${prop}`)
        console.log(`row[prop]: ${row[prop]}`)
        headers.add(`${header}.${prop}`);
        rows.push(`${row[prop]}`);
    });
}


function parseJsonToCsv(data: object[]) {
    let headers = new Set<string>;
    let rows: any[] = [];
    if (typeof data !== 'object') return null;

    data.map((item: any) => {
        Object.keys(item).map((key) => {
            if (typeof item[key] !== 'object') {
                headers.add(key);
                rows.push(item[key]);
            } else {
                spreadObjectToString(key, item[key], headers, rows);
            }
        })
    });

    console.log(Array.from(headers).join(','));
    console.log(rows.join(','));

}

parseJsonToCsv(jsonFile);