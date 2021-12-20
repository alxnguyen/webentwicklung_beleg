
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, email: "user1@email.com", password: "password1"},
        {id: 2, email: 'user2@email.com', password: "password2"}
      ]);
    });
};
