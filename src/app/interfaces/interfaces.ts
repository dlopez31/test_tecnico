
export interface Formulario {
    password: string,
    type: string,
    username: string
}

export interface Usuario {
    auth_token: string,
    username: string,
    photo: string
}

export interface Historia {
    subject: string,
    assigned_to_extra_info: {
        photo: string,
        username: string,
    },
    status_extra_info: { name: string },

}





