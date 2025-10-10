## SQL Optimization Background

Book: Extensible Query Optimizers in Practice

**For a given query, the DBMS attempts to find a correct exectution plan with the best cost**

query-string --> parser --> binder --> optimizer --> executor

optimizer taks in a **logical query plan** and generates a **physical execution plan**

Topics:
1. Search Stragegies
2. Enumeration / Transformations
3. Parallelization
4. Statistics / Summarization
5. Cardinality Estimation / Parameterization
6. Adaptivity / Deedback Mechanisms
7. Real-world Implementations

### Search Strategies

1. Heuristics / Rules

2. Cost-based Search

    Bottom-up Optimization
    - Start with nothing and then build up the plan to get to the outcome that you want

    Top-down Optimization
    - Start with the outcome that the query wants and then work down the tree to find the optimal plan that gets you to that goal
