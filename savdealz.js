async function linkwaladata(){
    let get = await fetch("savdealz.json");
    let data = await  get.json();

    for(keys in data.site-data){
        document.getElementById("print").innerHTML+=`
        <div class="card col-12 col-md-3">
                <div class="card-body bg-secondary text-white">
                    <div class="card-image">
                        <img src="${data.site-data[keys].image}" class="img" alt="">
                        
                    </div>
                </div>
               
            </div>
`}

}
linkwaladata();