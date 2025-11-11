async function linkwaladata() {
    let get = await fetch("savdealz.json");
    let data = await get.json();

    for (keys in data.sitedata) {
        document.getElementById("print").innerHTML += `
            <div class="card-body">
                <div class="card-image">
                    <img src="${data.sitedata[keys].image}" class="img-fluid head-img" alt="">
                </div>
                <div class="card-text">
                    <h4 class="card-heading">${data.sitedata[keys].meta_title}</h4>
                    <p style="color: #4a4b43;">${data.sitedata[keys].meta_discription}</p>
                    <button class="btn card-btn">Show code</button>
                </div>              
`}
}
linkwaladata();