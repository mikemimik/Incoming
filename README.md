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

###TODO
- include mongoose 
 - create mongoose models for mongodb
- include mongodb config
- find/include REST util
- include express

- include all the associations in each mongo model

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