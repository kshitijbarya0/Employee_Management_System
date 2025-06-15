const employeeData = {
    "Kshitij": {
        "email": "emp1@example.com",
        "password": "securePassword123",
        "TaskList": {
            "NewTask": 2,
            "AcceptedTask": 2,
            "Complete": 2,
            "TaskFailed": 1
        },
        "AllTaskList": [
            {
                "WorkType": "Development",
                "date": "2025-05-10",
                "Title": "Frontend Module",
                "Description": "Implemented responsive UI components for the employee dashboard using React and Tailwind CSS. Ensured mobile-first design compatibility and clean component structure.",
                "MarkComplete": true
            },
            {
                "WorkType": "Testing",
                "date": "2025-05-11",
                "Title": "Unit Tests",
                "Description": "Designed and executed unit tests for the login and registration modules using Jest to ensure the authentication flow is working correctly and handles edge cases properly.",
                "MarkComplete": false
            },
            {
                "WorkType": "Documentation",
                "date": "2025-05-12",
                "Title": "API Docs",
                "Description": "Prepared comprehensive API documentation for the backend services, including request-response structures, authentication flow, and usage examples for developers.",
                "MarkComplete": true
            },
            {
                "WorkType": "Bug Fixing",
                "date": "2025-05-13",
                "Title": "Login Redirect Issue",
                "Description": "Resolved the bug where users were not redirected properly after login by updating the router logic and adding state preservation across sessions.",
                "MarkComplete": true
            },
            {
                "WorkType": "Client Meeting",
                "date": "2025-05-14",
                "Title": "Project Requirements Gathering",
                "Description": "Attended a virtual meeting with the client to gather additional requirements for the second phase of development, clarified priorities, and prepared a scope document.",
                "MarkComplete": false
            },
            {
                "WorkType": "Research",
                "date": "2025-05-15",
                "Title": "New Authentication Methods",
                "Description": "Explored and compared various modern authentication approaches such as OAuth 2.0, JWT, and biometric verification to recommend the best option for enhanced security.",
                "MarkComplete": false
            },
            {
                "WorkType": "Deployment",
                "date": "2025-05-16",
                "Title": "Staging Server Setup",
                "Description": "Configured and deployed the full-stack application on a staging environment using Docker and Nginx for testing and feedback collection before production rollout.",
                "MarkComplete": true
            }
        ]
    },
    "Akash": {
        "email": "emp2@example.com",
        "password": "emp2StrongPass!",
        "TaskList": {
            "NewTask": 1,
            "AcceptedTask": 3,
            "Complete": 2,
            "TaskFailed": 1
        },
        "AllTaskList": [
            {
                "WorkType": "Design",
                "date": "2025-05-10",
                "Title": "Logo Revamp",
                "Description": "Redesigned the company logo using Adobe Illustrator with a fresh modern approach while retaining brand identity.",
                "MarkComplete": true
            },
            {
                "WorkType": "UI/UX",
                "date": "2025-05-11",
                "Title": "Landing Page Design",
                "Description": "Created high-fidelity Figma mockups for the new landing page, focusing on usability and conversion rates.",
                "MarkComplete": false
            },
            {
                "WorkType": "Client Support",
                "date": "2025-05-12",
                "Title": "Support Ticket Cleanup",
                "Description": "Resolved 15+ customer tickets related to UI bugs and suggested improvements for clarity and accessibility.",
                "MarkComplete": true
            },
            {
                "WorkType": "Team Collaboration",
                "date": "2025-05-13",
                "Title": "Weekly Design Sync",
                "Description": "Participated in team sync to align on design priorities and introduce updated UI design tokens.",
                "MarkComplete": true
            },
            {
                "WorkType": "Testing",
                "date": "2025-05-14",
                "Title": "Cross-Browser Testing",
                "Description": "Verified UI components on major browsers (Chrome, Firefox, Safari, Edge) and identified rendering issues.",
                "MarkComplete": false
            },
            {
                "WorkType": "Analytics",
                "date": "2025-05-15",
                "Title": "Heatmap Review",
                "Description": "Analyzed website heatmaps to detect user interaction drop-off points and propose A/B testing solutions.",
                "MarkComplete": false
            },
            {
                "WorkType": "Documentation",
                "date": "2025-05-16",
                "Title": "Design System Guide",
                "Description": "Documented the company’s design system including color palette, typography, component guidelines, and usage rules.",
                "MarkComplete": true
            }
        ]
    },
    "Deepak": {
        "email": "emp3@example.com",
        "password": "emp3#secure",
        "TaskList": {
            "NewTask": 3,
            "AcceptedTask": 1,
            "Complete": 2,
            "TaskFailed": 1
        },
        "AllTaskList": [
            {
                "WorkType": "Backend",
                "date": "2025-05-10",
                "Title": "User Auth API",
                "Description": "Developed secure and scalable user authentication API with password hashing, JWT tokens, and refresh logic.",
                "MarkComplete": true
            },
            {
                "WorkType": "Database",
                "date": "2025-05-11",
                "Title": "Schema Design",
                "Description": "Designed normalized MongoDB schema with relational references and indexes for fast query execution.",
                "MarkComplete": false
            },
            {
                "WorkType": "DevOps",
                "date": "2025-05-12",
                "Title": "CI/CD Pipeline",
                "Description": "Built a CI/CD pipeline using GitHub Actions for auto-deployment and testing of backend services.",
                "MarkComplete": true
            },
            {
                "WorkType": "Security",
                "date": "2025-05-13",
                "Title": "Vulnerability Scan",
                "Description": "Performed vulnerability scanning using OWASP tools and patched potential injection and XSS issues.",
                "MarkComplete": true
            },
            {
                "WorkType": "Code Review",
                "date": "2025-05-14",
                "Title": "Merge Request Review",
                "Description": "Reviewed critical merge requests from teammates, suggested improvements, and approved changes.",
                "MarkComplete": false
            },
            {
                "WorkType": "Client Integration",
                "date": "2025-05-15",
                "Title": "Third-Party API Setup",
                "Description": "Integrated third-party payment and email APIs, handled error logging, and tested fallback mechanisms.",
                "MarkComplete": false
            },
            {
                "WorkType": "Mentorship",
                "date": "2025-05-16",
                "Title": "Onboarding New Dev",
                "Description": "Mentored a new backend developer by walking through project architecture and coding conventions.",
                "MarkComplete": true
            }
        ]
    }
}
localStorage.setItem("employeeData", JSON.stringify(employeeData));