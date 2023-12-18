// Credit: Mannat V. Jain for creating the website

const finalRPM = document.getElementById("final_rpm");
const motorCount = document.getElementById("motor_count");
const runButton = document.getElementById("run");

// Formula: (210/RPM) * Motor Count

runButton.addEventListener('click', () => {
 if (finalRPM.value && motorCount.value) {
   let torque = ((210)/finalRPM.value)*(motorCount.value/2);
   alert('Torque output: ' + Math.round((torque*1000))/1000 + " Newton Meters");
 } else {
   alert('You need to enter values into both the boxes');
 }
});
