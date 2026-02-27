let molekul="";

const dataMol = {

"BeCl2":{
bentuk:"Linier",
sudut:"180°",
model:"beryllium dichloride"
},

"BF3":{
bentuk:"Trigonal Datar",
sudut:"120°",
model:"boron trifluoride"
},

"SO2":{
bentuk:"Bentuk V",
sudut:"119°",
model:"sulfur dioxide"
},

"CH4":{
bentuk:"Tetrahedron",
sudut:"109,5°",
model:"methane"
},

"NH3":{
bentuk:"Piramida Trigonal",
sudut:"107°",
model:"ammonia"
},

"H2O":{
bentuk:"Bengkok",
sudut:"104,5°",
model:"water"
},

"PCl5":{
bentuk:"Bipiramida Trigonal",
sudut:"90° & 120°",
model:"phosphorus pentachloride"
},

"SF4":{
bentuk:"Bidang Empat",
sudut:"102°",
model:"sulfur tetrafluoride"
},

"ClF3":{
bentuk:"Bentuk T",
sudut:"87°",
model:"chlorine trifluoride"
},

"XeF2":{
bentuk:"Linier",
sudut:"180°",
model:"xenon difluoride"
},

"SF6":{
bentuk:"Oktahedron",
sudut:"90°",
model:"sulfur hexafluoride"
},

"BrF5":{
bentuk:"Piramida Segi Empat",
sudut:"90°",
model:"bromine pentafluoride"
},

"XeF4":{
bentuk:"Segi Empat Planar",
sudut:"90°",
model:"xenon tetrafluoride"
}
};

function loadMol(val){

molekul = dataMol[val];

document.getElementById("info").innerHTML=
`
<b>Senyawa :</b> ${val}<br>
<b>Bentuk Molekul :</b> ${molekul.bentuk}<br>
<b>Sudut Ikatan :</b> ${molekul.sudut}
`;
}

function openMol(){
if(molekul){
window.open(
"https://molview.org/?q="+molekul.model,
"_blank"
);
}
}