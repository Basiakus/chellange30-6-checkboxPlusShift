const checkboxes = document.querySelectorAll('#inbox .item input[type="checkbox"]');

let lastChecked;

function handleCheckbox(e) {
	console.log(this);
	console.log(`this input checked = ${this.checked}`);
	console.log(`this input shiftKey = ${e.shiftKey}`)

	let inBeetwen = false;
	if (e.shiftKey && this.checked) {
		checkboxes.forEach( checkbox => {
			console.log(checkbox);
			if (checkbox === this || checkbox === lastChecked) {
				console.log('We have here this input or lastChecked input');
				inBeetwen = !inBeetwen;
				console.log(`let inBeetwen = ${inBeetwen}`);
			}
			if(inBeetwen) checkbox.checked = true; //all checkboxes beetwen this input and lastChecked input change checked on true 
		});
	} 
	lastChecked = this;
}
checkboxes.forEach( checkbox => checkbox.addEventListener('click', handleCheckbox));