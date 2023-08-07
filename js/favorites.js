<<<<<<< HEAD
<<<<<<< HEAD
import { empty } from "./empty.js";
import { GithubUser } from "./Github.js";

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root);
        this.load();
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('@git-fav:')) || []


    }

    save() {
        localStorage.setItem('@git-fav:', JSON.stringify(this.entries))
    }

    async add(username) {
        try {

            const userExists = this.entries.find(entry => entry.login === username);

            if(userExists) {
                throw new Error('Usuário já cadastrado!')
            }

            const user = await GithubUser.search(username);
            
            if(user.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }

            this.entries = [user, ...this.entries];
            this.update()
            this.save()

        } catch(error) {
            alert(error.message);
        }
        

    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login);

        this.entries = filteredEntries;
        this.update();
        this.save();
    }
}

export class FavoritesView extends Favorites {
    constructor(root){
        super(root);

        this.tbody = this.root.querySelector('.wrapper table tbody');
        
        
        this.update()
        this.onadd()
    }

    onadd() {
        const addButton = document.querySelector('.search button');
        const input = document.querySelector('.search input')

        addButton.addEventListener('click', () => {
            const { value } = this.root.querySelector('.search input');

            this.add(value); 
        })


       
        input.addEventListener('keydown', (event) => {
            const { value } = this.root.querySelector('.search input');
            if(event.key === "Enter") {
                this.add(value);
            }
        })

    }


    update() {
        this.removeAllTr()

        

        this.entries
         .forEach(user => {
            const row = this.createRow();

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
            row.querySelector('.user img').alt = `Imagem de perfil de ${user.name}`;
            row.querySelector('.user a').href = `https://github.com/${user.login}`;
            row.querySelector('.user a p').textContent = user.name;
            row.querySelector('.user a span').textContent = `/${user.login}`;
            row.querySelector('.repositories').textContent = user.public_repos;
            row.querySelector('.followers').textContent = user.followers;


            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que quer excluir esse usuário?');

                if(isOk) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        });

         this.showEmptyMessage()

        
        
        
    }

    createRow() {
        const tr = document.createElement('tr');
        tr.innerHTML = 
        `
        <td class="user">
            <img src="https://github.com/maykbrito.png" alt="Imagem de perfil de Mayk Brito">
            <a href="https://github.com/maykbrito" target="_blank">
                <p>Mayk Brito</p>
                <span>/maykbrito</span>
            </a>
        </td>

        <td class="repositories">123</td>

        <td class="followers">1234</td>

        <td class="remove">Remover</td>
        `
        return tr
    }


    removeAllTr() {
        this.tbody.querySelectorAll('tr')
         .forEach((tr) => {
            tr.remove()
        });
        
    }


    showEmptyMessage() {
        if(this.tbody.innerHTML.trim() === '') {
            empty()
        }
    }

=======
import { empty } from "./empty.js";
import { GithubUser } from "./Github.js";

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root);
        this.load();
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('@git-fav:')) || []


    }

    save() {
        localStorage.setItem('@git-fav:', JSON.stringify(this.entries))
    }

    async add(username) {
        try {

            const userExists = this.entries.find(entry => entry.login === username);

            if(userExists) {
                throw new Error('Usuário já cadastrado!')
            }

            const user = await GithubUser.search(username);
            
            if(user.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }

            this.entries = [user, ...this.entries];
            this.update()
            this.save()

        } catch(error) {
            alert(error.message);
        }
        

    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login);

        this.entries = filteredEntries;
        this.update();
        this.save();
    }
}

export class FavoritesView extends Favorites {
    constructor(root){
        super(root);

        this.tbody = this.root.querySelector('.wrapper table tbody');
        
        
        this.update()
        this.onadd()
    }

    onadd() {
        const addButton = document.querySelector('.search button');
        const input = document.querySelector('.search input')

        addButton.addEventListener('click', () => {
            const { value } = this.root.querySelector('.search input');

            this.add(value); 
        })


       
        input.addEventListener('keydown', (event) => {
            const { value } = this.root.querySelector('.search input');
            if(event.key === "Enter") {
                this.add(value);
            }
        })

    }


