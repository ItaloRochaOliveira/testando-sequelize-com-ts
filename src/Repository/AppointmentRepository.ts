import { AppointmentModel } from "../DTO/appointmentModel"
import { Configuration } from "../Repository/configuration"

interface Appoint{
    id: string;
    name: string;
    description: string;
    status: string, 
    date: string, 
    created_at: string,
    user_id: string
}

try{
    Configuration.connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export abstract class AppointmentRepository{
     public static getAllAppoint = async() =>  {
        const appointments = await AppointmentModel.appointment.findAll({
            attributes: ['name', 'description', 'status']
        });
        console.log(appointments.every(appointment => appointment instanceof AppointmentModel));
        console.log("All users: ", JSON.stringify(appointments, null, 2))
    }

    public static createAppoint = async(appoint: Appoint) => {
        Configuration.connection.sync()
        .then(() => {
            return AppointmentModel.appointment.create({
                id: appoint.id,
                name: appoint.name,
                description: appoint.description,
                status: appoint.status,
                data: appoint.date,
                created_at: appoint.created_at,
                update_at: "",
                user_id: appoint.user_id
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

    }
    
    
}
