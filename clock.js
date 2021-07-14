setInterval(() => {
    let d =new Date ;
    let ht =d.getHours();
    let mt = d.getMinutes();
    let st  = d.getSeconds();
    
    let hrot = 30*ht + mt/2 ;
    let mrot = 6*mt ;
    let srot = 6*st ;
    
    hour.style.transform=`rotate(${hrot}deg)`;
    minute.style.transform=`rotate(${mrot}deg)`;
    second.style.transform=`rotate(${srot}deg)`;
}, 1000);