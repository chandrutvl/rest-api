const db = require('../common/db');

const getAllEmployees = async (req, res) => {
  const sqlConnection = await db.connect(req);
  const employees = await db.execute(sqlConnection, 'select id, name from product');
  res.send(employees);
};

const getSpecificEmployee = async (req, res) => {
  const { id } = req.params;
  const sqlConnection = await db.connect(req);
  const employees = await db.execute(sqlConnection, `select id, name from product where id = ${id}`);
  res.send(employees);
};

const createEmployee = async (req, res) => {
  const { employeeId, employeeName } = req.body;
  const query = `insert into product(id, name) values(${employeeId}, '${employeeName}');`;
  const sqlConnection = await db.connect(req);
  const result = await db.execute(sqlConnection, query);
  res.send(result);
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { employeeName } = req.body;
  const query = `update product set name = '${employeeName}' where id = ${id}`;
  const sqlConnection = await db.connect(req);
  const result = await db.execute(sqlConnection, query);
  res.send(result);
};

module.exports = (app) => {
  // Get all Employees
  app.get('/employee', getAllEmployees);
  // Get by Employee Id
  app.get('/employee/:id', getSpecificEmployee);
  // Create Employee
  app.post('/employee', createEmployee);
  // Update Employee
  app.put('/employee/:id', updateEmployee);
};
