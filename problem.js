const testVehicles = [
    { conductor: "Juan", speed: 3000, velocityType: "km/h" },
    { conductor: "Reynald", speed: 300, velocityType: "km/h" },
    { conductor: "Jose", speed: 5000, velocityType: "mph" },
    { conductor: "Francisco", speed: 1000, velocityType: "km/h" },
];

const program = (vehicles) => {
    let firstVehicle = {};
    firstVehicle.speed = 0;
    vehicles.map((vehicle) => {
        const factor = vehicle.velocityType === "km/h" ? 1 : 0.621371; // This can be extended to other units
        vehicle.speed = vehicle.speed * factor;
        if (vehicle.speed > firstVehicle?.speed) {
            firstVehicle = vehicle;
        }
    });
    return `The fastest car is ${firstVehicle.conductor}'s and his velocity is: ${firstVehicle.speed} ${firstVehicle.velocityType}`;
};

console.log(program(testVehicles));
