const STORAGE_KEY = 'dbms-learning-progress-v1';

const chapters = [
  {
    id: 1,
    title: 'Chapter 1 – Introduction to Database Management Systems',
    overview:
      'Learn what a database is, why DBMS systems are essential, how data is organized, and how users and administrators interact with the database environment.',
    topics: [
      {
        id: 'dbms-overview',
        title: 'What is a DBMS?',
        keywords: ['database', 'DBMS', 'data', 'management'],
        explanation:
          'A database is an organized collection of related data. A Database Management System (DBMS) is software that enables users to create, store, retrieve, update, secure, and manage data efficiently. It acts as an interface between users and the physical database and ensures that data remains consistent, reliable, and protected.',
        important: [
          'A DBMS manages both the structure and use of the database.',
          'It helps store large amounts of data in an organized and secure way.',
          'The DBMS reduces redundancy and improves data consistency when compared with file processing systems.'
        ],
        example: `Example database: Student records\n- sid\n- sname\n- dept\n- year\nThe DBMS stores, updates and retrieves these records efficiently.`,
        visual: `
          <div class="diagram-grid">
            <div class="schema-box">
              <strong>Users</strong>
              <ul>
                <li>Application programs</li>
                <li>DBA</li>
                <li>End users</li>
              </ul>
            </div>
            <div class="schema-box">
              <strong>DBMS</strong>
              <ul>
                <li>Query processing</li>
                <li>Storage management</li>
                <li>Security & integrity</li>
              </ul>
            </div>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>DBMS role</h4>
            <table>
              <thead><tr><th>Task</th><th>DBMS role</th></tr></thead>
              <tbody>
                <tr><td>Create table</td><td>Defines schema</td></tr>
                <tr><td>Insert data</td><td>Stores records</td></tr>
                <tr><td>Query data</td><td>Retrieves information</td></tr>
                <tr><td>Protect data</td><td>Enforces access rules</td></tr>
              </tbody>
            </table>
          </div>
        `,
        practice: 'Why is a DBMS better than storing data in ordinary files? Mention at least two benefits.'
      },
      {
        id: 'data-abstraction',
        title: 'Data Abstraction and File Systems',
        keywords: ['abstraction', 'schema', 'instance', 'file system'],
        explanation:
          'Data abstraction means hiding physical storage details from users and presenting data in a more meaningful logical form. In a DBMS, users work with logical views of the data rather than raw file organization. This is different from traditional file systems, where data is kept in separate files and users must manage storage and retrieval details manually.',
        important: [
          'Three levels of abstraction are often described as external, conceptual, and internal schemas.',
          'Users usually interact with a logical model rather than physical storage details.',
          'A file system may cause inconsistency, duplication, and poor security when compared with a DBMS.'
        ],
        example: `External view: Student details for a department\nConceptual view: Student(sid, sname, dept)\nInternal view: physical storage of records on disk`,
        visual: `
          <div class="code-block">
            <pre>External level → users see useful data views
Conceptual level → overall logical structure
Internal level → how data is physically stored</pre>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>Abstraction view</h4>
            <table>
              <thead><tr><th>Level</th><th>Purpose</th></tr></thead>
              <tbody>
                <tr><td>External</td><td>Application-specific view</td></tr>
                <tr><td>Conceptual</td><td>Global logical design</td></tr>
                <tr><td>Internal</td><td>Physical storage layout</td></tr>
              </tbody>
            </table>
          </div>
        `,
        practice: 'How does data abstraction help a student or application programmer work with a database without worrying about disk storage details?'
      },
      {
        id: 'db-architecture',
        title: 'DBMS Architecture and Components',
        keywords: ['architecture', 'query processor', 'storage manager', 'transaction'],
        explanation:
          'A DBMS includes several components such as the query processor, storage manager, buffer manager, and transaction manager. Together these modules help process user requests, optimize queries, manage memory, and ensure safe database updates. A well-designed architecture makes database operations efficient and reliable.',
        important: [
          'The query processor parses and executes SQL statements.',
          'The storage manager handles how data is stored and retrieved.',
          'The transaction manager ensures the database remains consistent during updates.'
        ],
        example: `User query → DBMS parser → optimizer → execution engine → data files`,
        visual: `
          <div class="diagram-box">
            <h4>DBMS architecture flow</h4>
            <pre>User / Application
      ↓
Query processor
      ↓
Storage manager
      ↓
Database files</pre>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>Core DBMS modules</h4>
            <table>
              <thead><tr><th>Module</th><th>Function</th></tr></thead>
              <tbody>
                <tr><td>Query parser</td><td>Checks syntax</td></tr>
                <tr><td>Optimizer</td><td>Selects efficient execution plan</td></tr>
                <tr><td>Transaction manager</td><td>Controls atomic updates</td></tr>
                <tr><td>File manager</td><td>Stores and retrieves records</td></tr>
              </tbody>
            </table>
          </div>
        `,
        practice: 'Why is the optimizer important in a DBMS if a query can still be executed without it?'
      },
      {
        id: 'users-and-dba',
        title: 'Users, Roles and DBA Responsibilities',
        keywords: ['DBA', 'application user', 'administrator', 'roles'],
        explanation:
          'Different users interact with a database in different ways. End users query the database, application programmers build interfaces and logic, and the Database Administrator (DBA) oversees database design, performance, security, backup, and integrity. The DBA has a central responsibility for ensuring the database continues to meet organizational needs safely and efficiently.',
        important: [
          'The DBA creates user accounts and sets permissions.',
          'The DBA monitors performance, backups, and recovery procedures.',
          'Database roles and authorization policies restrict access to sensitive information.'
        ],
        example: `DBA tasks\n- create schema\n- grant/revoke permissions\n- maintain backups\n- tune performance`,
        visual: `
          <div class="table-card">
            <h4>Common users in a DBMS</h4>
            <table>
              <thead><tr><th>User type</th><th>Interaction</th></tr></thead>
              <tbody>
                <tr><td>Naive user</td><td>Runs predefined queries</td></tr>
                <tr><td>Application programmer</td><td>Builds software and SQL logic</td></tr>
                <tr><td>DBA</td><td>Controls design, access, and maintenance</td></tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: `
          <div class="code-block">
            <pre>DBA responsibilities:
- design schema
- manage security
- ensure backups and recovery
- tune query performance</pre>
          </div>
        `,
        practice: 'If a company wants to restrict who can update salary data, which role should manage that and why?'
      }
    ],
    quiz: [
      {
        question: 'A DBMS is best described as:',
        options: ['A file storage system', 'Software for managing and querying a database', 'A programming language', 'A networking protocol'],
        answer: 1
      },
      {
        question: 'The main purpose of data abstraction is to:',
        options: ['Hide physical storage details from users', 'Delete duplicate tables', 'Increase disk usage', 'Prevent all queries'],
        answer: 0
      },
      {
        question: 'Which role is mostly responsible for database security and maintenance?',
        options: ['Application programmer', 'DBA', 'End user', 'Compiler'],
        answer: 1
      },
      {
        question: 'The query optimizer helps to:',
        options: ['Choose the most efficient execution plan', 'Create indexes automatically', 'Store backups', 'Delete old data'],
        answer: 0
      }
    ]
  },
  {
    id: 2,
    title: 'Chapter 2 – Relational Model & Relational Algebra',
    overview:
      'Understand how relational databases organize data, how relations are modeled, and how algebraic operations transform data sets.',
    topics: [
      {
        id: 'relational-model',
        title: 'Relational Databases',
        keywords: ['relation', 'schema', 'instance', 'tuple'],
        explanation:
          'A relational database stores data in tables, where each table represents a relation. A relation consists of rows called tuples and columns called attributes. The table structure is defined by a schema, while the actual set of rows at a given moment is the instance.',
        important: [
          'A relation is a set of tuples; duplicate rows are not allowed in a mathematical relation.',
          'The schema defines attribute names, domains, and constraints before any data is stored.',
          'The instance is the current data content, and it can change over time without changing the schema.'
        ],
        example: `Student(sid, sname, dept, year)\n(101, 'Aisha', 'CSE', 2)\n(102, 'Rahul', 'ECE', 3)\n(103, 'Meera', 'CSE', 2)`,
        visual: `
          <div class="diagram-grid">
            <div class="schema-box">
              <strong>Schema</strong>
              <ul>
                <li>sid: integer</li>
                <li>sname: string</li>
                <li>dept: string</li>
                <li>year: integer</li>
              </ul>
            </div>
            <div class="schema-box">
              <strong>Instance</strong>
              <ul>
                <li>(101, Aisha, CSE, 2)</li>
                <li>(102, Rahul, ECE, 3)</li>
                <li>(103, Meera, CSE, 2)</li>
              </ul>
            </div>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>Student relation</h4>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>sid</th><th>sname</th><th>dept</th><th>year</th></tr>
                </thead>
                <tbody>
                  <tr><td>101</td><td>Aisha</td><td>CSE</td><td>2</td></tr>
                  <tr><td>102</td><td>Rahul</td><td>ECE</td><td>3</td></tr>
                  <tr><td>103</td><td>Meera</td><td>CSE</td><td>2</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
        practice: 'How does a relation differ from a table in a spreadsheet if duplicate rows are allowed in spreadsheets but not in a relational model?'
      },
      {
        id: 'keys-and-schema',
        title: 'Keys and Schema Diagrams',
        keywords: ['primary key', 'superkey', 'candidate key', 'foreign key'],
        explanation:
          'Keys identify and relate tuples in a relational database. A primary key uniquely identifies each row in a table, a foreign key references another table, and candidate keys are alternative unique identifiers. Schema diagrams show how tables are connected using these key relationships.',
        important: [
          'A superkey is any attribute set that can uniquely identify a tuple.',
          'A candidate key is a minimal superkey, and one candidate key is selected as the primary key.',
          'A foreign key helps maintain referential integrity across relations.'
        ],
        example: `Student(sid PK, sname, dept)\nEnroll(sid FK, cid, grade)\nCourse(cid PK, cname, credits)`,
        visual: `
          <div class="diagram-grid">
            <div class="schema-box">
              <strong>Student</strong>
              <ul>
                <li>sid → PK</li>
                <li>sname</li>
                <li>dept</li>
              </ul>
            </div>
            <div class="schema-box">
              <strong>Enroll</strong>
              <ul>
                <li>sid → FK references Student.sid</li>
                <li>cid → FK references Course.cid</li>
                <li>grade</li>
              </ul>
            </div>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>Schema diagram example</h4>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>Student</th><th>Enroll</th><th>Course</th></tr>
                </thead>
                <tbody>
                  <tr><td>sid (PK)</td><td>sid (FK)</td><td>cid (PK)</td></tr>
                  <tr><td>sname</td><td>cid (FK)</td><td>cname</td></tr>
                  <tr><td>dept</td><td>grade</td><td>credits</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
        practice: 'If a student can take many courses and a course can have many students, what relationship exists between Student and Course in the schema?'
      },
      {
        id: 'algebra-basics',
        title: 'Relational Algebra Operators',
        keywords: ['selection', 'projection', 'union', 'difference', 'cartesian product'],
        explanation:
          'Relational algebra forms the theoretical foundation of query processing. Each operator takes one or more relations and produces a relation. Selection filters rows, projection extracts columns, union combines compatible relations, difference finds rows present in one relation but not another, and Cartesian product combines every tuple pair from two relations.',
        important: [
          'Selection uses a condition on attributes, e.g. σdept=\'CSE\'(Student).',
          'Projection keeps only selected columns, e.g. πsname, dept(Student).',
          'Union and difference require the same attribute types and layout to be compatible.'
        ],
        example: `Student\n\n  sid | sname | dept\n  101 | Aisha | CSE\n  102 | Rahul | ECE\n\nσdept='CSE'(Student)\n\n  sid | sname | dept\n  101 | Aisha | CSE`,
        visual: `
          <div class="diagram-box">
            <h4>Common operators</h4>
            <div class="operation-row">
              <button class="action-btn" data-action="rel-alg-op" data-op="selection">Selection</button>
              <button class="action-btn" data-action="rel-alg-op" data-op="projection">Projection</button>
              <button class="action-btn" data-action="rel-alg-op" data-op="union">Union</button>
              <button class="action-btn" data-action="rel-alg-op" data-op="product">Cartesian Product</button>
            </div>
            <div id="rel-alg-output" class="table-card"></div>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>Relational algebra output</h4>
            <div id="relational-algebra-demo"></div>
          </div>
        `,
        practice: 'A relation is returned by a relational algebra expression. What does this imply about the output of operators like selection and join?'
      },
      {
        id: 'join-and-algebra-practice',
        title: 'Join, Rename and Practice',
        keywords: ['join', 'rename', 'theta join', 'equijoin'],
        explanation:
          'Joins combine tuples from two relations based on matching attributes. The natural join automatically matches common attributes, while theta joins use a predicate. Rename changes attribute names or relation names without altering data values. These operations are used to answer real-world questions such as “which students are taking which courses?”',
        important: [
          'Join is one of the most common operators in databases because it connects information across tables.',
          'A natural join removes duplicate matching columns automatically.',
          'Rename can simplify expressions and avoid confusion between same-named attributes.'
        ],
        example: `Student ⨝ Enroll\nStudent(sid, sname, dept)\nEnroll(sid, cid, grade)\n=> joined rows show course registrations for each student`,
        visual: `
          <div class="table-card">
            <h4>Join activity</h4>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr><th>Student</th><th>Enroll</th><th>Result</th></tr>
                </thead>
                <tbody>
                  <tr><td>101, Aisha</td><td>101, CS101</td><td>101, Aisha, CS101</td></tr>
                  <tr><td>102, Rahul</td><td>102, EC203</td><td>102, Rahul, EC203</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>Join visualizer</h4>
            <div class="operation-row">
              <button class="action-btn" data-action="join-demo" data-join="inner">Inner join</button>
              <button class="action-btn" data-action="join-demo" data-join="left">Left join</button>
              <button class="action-btn" data-action="join-demo" data-join="right">Right join</button>
              <button class="action-btn" data-action="join-demo" data-join="full">Full join</button>
            </div>
            <div id="join-output"></div>
          </div>
        `,
        practice: 'Suppose you want all students with their course names, even if some students have not enrolled in any course. Which join type should you choose?'
      }
    ],
    quiz: [
      {
        question: 'A relation is best described as:',
        options: ['A table with duplicate rows allowed', 'A set of tuples with a well-defined schema', 'A file stored on disk', 'A query result without constraints'],
        answer: 1
      },
      {
        question: 'The primary key constraint ensures:',
        options: ['Rows are sorted alphabetically', 'Each tuple can be uniquely identified', 'No columns are null', 'Every attribute is distinct'],
        answer: 1
      },
      {
        question: 'Which relational algebra operator removes columns?',
        options: ['Selection', 'Projection', 'Union', 'Difference'],
        answer: 1
      },
      {
        question: 'A foreign key is used to:',
        options: ['Create a new table', 'Reference related data in another table', 'Rename attributes', 'Filter rows by date'],
        answer: 1
      }
    ]
  },
  {
    id: 3,
    title: 'Chapter 3 – SQL',
    overview:
      'Use SQL to define, query, filter, aggregate, and analyze data in a structured and expressive way.',
    topics: [
      {
        id: 'sql-intro',
        title: 'SQL Introduction and DDL',
        keywords: ['DDL', 'CREATE TABLE', 'ALTER TABLE', 'DROP TABLE'],
        explanation:
          'Structured Query Language (SQL) is the standard language for defining and querying databases. DDL statements define schema objects like tables, while DML statements insert, update, and retrieve data. A database designer uses DDL to create tables, constraints, and relationships.',
        important: [
          'CREATE TABLE defines the schema and field types.',
          'ALTER TABLE changes an existing table structure.',
          'DROP TABLE removes a table and its data permanently.'
        ],
        example: `CREATE TABLE Student (\n  sid INT PRIMARY KEY,\n  sname VARCHAR(30),\n  dept VARCHAR(20),\n  year INT\n);`,
        visual: `
          <div class="code-block">
            <pre>CREATE TABLE Course (
  cid INT PRIMARY KEY,
  cname VARCHAR(50) NOT NULL,
  credits INT CHECK (credits > 0)
);</pre>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>DDL example</h4>
            <pre>CREATE TABLE Enroll (
  sid INT,
  cid INT,
  grade CHAR(2),
  FOREIGN KEY (sid) REFERENCES Student(sid),
  FOREIGN KEY (cid) REFERENCES Course(cid)
);</pre>
          </div>
        `,
        practice: 'Why is it useful to declare a primary key and foreign key in DDL when building a database schema?'
      },
      {
        id: 'select-queries',
        title: 'SELECT, FROM, WHERE and DISTINCT',
        keywords: ['SELECT', 'FROM', 'WHERE', 'DISTINCT'],
        explanation:
          'The SELECT statement retrieves rows and columns from one or more tables. FROM identifies the table, WHERE filters rows, and DISTINCT removes duplicate output values. Expressions and aliases can make the output easier to read.',
        important: [
          'SELECT column1, column2 FROM table WHERE condition;',
          'DISTINCT prevents duplicate results in the selected column list.',
          'Aliases such as AS total_marks can improve readability in reports.'
        ],
        example: `SELECT sname, dept\nFROM Student\nWHERE dept = 'CSE'\nORDER BY sname;`,
        visual: `
          <div class="table-card">
            <h4>Sample rows</h4>
            <div class="table-wrap">
              <table>
                <thead><tr><th>sname</th><th>dept</th></tr></thead>
                <tbody>
                  <tr><td>Aisha</td><td>CSE</td></tr>
                  <tr><td>Meera</td><td>CSE</td></tr>
                  <tr><td>Rahul</td><td>ECE</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>SQL simulator</h4>
            <div class="simulator-layout">
              <div>
                <textarea id="sql-query-input" class="sql-input">SELECT sname, dept FROM Student WHERE dept = 'CSE';</textarea>
                <div class="query-suggestions">
                  <button type="button" data-action="sql-demo-query" data-query="SELECT * FROM Student;">SELECT *</button>
                  <button type="button" data-action="sql-demo-query" data-query="SELECT sname, dept FROM Student WHERE dept = 'CSE';">Filter CSE</button>
                  <button type="button" data-action="sql-demo-query" data-query="SELECT DISTINCT dept FROM Student;">Distinct dept</button>
                </div>
                <div class="topic-nav-row">
                  <button type="button" class="primary-btn" data-action="run-sql">Run query</button>
                </div>
              </div>
              <div>
                <div id="sql-results" class="sql-results table-card"></div>
              </div>
            </div>
          </div>
        `,
        practice: 'What would be the output of SELECT DISTINCT dept FROM Student; on a table with both CSE and ECE students?'
      },
      {
        id: 'set-ops-null',
        title: 'LIKE, ORDER BY, BETWEEN, Set Operations and NULL',
        keywords: ['LIKE', 'ORDER BY', 'BETWEEN', 'UNION', 'NULL'],
        explanation:
          'The LIKE operator performs pattern matching on strings; ORDER BY arranges output; BETWEEN filters range-based values. SQL set operations including UNION, INTERSECT, and EXCEPT combine query results. NULL values require careful handling because NULL is neither true nor false and must be checked with IS NULL or IS NOT NULL.',
        important: [
          'LIKE uses wildcards such as % and _.',
          'BETWEEN matches values within a range, often used with dates or numeric ranges.',
          'NULL does not satisfy comparison operators; comparisons with NULL return unknown.'
        ],
        example: `SELECT sname\nFROM Student\nWHERE sname LIKE 'A%'\nORDER BY sname;\n\nSELECT sid FROM Student WHERE year BETWEEN 2 AND 4;`,
        visual: `
          <div class="table-card">
            <h4>Pattern and range examples</h4>
            <table>
              <thead><tr><th>Query</th><th>Meaning</th></tr></thead>
              <tbody>
                <tr><td>LIKE 'A%'</td><td>Names beginning with A</td></tr>
                <tr><td>BETWEEN 2 AND 4</td><td>Years within the range</td></tr>
                <tr><td>IS NULL</td><td>Rows with missing values</td></tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>NULL handling</h4>
            <pre>SELECT sname, dept
FROM Student
WHERE dept IS NULL OR sname LIKE 'M%';</pre>
          </div>
        `,
        practice: 'When checking for missing values, why is WHERE dept = NULL incorrect, and what should be used instead?'
      },
      {
        id: 'grouping-subqueries',
        title: 'Aggregate Functions, GROUP BY, HAVING and Subqueries',
        keywords: ['COUNT', 'SUM', 'AVG', 'GROUP BY', 'HAVING', 'subquery'],
        explanation:
          'Aggregate functions summarize values across rows. GROUP BY partitions rows into groups, and HAVING filters groups based on aggregate results. Subqueries embed one query inside another and are often used to express nested conditions, such as “students enrolled in all courses” or “students with higher marks than the average.”',
        important: [
          'COUNT(), SUM(), AVG(), MIN(), MAX() are aggregate functions.',
          'HAVING is applied after grouping, unlike WHERE which is applied before grouping.',
          'Correlated subqueries depend on the outer query row by row.'
        ],
        example: `SELECT dept, AVG(marks) AS avg_marks\nFROM Student\nGROUP BY dept\nHAVING AVG(marks) > 70;\n\nSELECT sname\nFROM Student\nWHERE marks > (SELECT AVG(marks) FROM Student);`,
        visual: `
          <div class="table-card">
            <h4>Aggregate example</h4>
            <table>
              <thead><tr><th>dept</th><th>avg_marks</th></tr></thead>
              <tbody>
                <tr><td>CSE</td><td>81.7</td></tr>
                <tr><td>ECE</td><td>72.0</td></tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>Subquery visualizer</h4>
            <div id="subquery-visualizer"></div>
          </div>
        `,
        practice: 'If you need to find students whose marks exceed the overall class average, should you use a subquery or a GROUP BY query? Explain.'
      }
    ],
    quiz: [
      {
        question: 'Which clause filters rows before aggregation?',
        options: ['HAVING', 'WHERE', 'GROUP BY', 'ORDER BY'],
        answer: 1
      },
      {
        question: 'Which SQL statement removes duplicate values?',
        options: ['DISTINCT', 'BETWEEN', 'LIKE', 'NULL'],
        answer: 0
      },
      {
        question: 'A subquery used inside a WHERE condition that depends on the current outer row is called:',
        options: ['Embedded query', 'Correlated subquery', 'Grouped query', 'Union query'],
        answer: 1
      },
      {
        question: 'Which aggregate computes the mean of a column?',
        options: ['SUM()', 'AVG()', 'COUNT()', 'MAX()'],
        answer: 1
      }
    ]
  },
  {
    id: 4,
    title: 'Chapter 4 – Advanced SQL / DB Features',
    overview:
      'Go beyond basic queries to explore joins, views, transactions, constraints, indexes, and database authorization.',
    topics: [
      {
        id: 'join-types',
        title: 'Joins: Inner, Natural, Left, Right and Full',
        keywords: ['INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN'],
        explanation:
          'A join combines tuples from two relations based on a relationship. An inner join returns only matching rows. Left and right joins keep unmatched rows from one side, while full outer join keeps unmatched rows from both sides. Natural join automatically matches common attribute names.',
        important: [
          'Inner join: matching rows only.',
          'Left join: all rows from the left table, plus matches from the right.',
          'Full outer join: all rows from both tables, even if no match exists.'
        ],
        example: `SELECT s.sname, c.cname\nFROM Student s\nINNER JOIN Enroll e ON s.sid = e.sid\nINNER JOIN Course c ON e.cid = c.cid;`,
        visual: `
          <div class="table-card">
            <h4>Join comparison</h4>
            <table>
              <thead><tr><th>Join type</th><th>Result behavior</th></tr></thead>
              <tbody>
                <tr><td>Inner</td><td>Only matches</td></tr>
                <tr><td>Left</td><td>All left rows + matching right</td></tr>
                <tr><td>Right</td><td>All right rows + matching left</td></tr>
                <tr><td>Full</td><td>All rows from both sides</td></tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>Join visualizer</h4>
            <div class="operation-row">
              <button class="action-btn" data-action="join-demo" data-join="inner">Inner</button>
              <button class="action-btn" data-action="join-demo" data-join="natural">Natural</button>
              <button class="action-btn" data-action="join-demo" data-join="left">Left</button>
              <button class="action-btn" data-action="join-demo" data-join="right">Right</button>
              <button class="action-btn" data-action="join-demo" data-join="full">Full</button>
            </div>
            <div id="join-output-advanced"></div>
          </div>
        `,
        practice: 'When a mentoring table stores advisor assignments, why might a left join be more useful than an inner join?'
      },
      {
        id: 'views-transactions',
        title: 'Views and Transactions',
        keywords: ['VIEW', 'BEGIN', 'COMMIT', 'ROLLBACK'],
        explanation:
          'A view is a virtual table defined by a query. It simplifies access to complex joins, protects underlying table structure, and presents a user-friendly interface. Transactions group multiple database operations into one atomic unit; either the whole transaction is committed or it is rolled back if a failure occurs.',
        important: [
          'CREATE VIEW creates a logical abstraction over one or more tables.',
          'Transactions maintain consistency by enforcing atomicity and isolation.',
          'ROLLBACK cancels a failed transaction and preserves database integrity.'
        ],
        example: `CREATE VIEW CSE_Students AS\nSELECT sid, sname\nFROM Student\nWHERE dept = 'CSE';\n\nBEGIN;\nUPDATE Student SET dept='CSE' WHERE sid=101;\nCOMMIT;`,
        visual: `
          <div class="code-block">
            <pre>BEGIN;
UPDATE Student SET year = year + 1 WHERE sid = 101;
SAVEPOINT s1;
DELETE FROM Enroll WHERE sid = 101;
ROLLBACK TO s1;
COMMIT;</pre>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>Transaction states</h4>
            <table>
              <thead><tr><th>Step</th><th>Meaning</th></tr></thead>
              <tbody>
                <tr><td>BEGIN</td><td>Transaction starts</td></tr>
                <tr><td>UPDATE</td><td>Database changes are prepared</td></tr>
                <tr><td>COMMIT</td><td>Changes are permanently saved</td></tr>
                <tr><td>ROLLBACK</td><td>Changes are cancelled</td></tr>
              </tbody>
            </table>
          </div>
        `,
        practice: 'Why is a transaction important when transferring money between two bank accounts?'
      },
      {
        id: 'constraints-indexes',
        title: 'Constraints, Data Types and Indexes',
        keywords: ['CHECK', 'UNIQUE', 'VARCHAR', 'INT', 'INDEX'],
        explanation:
          'Constraints define valid database states and protect data quality. Examples include NOT NULL, UNIQUE, CHECK, and FOREIGN KEY. Data types determine how values are stored and compared. Indexes improve performance by speeding up retrieval of rows matching search conditions, though they cost extra storage and maintenance.',
        important: [
          'CHECK ensures values satisfy a logical condition.',
          'UNIQUE prevents duplicate values in a column.',
          'Indexes help WHERE, JOIN, and ORDER BY operations run faster.'
        ],
        example: `CREATE TABLE Student (\n  sid INT PRIMARY KEY,\n  sname VARCHAR(40) NOT NULL,\n  marks INT CHECK (marks >= 0 AND marks <= 100),\n  email VARCHAR(100) UNIQUE\n);`,
        visual: `
          <div class="table-card">
            <h4>Typical database types</h4>
            <table>
              <thead><tr><th>Type</th><th>Use</th></tr></thead>
              <tbody>
                <tr><td>INT</td><td>Whole numbers</td></tr>
                <tr><td>VARCHAR(n)</td><td>Variable-length text</td></tr>
                <tr><td>DATE</td><td>Dates</td></tr>
                <tr><td>BOOLEAN</td><td>True/false values</td></tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>Index effect</h4>
            <pre>CREATE INDEX idx_student_dept ON Student(dept);
SELECT * FROM Student WHERE dept = 'CSE';</pre>
          </div>
        `,
        practice: 'Why might a database administrator avoid creating too many indexes on a frequently updated table?'
      },
      {
        id: 'authorization',
        title: 'Authorization, GRANT, REVOKE and Roles',
        keywords: ['GRANT', 'REVOKE', 'ROLE', 'authorization'],
        explanation:
          'Authorization controls which users can access or modify database objects. GRANT gives privileges, REVOKE removes them, and roles bundle permissions to simplify administration. The database administrator can tailor access for students, instructors, and application accounts depending on their responsibilities.',
        important: [
          'Privileges may include SELECT, INSERT, UPDATE, DELETE, and CREATE.' ,
          'Roles let administrators assign a package of privileges instead of repeating them for every user.',
          'Authorization is a key security mechanism in multi-user database environments.'
        ],
        example: `GRANT SELECT, INSERT ON Student TO instructor;\nREVOKE INSERT ON Student FROM instructor;\nCREATE ROLE faculty;\nGRANT faculty TO dept_head;`,
        visual: `
          <div class="table-card">
            <h4>Permission model</h4>
            <table>
              <thead><tr><th>User/Role</th><th>Privilege</th></tr></thead>
              <tbody>
                <tr><td>Student</td><td>SELECT only on Course</td></tr>
                <tr><td>Faculty</td><td>SELECT/UPDATE on Student</td></tr>
                <tr><td>Admin</td><td>All privileges</td></tr>
              </tbody>
            </table>
          </div>
        `,
        interactive: `
          <div class="table-card">
            <h4>Authorization example</h4>
            <pre>GRANT SELECT ON Enroll TO student;
REVOKE UPDATE ON Student FROM student;
CREATE ROLE admin;
GRANT admin TO db_admin;</pre>
          </div>
        `,
        practice: 'Why is it safer to assign permissions through roles rather than giving each user permissions one by one?'
      }
    ],
    quiz: [
      {
        question: 'Which join returns all rows from the left table and matching rows from the right?',
        options: ['Inner join', 'Left join', 'Right join', 'Natural join'],
        answer: 1
      },
      {
        question: 'A view is:',
        options: ['A stored table with copied data', 'A virtual table defined by a query', 'An index on a column', 'A database user'],
        answer: 1
      },
      {
        question: 'The COMMIT statement:',
        options: ['Aborts the transaction', 'Persists all changes made in the transaction', 'Creates an index', 'Deletes a table'],
        answer: 1
      },
      {
        question: 'Which command removes privileges?',
        options: ['GRANT', 'REVOKE', 'ALTER', 'CREATE'],
        answer: 1
      }
    ]
  }
];

const chapterMap = Object.fromEntries(chapters.map((chapter) => [chapter.id, chapter]));
const sqlData = {
  Student: [
    { sid: 101, sname: 'Aisha', dept: 'CSE', year: 2, marks: 88 },
    { sid: 102, sname: 'Rahul', dept: 'ECE', year: 3, marks: 72 },
    { sid: 103, sname: 'Meera', dept: 'CSE', year: 2, marks: 91 },
    { sid: 104, sname: 'Aman', dept: 'IT', year: 1, marks: 66 },
    { sid: 105, sname: 'Nisha', dept: 'CSE', year: 4, marks: 94 }
  ],
  Course: [
    { cid: 1, cname: 'DBMS', dept: 'CSE' },
    { cid: 2, cname: 'Signals', dept: 'ECE' },
    { cid: 3, cname: 'OS', dept: 'CSE' }
  ],
  Enroll: [
    { sid: 101, cid: 1, grade: 'A' },
    { sid: 101, cid: 3, grade: 'B' },
    { sid: 102, cid: 2, grade: 'B+' },
    { sid: 103, cid: 1, grade: 'A+' },
    { sid: 105, cid: 3, grade: 'A' }
  ]
};

const state = {
  theme: localStorage.getItem('dbms-theme') || 'light',
  currentView: 'home',
  activeChapter: 2,
  activeTopicId: 'relational-model',
  searchTerm: ''
};

function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return {
      completedTopics: [],
      chapterScores: {},
      finalQuiz: null,
      lastVisited: { chapter: 2, topic: 'relational-model' }
    };
  }

  try {
    return JSON.parse(saved);
  } catch {
    return {
      completedTopics: [],
      chapterScores: {},
      finalQuiz: null,
      lastVisited: { chapter: 2, topic: 'relational-model' }
    };
  }
}

const progress = loadProgress();

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function applyTheme() {
  document.body.classList.toggle('dark', state.theme === 'dark');
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle?.querySelector('.theme-icon');
  const themeLabel = themeToggle?.querySelector('.theme-label');

  if (themeIcon) {
    themeIcon.textContent = state.theme === 'dark' ? '☀' : '☾';
  }

  if (themeLabel) {
    themeLabel.textContent = state.theme === 'dark' ? 'Light mode' : 'Dark mode';
  }

  if (themeToggle) {
    themeToggle.setAttribute('aria-label', state.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  localStorage.setItem('dbms-theme', state.theme);
}

function getCompletedTopicsForChapter(chapterId) {
  return (progress.completedTopics || []).filter((item) => item.startsWith(`${chapterId}:`)).length;
}

function chapterProgressPercent(chapterId) {
  const chapter = chapterMap[chapterId];
  if (!chapter) return 0;
  const completed = chapter.topics.filter((topic) => progress.completedTopics.includes(`${chapterId}:${topic.id}`)).length;
  return Math.round((completed / chapter.topics.length) * 100);
}

function overallProgressPercent() {
  const totalTopics = chapters.reduce((sum, chapter) => sum + chapter.topics.length, 0);
  const completed = progress.completedTopics.length;
  return totalTopics ? Math.round((completed / totalTopics) * 100) : 0;
}

function markTopicComplete(chapterId, topicId) {
  const key = `${chapterId}:${topicId}`;
  if (!progress.completedTopics.includes(key)) {
    progress.completedTopics.push(key);
    saveProgress();
  }
}

function updateSidebarProgress() {
  const percent = overallProgressPercent();
  const ring = document.getElementById('sidebar-progress-ring');
  if (ring) {
    ring.style.background = `conic-gradient(var(--primary) ${percent * 3.6}deg, var(--surface) 0deg)`;
  }
  const label = document.getElementById('sidebar-progress-label');
  if (label) {
    label.textContent = `${percent}%`;
  }
  const completedTopics = document.getElementById('completed-topics-count');
  if (completedTopics) {
    completedTopics.textContent = String(progress.completedTopics.length);
  }
  const completedChapters = document.getElementById('completed-chapters-count');
  if (completedChapters) {
    const total = chapters.filter((chapter) => chapterProgressPercent(chapter.id) === 100).length;
    completedChapters.textContent = String(total);
  }
}

function getSelectedTopic(chapterId, topicIdOverride) {
  const chapter = chapterMap[chapterId];
  const requestedId = topicIdOverride || state.activeTopicId;
  const selected = chapter.topics.find((topic) => topic.id === requestedId) || chapter.topics[0];
  state.activeTopicId = selected.id;
  return selected;
}

function getNextChapterId(chapterId) {
  const chapterIndex = chapters.findIndex((chapter) => chapter.id === chapterId);
  if (chapterIndex === -1 || chapterIndex >= chapters.length - 1) {
    return null;
  }
  return chapters[chapterIndex + 1].id;
}

function renderHome() {
  state.currentView = 'home';
  const totalChapters = chapters.length;
  const completedChapters = chapters.filter((chapter) => chapterProgressPercent(chapter.id) >= 100).length;
  const lastVisited = progress.lastVisited || { chapter: 2, topic: 'relational-model' };

  const chapterCards = chapters
    .map((chapter) => {
      const percent = chapterProgressPercent(chapter.id);
      const completed = chapter.topics.filter((topic) => progress.completedTopics.includes(`${chapter.id}:${topic.id}`)).length;
      const nextChapterId = getNextChapterId(chapter.id);
      const actionText = percent >= 100 ? (nextChapterId ? 'Move to next chapter' : 'Review chapter') : 'Continue chapter';
      return `
        <article class="chapter-card">
          <h4>${chapter.title}</h4>
          <p>${chapter.overview}</p>
          <div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div>
          <div class="chapter-meta">
            <span>${completed}/${chapter.topics.length} topics</span>
            <span>${percent}%</span>
          </div>
          <button class="primary-btn" type="button" data-action="open-chapter" data-chapter="${percent >= 100 && nextChapterId ? nextChapterId : chapter.id}">${actionText}</button>
        </article>
      `;
    })
    .join('');

  document.getElementById('app-content').innerHTML = `
    <div class="page-header">
      <div>
        <h2>Dashboard</h2>
        <p class="header-copy">Read, understand, visualize, interact, practice, quiz and track progress.</p>
      </div>
      <button class="primary-btn" type="button" data-action="open-chapter" data-chapter="${lastVisited.chapter}">Continue Learning</button>
    </div>

    <section class="overview-grid">
      <div class="stat-card">
        <span class="label">Overall progress</span>
        <span class="value">${overallProgressPercent()}%</span>
      </div>
      <div class="stat-card">
        <span class="label">Topics done</span>
        <span class="value">${progress.completedTopics.length}</span>
      </div>
      <div class="stat-card">
        <span class="label">Chapters complete</span>
        <span class="value">${completedChapters}/${totalChapters}</span>
      </div>
      <div class="stat-card">
        <span class="label">Learning mode</span>
        <span class="value">Interactive</span>
      </div>
    </section>

    <div class="home-grid">
      <section class="card">
        <div class="card-header">
          <h3>Course overview</h3>
        </div>
        <p>Build a solid understanding of relational databases, SQL querying, and advanced database features such as joins, views, transactions, constraints, and authorization. Each chapter blends definitions, examples, diagrams, interactive practice, and short assessments.</p>
        <div class="chapter-grid">${chapterCards}</div>
      </section>

      <aside class="card">
        <div class="card-header">
          <h3>Study path</h3>
        </div>
        <div class="feature-list">
          <div class="feature-tile">
            <strong>Relational foundations</strong>
            <span>Relational model, schema, keys, tuples, and algebraic operations.</span>
          </div>
          <div class="feature-tile">
            <strong>SQL skills</strong>
            <span>Querying, filtering, grouping, subqueries, and handling NULL values.</span>
          </div>
          <div class="feature-tile">
            <strong>Advanced DB features</strong>
            <span>Joins, views, transactions, constraints, indexing, and secure authorization.</span>
          </div>
          <button class="primary-btn" type="button" data-action="open-final-quiz">Take final quiz</button>
        </div>
      </aside>
    </div>
  `;

  updateSidebarProgress();
}

function renderTopicButtons(chapter) {
  return chapter.topics
    .map((topic) => {
      const active = state.activeTopicId === topic.id ? 'active' : '';
      return `
        <button class="topic-pill ${active}" type="button" data-action="select-topic" data-chapter="${chapter.id}" data-topic="${topic.id}">
          <span>${topic.title}</span>
          <small>${topic.keywords.slice(0, 3).join(' • ')}</small>
        </button>
      `;
    })
    .join('');
}

function renderTopicDetail(chapterId, topic) {
  const topicIndex = chapterMap[chapterId].topics.findIndex((item) => item.id === topic.id);
  const prevTopic = chapterMap[chapterId].topics[topicIndex - 1] || null;
  const nextTopic = chapterMap[chapterId].topics[topicIndex + 1] || null;

  const completed = progress.completedTopics.includes(`${chapterId}:${topic.id}`);

  const importantPoints = topic.important.map((point) => `<li>${point}</li>`).join('');

  return `
    <section class="topic-detail">
      <h3>${topic.title}</h3>
      <div class="topic-meta">
        ${topic.keywords.map((keyword) => `<span class="meta-pill">${keyword}</span>`).join('')}
      </div>

      <p>${topic.explanation}</p>

      <div class="practice-box">
        <strong>Important points</strong>
        <ul>${importantPoints}</ul>
      </div>

      <div class="example-box">
        <strong>Example</strong>
        <pre>${escapeHtml(topic.example)}</pre>
        <button class="copy-btn" type="button" data-action="copy-code" data-copy="${escapeAttribute(topic.example)}">Copy example</button>
      </div>

      ${topic.visual ? `<div class="diagram-box">${topic.visual}</div>` : ''}

      ${topic.interactive || ''}

      <div class="practice-box">
        <strong>Practice question</strong>
        <p>${topic.practice}</p>
      </div>

      <div class="topic-nav-row">
        <button class="ghost-btn" type="button" data-action="prev-topic" data-chapter="${chapterId}" ${prevTopic ? '' : 'disabled'}>
          Previous topic
        </button>
        <button class="primary-btn" type="button" data-action="complete-topic" data-chapter="${chapterId}" data-topic="${topic.id}">
          ${completed ? 'Completed' : 'Mark as complete'}
        </button>
        <button class="ghost-btn" type="button" data-action="next-topic" data-chapter="${chapterId}" ${nextTopic ? '' : 'disabled'}>
          Next topic
        </button>
      </div>
    </section>
  `;
}

function renderChapter(chapterId) {
  const chapter = chapterMap[chapterId];
  if (!chapter) return;

  const selectedTopic = getSelectedTopic(chapterId);
  const percent = chapterProgressPercent(chapterId);
  const nextChapterId = getNextChapterId(chapterId);

  progress.lastVisited = { chapter: chapterId, topic: selectedTopic.id };
  saveProgress();

  document.getElementById('app-content').innerHTML = `
    <div class="page-header">
      <div>
        <h2>${chapter.title}</h2>
        <p class="header-copy">${chapter.overview}</p>
      </div>
      <button class="secondary-btn" type="button" data-action="open-home">Back to dashboard</button>
    </div>

    <div class="chapter-shell">
      <aside class="card">
        <div class="card-header">
          <h4>Topics</h4>
        </div>
        <div class="topic-nav-list">
          ${renderTopicButtons(chapter)}
        </div>
      </aside>

      <div>
        <div class="card">
          <div class="card-header">
            <h4>Progress</h4>
            <span>${percent}%</span>
          </div>
          <div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div>
        </div>
        ${percent >= 100 && nextChapterId ? `
          <div class="chapter-complete-banner">
            <p>Chapter complete! Ready to move forward.</p>
            <button class="primary-btn" type="button" data-action="open-chapter" data-chapter="${nextChapterId}">Move to next chapter</button>
          </div>
        ` : ''}
        ${renderTopicDetail(chapterId, selectedTopic)}
        ${renderQuizCard(chapter)}
      </div>
    </div>
  `;

  updateSidebarProgress();
  initializeJoinVisualizers();
  initializeSqlResults();
  initializeRelAlgDemo();
  initializeSubqueryVisualizer();
}

function renderQuizCard(chapter) {
  return `
    <section class="quiz-card">
      <h4>${chapter.title} quiz</h4>
      <form class="chapter-quiz" data-chapter="${chapter.id}">
        ${chapter.quiz
          .map(
            (question, qIndex) => `
              <div class="quiz-question">
                <p>${qIndex + 1}. ${question.question}</p>
                <div class="quiz-options">
                  ${question.options
                    .map(
                      (option, optionIndex) => `
                        <button class="quiz-option-btn" type="button" data-action="select-answer" data-chapter="${chapter.id}" data-question="${qIndex}" data-option="${optionIndex}">
                          ${String.fromCharCode(65 + optionIndex)}. ${option}
                        </button>
                      `
                    )
                    .join('')}
                </div>
              </div>
            `
          )
          .join('')}
        <button class="primary-btn" type="submit">Submit quiz</button>
      </form>
      <div class="quiz-results hidden" id="quiz-results-${chapter.id}"></div>
    </section>
  `;
}

function renderFinalQuiz() {
  const finalQuestions = chapters.flatMap((chapter) => chapter.quiz.map((question, index) => ({ ...question, chapterId: chapter.id, chapterTitle: chapter.title, qIndex: index })));

  document.getElementById('app-content').innerHTML = `
    <div class="page-header">
      <div>
        <h2>Final DBMS Quiz</h2>
        <p class="header-copy">Assess your understanding across the full course.</p>
      </div>
      <button class="secondary-btn" type="button" data-action="open-home">Back to dashboard</button>
    </div>

    <section class="quiz-card">
      <form id="final-quiz-form">
        ${finalQuestions
          .map(
            (question, index) => `
              <div class="quiz-question">
                <p>${index + 1}. ${question.chapterTitle} — ${question.question}</p>
                <div class="quiz-options">
                  ${question.options
                    .map(
                      (option, optionIndex) => `
                        <button class="quiz-option-btn" type="button" data-action="select-answer" data-chapter="${question.chapterId}" data-question="${question.qIndex}" data-option="${optionIndex}" data-final="true">
                          ${String.fromCharCode(65 + optionIndex)}. ${option}
                        </button>
                      `
                    )
                    .join('')}
                </div>
              </div>
            `
          )
          .join('')}
        <button class="primary-btn" type="submit">Submit final quiz</button>
      </form>
      <div id="final-quiz-results" class="quiz-results hidden"></div>
    </section>
  `;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttribute(value) {
  return value.replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

function renderSearchResults(query) {
  const lowerQuery = query.toLowerCase();
  const matches = chapters.flatMap((chapter) =>
    chapter.topics
      .filter((topic) => {
        const haystack = `${chapter.title} ${topic.title} ${topic.keywords.join(' ')}`.toLowerCase();
        return haystack.includes(lowerQuery);
      })
      .map((topic) => ({ chapter, topic }))
  );

  document.getElementById('app-content').innerHTML = `
    <div class="page-header">
      <div>
        <h2>Search results</h2>
        <p class="header-copy">Showing matches for “${escapeHtml(query)}”</p>
      </div>
      <button class="secondary-btn" type="button" data-action="open-home">Back to dashboard</button>
    </div>

    <div class="chapter-grid">
      ${
        matches.length
          ? matches
              .map(
                ({ chapter, topic }) => `
                  <article class="chapter-card">
                    <h4>${chapter.title}</h4>
                    <p>${topic.title}</p>
                    <button class="primary-btn" type="button" data-action="open-chapter" data-chapter="${chapter.id}">Open topic</button>
                  </article>
                `
              )
              .join('')
          : `<div class="card"><p>No topics matched your search.</p></div>`
      }
    </div>
  `;
  updateSidebarProgress();
}

function initializeJoinVisualizers() {
  const data = {
    Student: [
      { sid: 101, sname: 'Aisha' },
      { sid: 102, sname: 'Rahul' },
      { sid: 103, sname: 'Meera' }
    ],
    Enroll: [
      { sid: 101, cid: 1 },
      { sid: 102, cid: 2 },
      { sid: 104, cid: 3 }
    ]
  };

  const renderTable = (rows) => `
    <div class="table-wrap">
      <table>
        <thead><tr><th>sid</th><th>sname</th><th>cid</th></tr></thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td>${row.sid}</td>
                  <td>${row.sname || '-'}</td>
                  <td>${row.cid || '-'}</td>
                </tr>
              `
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `;

  const joinOutputs = {
    inner: [
      { sid: 101, sname: 'Aisha', cid: 1 },
      { sid: 102, sname: 'Rahul', cid: 2 }
    ],
    natural: [
      { sid: 101, sname: 'Aisha', cid: 1 },
      { sid: 102, sname: 'Rahul', cid: 2 }
    ],
    left: [
      { sid: 101, sname: 'Aisha', cid: 1 },
      { sid: 102, sname: 'Rahul', cid: 2 },
      { sid: 103, sname: 'Meera', cid: '-' }
    ],
    right: [
      { sid: 101, sname: 'Aisha', cid: 1 },
      { sid: 102, sname: 'Rahul', cid: 2 },
      { sid: 104, sname: '-', cid: 3 }
    ],
    full: [
      { sid: 101, sname: 'Aisha', cid: 1 },
      { sid: 102, sname: 'Rahul', cid: 2 },
      { sid: 103, sname: 'Meera', cid: '-' },
      { sid: 104, sname: '-', cid: 3 }
    ]
  };

  const outputs = document.querySelectorAll('#join-output, #join-output-advanced');
  outputs.forEach((output) => {
    output.innerHTML = renderTable(joinOutputs.inner);
  });

  document.querySelectorAll('[data-action="join-demo"]').forEach((button) => {
    button.addEventListener('click', () => {
      const type = button.dataset.join;
      const container = document.getElementById(type === 'natural' ? 'join-output-advanced' : 'join-output') || document.getElementById('join-output');
      if (container) {
        container.innerHTML = renderTable(joinOutputs[type] || joinOutputs.inner);
      }
    });
  });
}

function initializeRelAlgDemo() {
  const output = document.getElementById('relational-algebra-demo');
  const relOutput = document.getElementById('rel-alg-output');

  const studentRows = [
    { sid: 101, sname: 'Aisha', dept: 'CSE' },
    { sid: 102, sname: 'Rahul', dept: 'ECE' },
    { sid: 103, sname: 'Meera', dept: 'CSE' }
  ];

  const renderRows = (rows) => `
    <div class="table-wrap">
      <table>
        <thead><tr><th>sid</th><th>sname</th><th>dept</th></tr></thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td>${row.sid}</td>
              <td>${row.sname}</td>
              <td>${row.dept}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  if (output) {
    output.innerHTML = renderRows(studentRows.filter((row) => row.dept === 'CSE'));
  }

  if (relOutput) {
    relOutput.innerHTML = renderRows(studentRows.filter((row) => row.dept === 'CSE'));
  }

  document.querySelectorAll('[data-action="rel-alg-op"]').forEach((button) => {
    button.addEventListener('click', () => {
      const op = button.dataset.op;
      const target = document.getElementById('rel-alg-output');
      if (!target) return;
      let rows = studentRows;
      if (op === 'selection') rows = studentRows.filter((row) => row.dept === 'CSE');
      if (op === 'projection') rows = studentRows.map(({ sid, sname }) => ({ sid, sname }));
      if (op === 'union') rows = studentRows;
      if (op === 'product') rows = [
        { sid: 101, sname: 'Aisha', dept: 'CSE', cid: 1 },
        { sid: 101, sname: 'Aisha', dept: 'CSE', cid: 3 },
        { sid: 102, sname: 'Rahul', dept: 'ECE', cid: 1 }
      ];
      target.innerHTML = renderRows(rows);
    });
  });
}

function initializeSqlResults() {
  const input = document.getElementById('sql-query-input');
  const results = document.getElementById('sql-results');
  if (!input || !results) return;

  const renderRows = (rows, headers) => {
    if (!rows.length) {
      return '<p>No matching rows.</p>';
    }
    return `
      <div class="table-wrap">
        <table>
          <thead><tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead>
          <tbody>
            ${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>
    `;
  };

  function queryRunner(sqlText) {
    const sql = sqlText.trim().replace(/;\s*$/, '');
    if (!sql) return;

    const normalized = sql.replace(/\s+/g, ' ').trim();
    const lowerSql = normalized.toLowerCase();

    if (lowerSql.startsWith('select * from student')) {
      const headers = ['sid', 'sname', 'dept', 'year', 'marks'];
      const rows = sqlData.Student.map((row) => [row.sid, row.sname, row.dept, row.year, row.marks]);
      results.innerHTML = renderRows(rows, headers);
      return;
    }

    const match = normalized.match(/^select\s+(.*?)\s+from\s+(student|course|enroll)\s*(?:where\s+(.*?))?$/i);
    if (match) {
      const columns = match[1].split(',').map((item) => item.trim());
      const table = match[2].toLowerCase();
      const whereClause = match[3] ? match[3].trim() : '';
      const rows = sqlData[table.charAt(0).toUpperCase() + table.slice(1)] || sqlData.Student;
      let filtered = [...rows];

      if (whereClause) {
        const condition = whereClause.match(/([a-zA-Z_]+)\s*=\s*'([^']+)'/i);
        if (condition) {
          const field = condition[1].toLowerCase();
          const value = condition[2];
          filtered = filtered.filter((row) => String(row[field]).toLowerCase() === value.toLowerCase());
        }
      }

      if (columns.includes('*')) {
        const headers = Object.keys(rows[0]);
        const outputRows = filtered.map((row) => headers.map((key) => row[key]));
        results.innerHTML = renderRows(outputRows, headers);
      } else {
        const headers = columns.map((col) => col.replace(/\s+as\s+/i, ' as ').split(' as ')[1] || col);
        const outputRows = filtered.map((row) => columns.map((col) => row[col.replace(/\s+as\s+/i, '').trim()]));
        results.innerHTML = renderRows(outputRows, headers);
      }
      return;
    }

    if (lowerSql.includes('count(*)')) {
      const count = sqlData.Student.length;
      results.innerHTML = `<div class="table-wrap"><table><thead><tr><th>COUNT(*)</th></tr></thead><tbody><tr><td>${count}</td></tr></tbody></table></div>`;
      return;
    }

    if (lowerSql.includes('distinct dept')) {
      const unique = [...new Set(sqlData.Student.map((row) => row.dept))];
      results.innerHTML = renderRows(unique.map((value) => [value]), ['dept']);
      return;
    }

    results.innerHTML = '<p>Example query processed.</p>';
  }

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
      queryRunner(input.value);
    }
  });

  const defaultQuery = input.value;
  queryRunner(defaultQuery);

  document.querySelectorAll('[data-action="sql-demo-query"]').forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.query;
      input.value = value;
      queryRunner(value);
    });
  });

  const runButton = document.querySelector('[data-action="run-sql"]');
  if (runButton) {
    runButton.addEventListener('click', () => queryRunner(input.value));
  }
}

function initializeSubqueryVisualizer() {
  const container = document.getElementById('subquery-visualizer');
  if (!container) return;

  const steps = [
    'Inner query: SELECT AVG(marks) FROM Student;',
    'Average marks = 84.2',
    'Outer query: SELECT sname FROM Student WHERE marks > 84.2;',
    'Result: Meera, Nisha'
  ];

  let stepIndex = 0;
  const renderStep = () => {
    container.innerHTML = `
      <div class="code-block">
        <pre>${steps[stepIndex]}</pre>
      </div>
      <div class="operation-row">
        <button class="action-btn" type="button" data-action="subquery-step" data-direction="prev">Previous</button>
        <button class="action-btn" type="button" data-action="subquery-step" data-direction="next">Next</button>
      </div>
    `;
  };

  renderStep();

  document.querySelectorAll('[data-action="subquery-step"]').forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.dataset.direction;
      if (direction === 'next') stepIndex = Math.min(stepIndex + 1, steps.length - 1);
      if (direction === 'prev') stepIndex = Math.max(stepIndex - 1, 0);
      renderStep();
    });
  });
}

function handleSelectionAnswer(button) {
  const chapterId = Number(button.dataset.chapter);
  const questionIndex = Number(button.dataset.question);
  const optionIndex = Number(button.dataset.option);
  const chapter = chapterMap[chapterId];
  if (!chapter) return;

  const question = chapter.quiz[questionIndex];
  if (!question) return;

  question.selectedOption = optionIndex;
  const buttons = document.querySelectorAll(`.quiz-option-btn[data-chapter="${chapterId}"][data-question="${questionIndex}"]`);
  buttons.forEach((btn) => btn.classList.toggle('selected', Number(btn.dataset.option) === optionIndex));
}

function handleQuizSubmit(event) {
  event.preventDefault();
  const form = event.target.closest('.chapter-quiz');
  if (!form) return;
  const chapterId = Number(form.dataset.chapter);
  const chapter = chapterMap[chapterId];
  const resultsBox = document.getElementById(`quiz-results-${chapterId}`);
  if (!resultsBox) return;

  let score = 0;
  chapter.quiz.forEach((question, index) => {
    const selected = question.selectedOption;
    if (selected === question.answer) score += 1;
  });

  const percent = Math.round((score / chapter.quiz.length) * 100);
  const status = percent >= 75 ? 'Excellent!' : percent >= 50 ? 'Good effort!' : 'Review the chapter and try again.';
  resultsBox.classList.remove('hidden');
  resultsBox.innerHTML = `<strong>Result:</strong> ${score}/${chapter.quiz.length} correct (${percent}%). ${status}`;

  if (percent >= 75) {
    chapter.topics.forEach((topic) => markTopicComplete(chapterId, topic.id));
    updateSidebarProgress();
  }
}

function handleFinalQuizSubmit(event) {
  event.preventDefault();
  const finalQuestions = chapters.flatMap((chapter) => chapter.quiz.map((question, index) => ({ ...question, chapterId: chapter.id, qIndex: index })));
  let score = 0;
  finalQuestions.forEach((question) => {
    const choice = Number(document.querySelector(`.quiz-option-btn[data-chapter="${question.chapterId}"][data-question="${question.qIndex}"][data-final="true"].selected`)?.dataset.option ?? -1);
    if (choice === question.answer) score += 1;
  });

  const results = document.getElementById('final-quiz-results');
  if (!results) return;
  const percent = Math.round((score / finalQuestions.length) * 100);
  results.classList.remove('hidden');
  results.innerHTML = `<strong>Final score:</strong> ${score}/${finalQuestions.length} (${percent}%).`;
  progress.finalQuiz = percent;
  saveProgress();
}

function handleThemeToggle() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  applyTheme();
}

function routeAction(action, button) {
  switch (action) {
    case 'open-home':
      renderHome();
      break;
    case 'open-chapter': {
      const chapterId = Number(button.dataset.chapter || state.activeChapter);
      state.activeChapter = chapterId;
      const chapter = chapterMap[chapterId];
      state.activeTopicId = chapter ? chapter.topics[0].id : state.activeTopicId;
      renderChapter(chapterId);
      break;
    }
    case 'select-topic': {
      const chapterId = Number(button.dataset.chapter);
      state.activeChapter = chapterId;
      state.activeTopicId = button.dataset.topic;
      renderChapter(chapterId);
      break;
    }
    case 'prev-topic': {
      const chapterId = Number(button.dataset.chapter);
      const chapter = chapterMap[chapterId];
      const currentIndex = chapter.topics.findIndex((topic) => topic.id === state.activeTopicId);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      state.activeTopicId = chapter.topics[prevIndex].id;
      renderChapter(chapterId);
      break;
    }
    case 'next-topic': {
      const chapterId = Number(button.dataset.chapter);
      const chapter = chapterMap[chapterId];
      const currentIndex = chapter.topics.findIndex((topic) => topic.id === state.activeTopicId);
      const nextIndex = currentIndex < chapter.topics.length - 1 ? currentIndex + 1 : chapter.topics.length - 1;
      state.activeTopicId = chapter.topics[nextIndex].id;
      renderChapter(chapterId);
      break;
    }
    case 'complete-topic': {
      const chapterId = Number(button.dataset.chapter);
      const topicId = button.dataset.topic;
      markTopicComplete(chapterId, topicId);
      renderChapter(chapterId);
      break;
    }
    case 'copy-code': {
      const value = button.dataset.copy || button.parentElement?.querySelector('pre')?.innerText || '';
      navigator.clipboard.writeText(value).catch(() => {});
      button.textContent = 'Copied';
      setTimeout(() => { button.textContent = 'Copy example'; }, 1200);
      break;
    }
    case 'open-final-quiz':
      renderFinalQuiz();
      break;
    case 'sql-demo-query': {
      const target = document.getElementById('sql-query-input');
      if (target) target.value = button.dataset.query;
      break;
    }
    case 'run-sql': {
      const input = document.getElementById('sql-query-input');
      if (input) {
        const sql = input.value;
        const rows = sqlData.Student;
        const result = document.getElementById('sql-results');
        if (sql.toLowerCase().includes('count(*)')) {
          result.innerHTML = `<div class="table-wrap"><table><thead><tr><th>COUNT(*)</th></tr></thead><tbody><tr><td>${rows.length}</td></tr></tbody></table></div>`;
        } else {
          const match = sql.match(/SELECT\s+(.*?)\s+FROM\s+Student\s+WHERE\s+dept\s*=\s*'([^']+)'/i);
          if (match) {
            const fieldList = match[1].split(',').map((item) => item.trim());
            const filtered = rows.filter((row) => row.dept === match[2]);
            result.innerHTML = `
              <div class="table-wrap">
                <table>
                  <thead><tr>${fieldList.map((header) => `<th>${header}</th>`).join('')}</tr></thead>
                  <tbody>
                    ${filtered.map((row) => `<tr>${fieldList.map((field) => `<td>${row[field.trim()]}</td>`).join('')}</tr>`).join('')}
                  </tbody>
                </table>
              </div>
            `;
          }
        }
      }
      break;
    }
    case 'subquery-step': {
      const container = document.getElementById('subquery-visualizer');
      if (!container) return;
      const steps = [
        'Inner query: SELECT AVG(marks) FROM Student;',
        'Average marks = 84.2',
        'Outer query: SELECT sname FROM Student WHERE marks > 84.2;',
        'Result: Meera, Nisha'
      ];
      const direction = button.dataset.direction;
      let index = Number(container.dataset.stepIndex || 0);
      index = direction === 'next' ? Math.min(index + 1, steps.length - 1) : Math.max(index - 1, 0);
      container.dataset.stepIndex = String(index);
      container.innerHTML = `
        <div class="code-block"><pre>${steps[index]}</pre></div>
        <div class="operation-row">
          <button class="action-btn" type="button" data-action="subquery-step" data-direction="prev">Previous</button>
          <button class="action-btn" type="button" data-action="subquery-step" data-direction="next">Next</button>
        </div>
      `;
      break;
    }
    default:
      break;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  updateSidebarProgress();
  renderHome();

  const searchInput = document.getElementById('topic-search');
  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      const query = event.target.value.trim();
      if (query.length === 0) {
        renderHome();
      } else {
        renderSearchResults(query);
      }
    });
  }

  document.getElementById('theme-toggle')?.addEventListener('click', handleThemeToggle);

  document.addEventListener('click', (event) => {
    const actionButton = event.target.closest('[data-action]');
    if (!actionButton) return;

    if (actionButton.dataset.action === 'select-answer') {
      handleSelectionAnswer(actionButton);
      return;
    }

    if (actionButton.dataset.action === 'run-sql' || actionButton.dataset.action === 'sql-demo-query' || actionButton.dataset.action === 'rel-alg-op' || actionButton.dataset.action === 'join-demo' || actionButton.dataset.action === 'subquery-step' || actionButton.dataset.action === 'copy-code' || actionButton.dataset.action === 'open-home' || actionButton.dataset.action === 'open-chapter' || actionButton.dataset.action === 'select-topic' || actionButton.dataset.action === 'prev-topic' || actionButton.dataset.action === 'next-topic' || actionButton.dataset.action === 'complete-topic' || actionButton.dataset.action === 'open-final-quiz') {
      routeAction(actionButton.dataset.action, actionButton);
      return;
    }

    const form = actionButton.closest('form');
    if (form && form.classList.contains('chapter-quiz')) {
      handleQuizSubmit({ preventDefault: () => {}, target: form });
      return;
    }

    if (actionButton.closest('#final-quiz-form')) {
      handleFinalQuizSubmit({ preventDefault: () => {}, target: actionButton.closest('#final-quiz-form') });
      return;
    }
  });

  document.addEventListener('submit', (event) => {
    const form = event.target;
    if (form.classList.contains('chapter-quiz')) {
      handleQuizSubmit(event);
    }
    if (form.id === 'final-quiz-form') {
      handleFinalQuizSubmit(event);
    }
  });
});
