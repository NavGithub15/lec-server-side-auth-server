const usersData = [
  {
    id: 1,
    name: "Sarah"
  },
  {
    id: 2,
    name: "Michonne"
  },
  {
    id: 3,
    name: "Arya"
  }
];

const postsData = [
  {
    id: 1,
    user_id: 1,
    title: "Knex is so much fun!",
    content: "It's true"
  },
  {
    id: 2,
    user_id: 3,
    title: "The Night King ain't nothing",
    content: "Yup"
  },
  {
    id: 3,
    user_id: 2,
    title: "Zombies are cool",
    content: "Way cooler than the direction TWD went"
  },
];

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del();
  await knex('user').insert(usersData);
  await knex('post').del();
  await knex('post').insert(postsData);
};
