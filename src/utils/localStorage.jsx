
const employees = [ 
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "e1@e.com", 
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Prepare monthly report",
        "description": "Compile and analyze data for the monthly performance report.",
        "date": "2025-04-10",
        "category": "Reporting",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team meeting",
        "description": "Discuss project updates and action points.",
        "date": "2025-04-12",
        "category": "Meetings",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client follow-up",
        "description": "Call clients to confirm delivery schedules.",
        "date": "2025-04-08",
        "category": "Communication",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstname": "Ishaan",
    "email": "e2@e.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Bug fix in login module",
        "description": "Resolve issue with authentication timeout.",
        "date": "2025-04-11",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update user manual",
        "description": "Add instructions for new features in the user guide.",
        "date": "2025-04-13",
        "category": "Documentation",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Server health check",
        "description": "Monitor logs and ensure uptime.",
        "date": "2025-04-10",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Refactor dashboard UI",
        "description": "Improve code structure and responsiveness.",
        "date": "2025-04-07",
        "category": "UI/UX",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstname": "Vihaan",
    "email": "e3@e.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Onboard new intern",
        "description": "Help new intern set up workspace and accounts.",
        "date": "2025-04-14",
        "category": "HR",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Revise security protocols",
        "description": "Update internal security guidelines.",
        "date": "2025-04-09",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Compliance audit",
        "description": "Prepare documents for internal compliance check.",
        "date": "2025-04-06",
        "category": "Compliance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Create training materials",
        "description": "Draft onboarding modules for new hires.",
        "date": "2025-04-13",
        "category": "Training",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstname": "Devansh",
    "email": "e4@e.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 3,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "title": "Redesign landing page",
        "description": "Update layout and images based on new branding.",
        "date": "2025-04-11",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare Q2 forecast",
        "description": "Analyze sales data and project Q2 revenue.",
        "date": "2025-04-13",
        "category": "Finance",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Schedule team training",
        "description": "Coordinate with HR for leadership workshop.",
        "date": "2025-04-08",
        "category": "Training",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstname": "Arjun",
    "email": "e5@e.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 4,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "title": "Social media campaign",
        "description": "Plan and schedule posts for new product launch.",
        "date": "2025-04-12",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Customer feedback analysis",
        "description": "Review and summarize NPS survey results.",
        "date": "2025-04-10",
        "category": "Customer Service",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Launch email campaign",
        "description": "Send out promotional emails to subscribers.",
        "date": "2025-04-13",
        "category": "Email Marketing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Review ad performance",
        "description": "Analyze click-through rates and conversion.",
        "date": "2025-04-08",
        "category": "Advertising",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
];


const admin = [
  {
    "id": 1,
    "firstname":"Virat",
    "email": "admin@me.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
	localStorage.setItem("employees",JSON.stringify(employees))
	localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage = () => {
	const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

	// console.log(JSON.parse(data))
  return {employees,admin}
}
