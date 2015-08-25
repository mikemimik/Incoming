# Incoming
API for money management app

##END GOAL

- Create project with two APIs
 - one API will serve mongodb
 - one API will server a RMDB system (mysql, mssql, etc)

- mongodb API will use ORM
 - mongoose will be use as ORM
 - [need RESTful API framework]

- RMDBS will use ORM
 - sequelize will be used as ORM
 - epilogue will be use as RESTful API framework

####Associations

Job -> (hasMany) Wages
Job -> (hasOne) Payroll

Wage -> (belongsTo) Job

Payroll -> (hasMany) Hours // Not sure if this is needed
Payroll -> (hasOne) Occurance
Payroll -> (belongsTo) Job

Expense -> (hasOne) ExpenseType // Could have more than one

Hour -> (hasOne) Job
Hour -> (hasOne) Wage

ExpenseType -> (hasMany) Expense
Occurance ->