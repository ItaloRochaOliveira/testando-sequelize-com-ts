import { AppointmentRepository } from "./Repository/AppointmentRepository";

AppointmentRepository.getAllAppoint();

AppointmentRepository.createAppoint({
    id: "121212121", 
    name: "Teste de consulta",
    description: "Descrição teste",
    status: "NEW",
    date: "20/06/2024 18:48",
    created_at: "08/06/2024 18:48",
    user_id: "92056f79-327d-4792-9543-ccf68f8597a8"
})
// console.log("Teste");