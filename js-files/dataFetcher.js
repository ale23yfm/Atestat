// Funcția pentru a afișa cardurile
function displayCards(data) {
    const container = document.getElementById('cardContainer');
    container.innerHTML = ''; // Ștergem conținutul anterior

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Creare imagine
        const image = document.createElement('img');
        image.classList.add('img-card');
        image.src = item.image;
        image.alt = item.name;
        card.appendChild(image);

        // Creare nume mentor
        const name = document.createElement('h2');
        name.textContent = item.name;
        card.appendChild(name);

        // Creare subiecte
        item.subjects.forEach(subject => {
            const subjectElement = document.createElement('h3');
            subjectElement.textContent = subject;
            card.appendChild(subjectElement);
        });

        // Creare buton de contact
        const button = document.createElement('a');
        button.classList.add('button');
        button.textContent = 'Contactează';
        button.href = "#"; // Poți adăuga aici un link personalizat
        card.appendChild(button);

        container.appendChild(card);
    });
}

// Funcția pentru a încărca datele din JSON
async function fetchData() {
    try {
        const response = await fetch('../data/data.json');
        if (!response.ok) {
            throw new Error('Eroare la încărcarea datelor.');
        }
        const data = await response.json();
        displayCards(data);
    } catch (error) {
        console.error('Eroare:', error);
        document.getElementById('cardContainer').innerHTML = '<p style="color: red;">Nu s-au putut încărca datele.</p>';
    }
}

// Apelează funcția pentru a încărca datele
fetchData();
