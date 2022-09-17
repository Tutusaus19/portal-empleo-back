const { selectAllApplied, selectOneApplied } = require("./queries");

const { queryCatcher } = require("../utils");

const getallApplied = (db) => async() => {
    return await queryCatcher(
        db.query,
        "getAllApplied"
    )
    (selectAllApplied());
};

const getOneApplied = (db) => async({email}) => {
    return await queryCatcher(
        db.query, 
        "getOneApplied"
    )
    (selectOneApplied({email}))
};

module.exports = {
    getallApplied,

}