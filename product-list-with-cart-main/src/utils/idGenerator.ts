const usedIds = new Set(); // To store already generated IDs

function generateUniqueId() {
  let id;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Letters A-Z

  do {
    id = '';
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters[randomIndex];
    }
  } while (usedIds.has(id)); // Ensures the ID is unique

  usedIds.add(id); // Add the new ID to the set of used IDs
  return id;
}

export default generateUniqueId