import { AppointmentModel } from "./DTO/appointmentModel"
import { Configuration } from "./Repository/configuration"

try{
    Configuration.connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

async function getAllAppoint() {
    const appointments = await AppointmentModel.appointment.findAll({
        attributes: ['name', 'description', 'status']
    });
    console.log(appointments.every(appointment => appointment instanceof AppointmentModel));
    console.log("All users: ", JSON.stringify(appointments, null, 2))
}

getAllAppoint();


Configuration.connection.sync()
    .then(() => {
        return AppointmentModel.appointment.create({
            id: "121212121",
            name: "Teste de consulta",
            description: "Descrição teste",
            status: "NEW",
            data: "20/06/2024 18:48",
            created_at: "08/06/2024 18:48",
            update_at: "",
            user_id: "92056f79-327d-4792-9543-ccf68f8597a8"
        })
    })
    .then(user => {
        return AppointmentModel.appointment.findAll();
    })
    .then((appoints) => {
        console.log("Appoints created and finded: ", appoints.map(appoint => appoint.toJSON()))
    }

    )
    .catch((err) => {
        console.log(err)
    });

// console.log("Teste");