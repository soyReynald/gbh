const testVehicles = [
    { conductor: "Juan", speed: 3000, velocityType: "km/h" },
    { conductor: "Reynald", speed: 300, velocityType: "km/h" },
    { conductor: "Jose", speed: 2000, velocityType: "mph" },
];

const program = (vehicles) => {
    let firstVehicle = {};
    firstVehicle.speed = 0;
    vehicles.map((vehicle) => {
        if (vehicle.type === "mph") {
            vehicle.speed = vehicle.speed * 0.621371;
        }
        if (vehicle.speed > firstVehicle?.speed) {
            firstVehicle = vehicle;
        }
    });
    return `The fastest car is ${firstVehicle.conductor}'s and his velocity is: ${firstVehicle.speed} ${firstVehicle.velocityType}`;
};

console.log(program(testVehicles));
