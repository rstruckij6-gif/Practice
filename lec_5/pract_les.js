const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 
    'strings', 'Timon', 'Simba', 'Pumba', 'bravo', 'StarTrack'];

    strings.sort(function(a, b) {
        return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
    });
    console.log(strings);