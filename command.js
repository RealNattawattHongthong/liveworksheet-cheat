//press f12 and click console
//copy this
function rtas(contenidojson) {
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