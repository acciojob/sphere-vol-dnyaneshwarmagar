function volume_sphere() {
    //Write your code here
	const radius = Number(document.getElementById('radius').value);
	document.getElementById('volume').value = ""
    if (!isNaN(radius) && radius > 0) {

        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        

        document.getElementById('volume').value = volume.toFixed(4);
    } else {
		document.getElementById('volume').value = "NaN"
        
    }
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
