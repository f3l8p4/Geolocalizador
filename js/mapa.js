const Senha = 'at_Bizh2YquYKnMqjtKNNUJdcruNWq3Y'
const icon  = L.icon({
	iconUrl: 'images/icon-location.svg',
})

async function PegarIp() {
	const ip = await fetch(`https://geo.ipify.org/api/v1?apiKey=${Senha}`);
	const ipData = await ip.json();
	MostrarInformacoes(ipData);
	MostrarMapa(ipData)
   }
   PegarIp();

	 let Information = document.getElementsByTagName('span')

	 function MostrarInformacoes(data){
		Information.item(0).innerHTML = `${data.ip}`
		Information.item(1).innerHTML = `${data.location.city}, ${data.location.region}`
		Information.item(2).innerHTML = `UTC ${data.location.timezone}` 
		Information.item(3).innerHTML = `${data.isp}`
	 }
	 function MostrarMapa(data){
		 const Latitude = data.location.lat
		 const Longitute = data.location.lng
		let mymap = L.map('mapid').setView([Latitude,Longitute], 13);
		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
				'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1,
	}).addTo(mymap);
	Marcador(data)
	 }
	 function Marcador(data) {
		const lat = data.location.lat
		const lng = data.location.lng
		myMap.setView([lat, lng], 13)
		L.marker([lat, lng],13,{icon:icon}).addTo(mymap)
	   }

	function Pesquisar(){
		let botao = document.getElementsByClassName('arrow')
		let ip = fetch(`https://geo.ipify.org/api/v1?apiKey=${Senha}&domain=${botao.value}`)
		
	}