const testVehicles = [
    { conductor: "Juan", speed: 900, velocityType: "km/h" },
    { conductor: "Reynald", speed: 300, velocityType: "km/h" },
    { conductor: "Jose", speed: 250, velocityType: "km/h" },
];

const program = (vehicles) => {
    let firstVehicle = {};
    firstVehicle.speed = 0;
    vehicles.map((vehicle) => {
        if (vehicle.speed > firstVehicle?.speed) {
            firstVehicle = vehicle;
        }
    });
    return `The fastest car is ${firstVehicle.conductor}'s`;
};

console.log(program(testVehicles));
