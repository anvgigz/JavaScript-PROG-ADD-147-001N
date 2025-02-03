// This is a test alert to make sure the file is linked correctly
// alert("hi");    

function addDate() {
    let today = new Date();
    document.getElementById("myDate").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
    document.getElementById("rm2length").value = "";
    document.getElementById("rm2width").value = "";
    document.getElementById("rm2height").value = "";
    document.getElementById("rm2cost").value = "";
    document.getElementById("rm3length").value = "";
    document.getElementById("rm3width").value = "";
    document.getElementById("rm3height").value = "";
    document.getElementById("rm3cost").value = "";
}

function showRooms() {
    const numRooms = document.getElementById('rooms').value;
    document.getElementById('room1').style.display = numRooms >= 1 ? 'block' : 'none';
    document.getElementById('room2').style.display = numRooms >= 2 ? 'block' : 'none';
    document.getElementById('room3').style.display = numRooms >= 3 ? 'block' : 'none';
}

function estimate(roomNumber) {
    let length = parseFloat(document.getElementById(`rm${roomNumber}length`).value);
    let width = parseFloat(document.getElementById(`rm${roomNumber}width`).value);
    let height = parseFloat(document.getElementById(`rm${roomNumber}height`).value);
    let totalSqFt = ((length * height * 2) + (length * width * 2));
    let cost = (totalSqFt * 0.65);
    document.getElementById(`rm${roomNumber}cost`).value = cost;
    return cost;
}

function calculateTotal() {
    let totalCost = 0;
    const numRooms = document.getElementById('rooms').value;
    for (let i = 1; i <= numRooms; i++) {
        totalCost += estimate(i);
    }
    const name = document.getElementById("name").value;
    document.getElementById("estimate").innerHTML = name + ", Total cost is: $" + totalCost.toFixed(2);
}