
exports.up = function(knex) {
  return knex.schema.createTable("trips", tbl => {
    tbl.increments();
    tbl.text("user", 128).notNullable();
    tbl.text("name", 128).notNullable();
    tbl.text("destination", 2).notNullable();
    tbl.text("start_date", 64).notNullable();
    tbl.text("end_date", 64).notNullable();
    tbl.timestamps(true, true);
  }).createTable("users", tbl => {
    tbl.increments();
    tbl.text("email").references("user").inTable("trips").onDelete("CASCADE").onUpdate("CASCADE");
    tbl.text("password", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trips").dropTableIfExists("users");
};
