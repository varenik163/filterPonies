export function selectPonies(ponies, poniesFilter) {
    return ponies.filter(elem => {
        if( poniesFilter.priceTo && elem.price > poniesFilter.priceTo
            || elem.price < poniesFilter.priceFrom && poniesFilter.priceFrom
        ) return false

        for(let key in poniesFilter){
            if(!poniesFilter[key]) continue
            if(poniesFilter[key] !== elem[key] && key !== 'priceTo' && key !== 'priceFrom'){
                return false
            }
        }

        return true
    }).slice(0,20)
}