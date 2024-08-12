document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const nameInput = document.getElementById('name-input');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');

    // Cargar comentarios desde localStorage
    loadComments();

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        const commentText = commentInput.value.trim();

        if (name !== "" && commentText !== "") {
            addComment(name, commentText);
            nameInput.value = "";
            commentInput.value = "";
        }
    });

    function addComment(name, comment) {
        const commentElement = document.createElement('li');

        const commentHeader = document.createElement('div');
        commentHeader.classList.add('comment-header');
        commentHeader.textContent = name;

        const commentBody = document.createElement('div');
        commentBody.textContent = comment;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            deleteComment(name, comment);
            commentElement.remove();
        });

        commentElement.appendChild(commentHeader);
        commentElement.appendChild(commentBody);
        commentElement.appendChild(deleteButton);
        commentsList.appendChild(commentElement);

        saveComment(name, comment);
    }

    function saveComment(name, comment) {
        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push({ name, comment });
        localStorage.setItem('comments', JSON.stringify(comments));
    }

    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.forEach(({ name, comment }) => {
            const commentElement = document.createElement('li');

            const commentHeader = document.createElement('div');
            commentHeader.classList.add('comment-header');
            commentHeader.textContent = name;

            const commentBody = document.createElement('div');
            commentBody.textContent = comment;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => {
                deleteComment(name, comment);
                commentElement.remove();
            });

            commentElement.appendChild(commentHeader);
            commentElement.appendChild(commentBody);
            commentElement.appendChild(deleteButton);
            commentsList.appendChild(commentElement);
        });
    }

    function deleteComment(name, comment) {
        let comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments = comments.filter(storedComment => storedComment.name !== name || storedComment.comment !== comment);
        localStorage.setItem('comments', JSON.stringify(comments));
    }
});


//Aqui va a haver todo lo que es de la API//

    //Aqui tendremos toda la Generación 1

ShadowRoot
document.addEventListener("DOMContentLoaded", () => {
    const pokedexBody = document.getElementById('Gen1');

    const getPokemonData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;
    };

    const getPokemonSpeciesData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await response.json();
        return data;
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const renderPokemon = (pokemon, description) => {
        const types = pokemon.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join('/');
        const height = pokemon.height / 10; 
        const weight = pokemon.weight / 10; 
        const name = capitalizeFirstLetter(pokemon.name);

        const row = `
            <tr>
                <td>${pokemon.id}</td>
                <td><img src="${pokemon.sprites.front_default}" alt="${name}"></td>
                <td>${name}</td>
                <td>${types}</td>
                <td>${height} m</td>
                <td>${weight} kg</td>
                <td>${description}</td>
            </tr>
        `;
        pokedexBody.innerHTML += row;
    };

    const capitalizeHeaders = () => {
        const headers = document.querySelectorAll('#pokedex th');
        headers.forEach(header => {
            header.textContent = capitalizeFirstLetter(header.textContent);
        });
    };

    const Gen1 = async () => {
        for (let i = 1; i <= 151; i++) { 
            const pokemon = await getPokemonData(i);
            const species = await getPokemonSpeciesData(i);
            const description = species.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text;
            renderPokemon(pokemon, description);
        }
        capitalizeHeaders();
    };

    Gen1();
});


//AQUI ESTA LO DE LA 2A GENERACIÓN//

document.addEventListener("DOMContentLoaded", () => {
    const pokedexBody = document.getElementById('Gen2');

    const getPokemonData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;
    };

    const getPokemonSpeciesData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await response.json();
        return data;
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const renderPokemon = (pokemon, description) => {
        const types = pokemon.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join('/');
        const height = pokemon.height / 10; 
        const weight = pokemon.weight / 10; 
        const name = capitalizeFirstLetter(pokemon.name);

        const row = `
            <tr>
                <td>${pokemon.id}</td>
                <td><img src="${pokemon.sprites.front_default}" alt="${name}"></td>
                <td>${name}</td>
                <td>${types}</td>
                <td>${height} m</td>
                <td>${weight} kg</td>
                <td>${description}</td>
            </tr>
        `;
        pokedexBody.innerHTML += row;
    };

    const capitalizeHeaders = () => {
        const headers = document.querySelectorAll('#pokedex th');
        headers.forEach(header => {
            header.textContent = capitalizeFirstLetter(header.textContent);
        });
    };

    const Gen2 = async () => {
        for (let i = 152; i <= 251; i++) { 
            const pokemon = await getPokemonData(i);
            const species = await getPokemonSpeciesData(i);
            const description = species.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text;
            renderPokemon(pokemon, description);
        }
        capitalizeHeaders();
    };

    Gen2();
});


//AQUI ESTA LO DE LA 3A GENERACIÓN//

