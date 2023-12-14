const collection = [
    {
        title: "Chpt. 2: World Domination",
        artist: "Three 6 Mafia",
        year: "1997",
        location: "Memphis",
        tracks: ["Motivated", "Late Nite Tip"],
    },
    {
        title: "Illmatic",
        artist: "Nas",
        year: "1994",
        location: "New York",
        tracks: ["The World is Yours", "Life's a Bitch"],
    },
    {
        title: "Moment of Truth",
        artist: "Gang Starr",
        year: "1998",
        location: "New York",
        tracks: ["Moment of Truth", "Betrayal"],
    },
    {
        title: "The War Report",
        artist: "Capone N Noreaga",
        year: "1997",
        location: "New York",
        tracks: ["Illegal Life", "Black Gangstas"],
    },
    {
        title: "The Low End Theory",
        artist: "A Tribe Called Quest",
        year: "1991",
        location: "New York",
        tracks: ["Buggin' Out", "Check the Rhime"],
    },
    {
        title: "My Balls and my World",
        artist: "Young Bleed",
        year: "1998",
        location: "Bâton Rouge",
        tracks: ["Pull It Off", "An Offer U can't Refuse"],
    },
    {
        title: "Lifestylez ov Da Poor & Dangerous",
        artist: "Big L",
        year: "1995",
        location: "New York",
        tracks: ["Danger Zone", "Street Struck"],
    },
    {
        title: "Labcabincalifornia",
        artist: "The Pharcyde",
        year: "1995",
        location: "Los Angeles",
        tracks: ["Runnin", "Drop"],
    },
    {
        title: "93 Til Infinity",
        artist: "Souls of Mischief",
        year: "1993",
        location: "Los Angeles",
        tracks: ["93 Til Infinity", "Let 'Em Know"],
    },
    {
        title: "Ready to Die",
        artist: "Notorious Big",
        year: "1995",
        location: "New York",
        tracks: ["Things Done Changed", "Ready to Die"],
    },
];
// Je crée la collection en faisant en sorte d'avoir cinq propriétés

const conteneur = document.createElement("div"); // Création d'un conteneur dans lequel seront tous les items
conteneur.id = "collection_conteneur"; // Je nomme le div "collection_conteneur" pour plus de clarté

for (const item of collection) { // Pour chaque item de la collection..
    const div = document.createElement("div"); // On crée un div
    div.className = "div_items"; // Je nomme les div "div_items" pour plus de clarté (Pas la même chose que "item", qui sont les propriétés de mon array)

    const titre = document.createElement("h1"); // On crée un h1 pour les titres
    titre.textContent = item.title; 

    const artist = document.createElement("p"); // Ajout de l'artiste en tant que paragraphe
    artist.textContent = `Artiste: ${item.artist}`;

    const year = document.createElement("p"); // Ajout de l'année en tant que paragraphe
    year.textContent = `Année: ${item.year}`;

    const location = document.createElement("p"); // Ajout de la localisation en tant que paragraphe
    location.textContent = `Localisation: ${item.location}`;

    const tracks = document.createElement("p"); // Ajout des tracks en tant que liste
    tracks.textContent = `Morceaux préférés: ${item.tracks}`; // /!\ Trouver un moyen de mettre un espace entre la virgule et le deuxième morceau /!\
    
    div.appendChild(titre);
    div.appendChild(artist);
    div.appendChild(year);
    div.appendChild(location);
    div.appendChild(tracks);
    conteneur.appendChild(div);
}
document.body.appendChild(conteneur);