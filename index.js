
const finalRPM = document.getElementById("final_rpm");
const motorCount = document.getElementById("motor_count");
const runButton = document.getElementById("run");

// Formula: (210/RPM) * Motor Count

runButton.addEventListener('click', () => {
    submit_input();
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        submit_input();
    }
});

function submit_input() {
    if (finalRPM.value && motorCount.value) {
        let torque = ((210) / finalRPM.value) * (motorCount.value / 2);
        alert('Torque output: ' + Math.round((torque * 1000)) / 1000 + " Newton Meters per side.");
    } else {
        alert('You need to enter values into both the boxes');
    }
}