    update() {
        this.removeAllTr()

        

        this.entries
         .forEach(user => {
            const row = this.createRow();

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
            row.querySelector('.user img').alt = `Imagem de perfil de ${user.name}`;
            row.querySelector('.user a').href = `https://github.com/${user.login}`;
            row.querySelector('.user a p').textContent = user.name;
            row.querySelector('.user a span').textContent = `/${user.login}`;
            row.querySelector('.repositories').textContent = user.public_repos;
            row.querySelector('.followers').textContent = user.followers;


            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que quer excluir esse usuário?');

                if(isOk) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        });

         this.showEmptyMessage()

        
        
        
    }

    createRow() {
        const tr = document.createElement('tr');
        tr.innerHTML = 
        `
        <td class="user">
            <img src="https://github.com/maykbrito.png" alt="Imagem de perfil de Mayk Brito">
            <a href="https://github.com/maykbrito" target="_blank">
                <p>Mayk Brito</p>
                <span>/maykbrito</span>
            </a>
        </td>

        <td class="repositories">123</td>

        <td class="followers">1234</td>

        <td class="remove">Remover</td>
        `
        return tr
    }


    removeAllTr() {
        this.tbody.querySelectorAll('tr')
         .forEach((tr) => {
            tr.remove()
        });
        
    }


    showEmptyMessage() {
        if(this.tbody.innerHTML.trim() === '') {
            empty()
        }
    }

>>>>>>> e231833fb1d35be174b05e011c3ca1fdd5d7170e
=======
import { empty } from "./empty.js";
import { GithubUser } from "./Github.js";

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root);
        this.load();
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('@git-fav:')) || []


    }

    save() {
        localStorage.setItem('@git-fav:', JSON.stringify(this.entries))
    }

    async add(username) {
        try {

            const userExists = this.entries.find(entry => entry.login === username);

            if(userExists) {
                throw new Error('Usuário já cadastrado!')
            }

            const user = await GithubUser.search(username);
            
            if(user.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }

            this.entries = [user, ...this.entries];
            this.update()
            this.save()

        } catch(error) {
            alert(error.message);
        }
        

    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login);

        this.entries = filteredEntries;
        this.update();
        this.save();
    }
}

export class FavoritesView extends Favorites {
    constructor(root){
        super(root);

        this.tbody = this.root.querySelector('.wrapper table tbody');
        
        
        this.update()
        this.onadd()
    }

    onadd() {
        const addButton = document.querySelector('.search button');
        const input = document.querySelector('.search input')

        addButton.addEventListener('click', () => {
            const { value } = this.root.querySelector('.search input');

            this.add(value); 
        })


       
        input.addEventListener('keydown', (event) => {
            const { value } = this.root.querySelector('.search input');
            if(event.key === "Enter") {
                this.add(value);
            }
        })

    }


    update() {
        this.removeAllTr()

        

        this.entries
         .forEach(user => {
            const row = this.createRow();

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
            row.querySelector('.user img').alt = `Imagem de perfil de ${user.name}`;
            row.querySelector('.user a').href = `https://github.com/${user.login}`;
            row.querySelector('.user a p').textContent = user.name;
            row.querySelector('.user a span').textContent = `/${user.login}`;
            row.querySelector('.repositories').textContent = user.public_repos;
            row.querySelector('.followers').textContent = user.followers;


            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que quer excluir esse usuário?');

                if(isOk) {
                    this.delete(user)
                }
            }

            this.tbody.append(row)
        });

         this.showEmptyMessage()

        
        
        
    }

    createRow() {
        const tr = document.createElement('tr');
        tr.innerHTML = 
        `
        <td class="user">
            <img src="https://github.com/maykbrito.png" alt="Imagem de perfil de Mayk Brito">
            <a href="https://github.com/maykbrito" target="_blank">
                <p>Mayk Brito</p>
                <span>/maykbrito</span>
            </a>
        </td>

        <td class="repositories">123</td>

        <td class="followers">1234</td>

        <td class="remove">Remover</td>
        `
        return tr
    }


    removeAllTr() {
        this.tbody.querySelectorAll('tr')
         .forEach((tr) => {
            tr.remove()
        });
        
    }


    showEmptyMessage() {
        if(this.tbody.innerHTML.trim() === '') {
            empty()
        }
    }

>>>>>>> e231833fb1d35be174b05e011c3ca1fdd5d7170e
}