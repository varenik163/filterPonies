export function selectPonies(ponies, poniesFilter) {
    return ponies.filter(elem => {
        for(let key in poniesFilter){
            if(!poniesFilter[key]) continue
            if(poniesFilter[key] !== elem[key]){
                return false
            }
        }

        return true
    }).slice(0,20)
}