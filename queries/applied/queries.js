const { sql } = require("slonik");

const selectOneApplied = ({ email }) => {
  
    return sql`
      SELECT *
      FROM applied
      JOIN users
      ON users.id = applied.talent_id
      WHERE 
      JOIN offers
      ON offer.id = applied.offer_id
      WHERE email = ${email}
      `; 
};

const selectAllApplied = () => {
    return sql`
    SELECT * FROM applied;`;
};


module.exports = {
    selectOneApplied,
    selectAllApplied
}