document.addEventListener("DOMContentLoaded", () => {
    const pokedexBody = document.getElementById('Gen3');

    const getPokemonData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;
    };

    const getPokemonSpeciesData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await response.json();
        return data;
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const renderPokemon = (pokemon, description) => {
        const types = pokemon.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join('/');
        const height = pokemon.height / 10; 
        const weight = pokemon.weight / 10; 
        const name = capitalizeFirstLetter(pokemon.name);

        const row = `
            <tr>
                <td>${pokemon.id}</td>
                <td><img src="${pokemon.sprites.front_default}" alt="${name}"></td>
                <td>${name}</td>
                <td>${types}</td>
                <td>${height} m</td>
                <td>${weight} kg</td>
                <td>${description}</td>
            </tr>
        `;
        pokedexBody.innerHTML += row;
    };

    const capitalizeHeaders = () => {
        const headers = document.querySelectorAll('#pokedex th');
        headers.forEach(header => {
            header.textContent = capitalizeFirstLetter(header.textContent);
        });
    };
    
    const Gen3 = async () => {
        for (let i = 252; i <= 386; i++) { 
            const pokemon = await getPokemonData(i);
            const species = await getPokemonSpeciesData(i);
            const description = species.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text;
            renderPokemon(pokemon, description);
        }
        capitalizeHeaders();
    };

    Gen3();
});

//AQUI ESTA LO DE LA 4A GENERACIÓN//

document.addEventListener("DOMContentLoaded", () => {
    const pokedexBody = document.getElementById('Gen4');

    const getPokemonData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;
    };

    const getPokemonSpeciesData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await response.json();
        return data;
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const renderPokemon = (pokemon, description) => {
        const types = pokemon.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join('/');
        const height = pokemon.height / 10; 
        const weight = pokemon.weight / 10; 
        const name = capitalizeFirstLetter(pokemon.name);

        const row = `
            <tr>
                <td>${pokemon.id}</td>
                <td><img src="${pokemon.sprites.front_default}" alt="${name}"></td>
                <td>${name}</td>
                <td>${types}</td>
                <td>${height} m</td>
                <td>${weight} kg</td>
                <td>${description}</td>
            </tr>
        `;
        pokedexBody.innerHTML += row;
    };

    const capitalizeHeaders = () => {
        const headers = document.querySelectorAll('#pokedex th');
        headers.forEach(header => {
            header.textContent = capitalizeFirstLetter(header.textContent);
        });
    };


    const Gen4 = async () => {
        for (let i = 387; i <= 494; i++) { 
            const pokemon = await getPokemonData(i);
            const species = await getPokemonSpeciesData(i);
            const description = species.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text;
            renderPokemon(pokemon, description);
        }
        capitalizeHeaders();
    };

    Gen4();
});

//AQUI ESTA LO DE LA 5A GENERACIÓN//

document.addEventListener("DOMContentLoaded", () => {
    const pokedexBody = document.getElementById('Gen5');

    const getPokemonData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;
    };

    const getPokemonSpeciesData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await response.json();
        return data;
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const renderPokemon = (pokemon, description) => {
        const types = pokemon.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join('/');
        const height = pokemon.height / 10; 
        const weight = pokemon.weight / 10; 
        const name = capitalizeFirstLetter(pokemon.name);

        const row = `
            <tr>
                <td>${pokemon.id}</td>
                <td><img src="${pokemon.sprites.front_default}" alt="${name}"></td>
                <td>${name}</td>
                <td>${types}</td>
                <td>${height} m</td>
                <td>${weight} kg</td>
                <td>${description}</td>
            </tr>
        `;
        pokedexBody.innerHTML += row;
    };

    const capitalizeHeaders = () => {
        const headers = document.querySelectorAll('#pokedex th');
        headers.forEach(header => {
            header.textContent = capitalizeFirstLetter(header.textContent);
        });
    };

    const Gen5 = async () => {
        for (let i = 495; i <= 649; i++) { 
            const pokemon = await getPokemonData(i);
            const species = await getPokemonSpeciesData(i);
            const description = species.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text;
            renderPokemon(pokemon, description);
        }
        capitalizeHeaders();
    };

    Gen5();
});


//AQUI ESTA LO DE LA 6A GENERACIÓN//

document.addEventListener("DOMContentLoaded", () => {
    const pokedexBody = document.getElementById('Gen6');

    const getPokemonData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;
    };

    const getPokemonSpeciesData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await response.json();
        return data;
    };
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const renderPokemon = (pokemon, description) => {
        const types = pokemon.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join('/');
        const height = pokemon.height / 10; 
        const weight = pokemon.weight / 10; 
        const name = capitalizeFirstLetter(pokemon.name);

        const row = `
            <tr>
                <td>${pokemon.id}</td>
                <td><img src="${pokemon.sprites.front_default}" alt="${name}"></td>
                <td>${name}</td>
                <td>${types}</td>
                <td>${height} m</td>
                <td>${weight} kg</td>
                <td>${description}</td>
            </tr>
        `;
        pokedexBody.innerHTML += row;
    };

    const capitalizeHeaders = () => {
        const headers = document.querySelectorAll('#pokedex th');
        headers.forEach(header => {
            header.textContent = capitalizeFirstLetter(header.textContent);
        });
    };

    const Gen6 = async () => {
        for (let i = 650; i <= 721; i++) { 
            const pokemon = await getPokemonData(i);
            const species = await getPokemonSpeciesData(i);
            const description = species.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text;
            renderPokemon(pokemon, description);
        }
        capitalizeHeaders();
    };

    Gen6();
});


