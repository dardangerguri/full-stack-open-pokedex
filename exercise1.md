 # Python application

In this hypothetical situation, we have an application being developed by a team of about 6 people, using Python. The application is in active development and will be released soon.


## What are the specific tools for linting, testing, and building in Python environment?
- Linting: Flake8, Pylint, and Black, as these tools help to maintain consistent code style and detect potential issues before they reach production.
- Testing: Pytest as it is the framework with the simplest syntax and plugin support.
- Building: Poetry as it handles dependencies and package management.


## What alternatives are there to set up the CI besides Jenkins and GitHub Actions?

Besides Jenkins and Github Actions, there are several CI/CD platforms available: GitLab CI/CD for people using GitLab, CircleCI as it provides powerful configurations and fast cloud builds, Azure Pipeline as it integrates well with Microsoft's ecosystem, Travis CI as it is simple and easy to setup.

## Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?

There are several factors this depends on, such as costs, security, and infrastructure. Considering this is a small team, a cloud-based environment with GitHub Actions is the best solution as it is easier to set up and maintain, it also scales automatically with our needs. However, if the project has particular sensitive data or specific hardware requirements, a self-hosted environment might be necessary.
