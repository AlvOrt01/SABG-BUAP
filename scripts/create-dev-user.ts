import { auth } from "../lib/auth";

async function main() {
    try {
        const user = await auth.api.signUpEmail({
            body: {
                name: "María Hernández López",
                email: "maria.hernandez@sabg.local",
                password: "SabgDemo2026!",
            },
        });

        console.log("Usuario creado correctamente:");
        console.log(user);
    } catch (error) {
        console.error("No se pudo crear el usuario:");
        console.error(error);
    }
}

main();