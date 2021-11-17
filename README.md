# liveworksheet-cheat
Tihs is a Liveworkshhhet cheat   
```function rtas(contenidojson) {
    var c = JSON.parse(contenidojson)
    for (let i = 0; i < c.length; i++) {
        var r = c[i][0]
        if (r.includes('/')) {
            r = r.replace('choose:', '')
            if (r.includes('/*')) {
                r = r.split("/*").pop();
            } else {
                r = r.split('/')[0];
                r = r.replace('*', '')
            }

        }
        console.log(`${i} ${r}\n`)
    }
}
rtas(contenidojson)```