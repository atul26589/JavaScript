let company = {
    name:"TechCorp",
    location:"San Francisco",
    departments:{
engineering:{
    head:"John Doe",
    employees:50
},
marketing:{
    head:"Jane Smith",
    employees:30
}
    }
};

console.log(company.departments.engineering.head);
console.log(company.departments.marketing.head);
console.log('============================================');

let smartphone={
    brand:"PhoneCorp",
    model:"X500",
    specs:{
        display:"6.5-inch",
        storage:"128GB",
        camera:{
            resolution:"12MP",
            video:function(){
                return "4k video recording";
            }
        }
    }
};

console.log(smartphone.specs.camera.resolution);
console.log(smartphone.specs.camera.video());

let colors=["red","green","blue",12];
for (let color of colors){
    console.log(color);
}
