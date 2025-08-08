let serialize = target =>
    Array.from(target.elements).reduce((acc,el) => {
        if(!el.name) return acc;
        acc[el.name] = el.value;
        return acc;
    }, {})

class User{
    static #url = 'https://jsonplaceholder.typicode.com/users';
    static #users = [];
    static #ul = document.createElement('ul');
    static #form = document.createElement('form');
    static #initialValues = {
        name: '',
        email:'',
    }
    constructor(data){
        this.name = data.name;
        this.email = data.email;
    }

    static async getAll(){
        try {
            const response = await fetch(this.#url);
            if (!response.ok) throw response;
            this.#users = await response.json();
            return this.#users;
        } catch (error) {
            console.log('Error',error);
        }
    }

    static renderUser(u){
        let li = document.createElement('li');
        li.innerText = u.name;
        return li;
    }

    static render(){
        this.#ul = document.createElement('ul');
        let users = this.#users;
        users.forEach(u => this.#ul.appendChild(this.renderUser(u)));

        return this.#ul;
    }

    static onSubmit(e){
        e.preventDefault();
        let data = serialize(e.target);
        console.log(data);
        let user = new User(data);
        const errors = user.validate();
        if(Object.keys(errors).length > 0){
           // si hay error, renderizarlos 
            this.#form.innerHTML = this.formHTML({data,errors})
            return;
        }
            // se guarda el usuario
        user.save();
    }

    save(){
        return User.save(this);
    }

    static async save(user){
        try {
            const response = await fetch(this.#url, {
                method:'POST',
                headers: {'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            })
            const data = await response.json();
            this.#users.unshift(data);
            this.#ul.prepend(this.renderUser(data));
        } catch (error) {
            
        }
    }

    validate(){
        let errors = {};
        if (!this.name) {
            errors.name = "Nombre es obligatorio"
        }
        if (!this.email) {
            errors.email = "Correo es obligatorio"
        }

        return errors;
    }

    static formHTML({ data, errors }){
        return `
        <form>
            <div>
            <label>Nombre:</label>
            <input name="name" value="${data.name}"/>
            ${errors.name || ''}
            </div>
            <div>
            <label>Correo:</label>
            <input name="email" value="${data.email}"/>
            ${errors.email || ''}
            </div>
            <input type="submit" value="Enviar" />
        </form>
        `
    }

    static renderForm(){
        this.#form.onsubmit = this.onSubmit.bind(this);
        this.#form.innerHTML = this.formHTML({
            data: this.#initialValues,
            errors:{},
        });

        return this.#form;
    }

    // // ✅ 1. Obtener un usuario por ID
    // static async getById(id) {
    //     try {
    //         const response = await fetch(`${this.#url}/${id}`);
    //         if (!response.ok) throw response;
    //         return await response.json();
    //     } catch (error) {
    //         console.log(`Error al obtener usuario con ID ${id}:`, error);
    //     }
    // }

    // // ✅ 2. Obtener solo los nombres de los usuarios
    // static async getUserNames() {
    //     try {
    //         // Si aún no hemos cargado los usuarios, los cargamos
    //         if (this.#users.length === 0) {
    //             await this.getAll();
    //         }

    //         return this.#users.map(user => user.name);
    //     } catch (error) {
    //         console.log('Error en getUserNames:', error);
    //     }
    // }

    // // ✅ 3. Filtrar usuarios por ciudad
    // static async filterByCity(cityName) {
    //     try {
    //         if (this.#users.length === 0) {
    //             await this.getAll();
    //         }

    //         return this.#users.filter(user => user.address.city.toLowerCase() === cityName.toLowerCase());
    //     } catch (error) {
    //         console.log(`Error al filtrar por ciudad (${cityName}):`, error);
    //     }
    // }
}

async function main(){
    const users = await User.getAll();
    const template = User.render();
    const form = User.renderForm();
    document.body.insertAdjacentElement('afterbegin', template);
    document.body.insertAdjacentElement('afterbegin', form);

    // console.log('\n🔎 Usuario con ID 3:');
    // const oneUser = await User.getById(3);
    // console.log(oneUser);

    // console.log('\n📛 Nombres de todos los usuarios:');
    // const names = await User.getUserNames();
    // console.log(names);

    // console.log('\n🏙️ Usuarios que viven en "South Christy":');
    // const filtered = await User.filterByCity('South Christy');
    // console.log(filtered);
}

main();