//AQUI ESTA LO DE LA 7A GENERACIÓN//

document.addEventListener("DOMContentLoaded", () => {
    const pokedexBody = document.getElementById('Gen7');

    const getPokemonData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;
    };

    const getPokemonSpeciesData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await response.json();
        return data;
    };
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const renderPokemon = (pokemon, description) => {
        const types = pokemon.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join('/');
        const height = pokemon.height / 10; 
        const weight = pokemon.weight / 10; 
        const name = capitalizeFirstLetter(pokemon.name);

        const row = `
            <tr>
                <td>${pokemon.id}</td>
                <td><img src="${pokemon.sprites.front_default}" alt="${name}"></td>
                <td>${name}</td>
                <td>${types}</td>
                <td>${height} m</td>
                <td>${weight} kg</td>
                <td>${description}</td>
            </tr>
        `;
        pokedexBody.innerHTML += row;
    };

    const capitalizeHeaders = () => {
        const headers = document.querySelectorAll('#pokedex th');
        headers.forEach(header => {
            header.textContent = capitalizeFirstLetter(header.textContent);
        });
    };

    const Gen7 = async () => {
        for (let i = 722; i <= 809; i++) { 
            const pokemon = await getPokemonData(i);
            const species = await getPokemonSpeciesData(i);
            const description = species.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text;
            renderPokemon(pokemon, description);
        }
        capitalizeHeaders();
    };

    Gen7();
});

//AQUI ESTA LO DE LA 8A GENERACIÓN//

document.addEventListener("DOMContentLoaded", () => {
    const pokedexBody = document.getElementById('Gen8');

    const getPokemonData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;
    };

    const getPokemonSpeciesData = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await response.json();
        return data;
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const renderPokemon = (pokemon, description) => {
        const types = pokemon.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join('/');
        const height = pokemon.height / 10; 
        const weight = pokemon.weight / 10; 
        const name = capitalizeFirstLetter(pokemon.name);

        const row = `
            <tr>
                <td>${pokemon.id}</td>
                <td><img src="${pokemon.sprites.front_default}" alt="${name}"></td>
                <td>${name}</td>
                <td>${types}</td>
                <td>${height} m</td>
                <td>${weight} kg</td>
                <td>${description}</td>
            </tr>
        `;
        pokedexBody.innerHTML += row;
    };

    const capitalizeHeaders = () => {
        const headers = document.querySelectorAll('#pokedex th');
        headers.forEach(header => {
            header.textContent = capitalizeFirstLetter(header.textContent);
        });
    };

    const Gen8 = async () => {
        for (let i = 810; i <= 898; i++) { 
            const pokemon = await getPokemonData(i);
            const species = await getPokemonSpeciesData(i);
            const description = species.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text;
            renderPokemon(pokemon, description);
        }
        capitalizeHeaders();
    };

    Gen8();
});

//AQUI ESTA LO DE LA 9A GENERACIÓN// (Activar cuando salgan los sprites)

// document.addEventListener("DOMContentLoaded", () => {
//     const pokedexBody = document.getElementById('Gen9');

//     const getPokemonData = async (id) => {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//         const data = await response.json();
//         return data;
//     };

//     const getPokemonSpeciesData = async (id) => {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
//         const data = await response.json();
//         return data;
//     };

// const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// };

// const renderPokemon = (pokemon, description) => {
//     const types = pokemon.types.map(typeInfo => capitalizeFirstLetter(typeInfo.type.name)).join('/');
//     const height = pokemon.height / 10; 
//     const weight = pokemon.weight / 10; 
//     const name = capitalizeFirstLetter(pokemon.name);

//     const row = `
//         <tr>
//             <td>${pokemon.id}</td>
//             <td><img src="${pokemon.sprites.front_default}" alt="${name}"></td>
//             <td>${name}</td>
//             <td>${types}</td>
//             <td>${height} m</td>
//             <td>${weight} kg</td>
//             <td>${description}</td>
//         </tr>
//     `;
//     pokedexBody.innerHTML += row;
// };

// const capitalizeHeaders = () => {
//     const headers = document.querySelectorAll('#pokedex th');
//     headers.forEach(header => {
//         header.textContent = capitalizeFirstLetter(header.textContent);
//     });
// };

//     const Gen9 = async () => {
//         for (let i = 899; i <= 1010; i++) { 
//             const pokemon = await getPokemonData(i);
//             const species = await getPokemonSpeciesData(i);
//             const description = species.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text;
//             renderPokemon(pokemon, description);
//         }
//      capitalizeHeaders();
//     };

//     Gen9();
// });