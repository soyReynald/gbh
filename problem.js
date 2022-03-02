const testVehicles = [
    { conductor: "Antonio Giovinazzi", speed: 1000, velocityType: "km/h" },
    { conductor: "Reynald", speed: 300, velocityType: "km/h" },
    { conductor: "Jose", speed: 3000, velocityType: "m/s" },
    { conductor: "Francisco Alberto", speed: 1000, velocityType: "km/h" },
];

const program = (vehicles) => {
    let firstVehicle = {};
    firstVehicle.speed = 0;
    vehicles.map((vehicle, idx) => {
        const factor = () => { 
            if(vehicle.velocityType === "km/h"){
                return 1
            } else if (vehicle.velocityType === "m/s") { 
                return 0.277778 
            } else if ( vehicle.velocityType === "km/s") { 
                return 0.000277778
            } else if(vehicle.velocityType === "mi/h") { 
                return 0.621371 
            }
        }
        vehicle.speed = vehicle.speed * factor();
        if(vehicle.speed < 0) throw new Error("There's a negative speed, and that's not allowed");
        if(idx === 0) return firstVehicle = vehicle
        if (vehicle.speed > firstVehicle.speed) {
            firstVehicle = vehicle;
        }
    });
    return `The winner is: ${firstVehicle.conductor} with a speed of ${firstVehicle.speed} ${firstVehicle.velocityType}`;
};

console.log(program(testVehicles));
