const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '42dc2f1aa5msh5bf1af0cc42368fp1f03c6jsn88c35a62d997',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};


fetch('https://yahoo-weather5.p.rapidapi.com/weather?location='+'chonburi'+'&format=json&u=f', options)
	.then(response => response.json())
	.then(response =>  document.querySelector("p").innerHTML = response.location.city)//แสดงหน้าเว็บใช้ document... ตรง response ใช้ . ตามข้อมูลข้างใน
    .catch(err => console.error(err));