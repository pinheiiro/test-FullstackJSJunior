exports.up = async function (knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("email").unique().notNullable();
        table.string("senha").notNullable();

        table.timestamp("created_at", { precision: 6 }).defaultTo(knex.fn.now());
    });
}

exports.down = async function (knex) {
    return knex.schema.dropTable("users");
}