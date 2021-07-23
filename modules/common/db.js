const connect = (req) => (
  new Promise((resolve, reject) => req.getConnection(
    (err, sqlConnection) => (err ? reject(err) : resolve(sqlConnection)),
  ))
);

const execute = (sqlConnection, query) => (
  new Promise((resolve, reject) => sqlConnection.query(
    query, (err, result) => (err ? reject(err) : resolve(result)),
  ))
);

module.exports = {
  connect,
  execute,
};
