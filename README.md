# Web TODO APP

A simple Todo web application that uses Django as the backend API and React as the frontend. The main purpose of this application is to learn and navigate how to create APIs using Django and to gain familiarity with React.

## Features
- Add, update, and delete tasks
- Mark tasks as complete or incomplete
- Real-time updates with a simple user interface

## Technologies Used

- Backend: Django
- Frontend: React with Vite
- Styling: Tailwind CSS


## Getting Started
### Prerequisites
Make sure you have the following installed:

- Python (3.6 or higher)
- Node.js (14 or higher)
- npm (6 or higher)
### Backend Setup 

1. Clone the repository:

```sh
git clone https://github.com/elmhadji/Todo.git

cd Todo/Backend
```

2. Create a virtual environment and activate it:

```sh
python -m venv venv
source venv/bin/activate  # On Windows, use`venv\Scripts\activate`
```

3. Install the backend dependencies:

```sh
pip install -r requirements.txt
```

4. Run the Django server:

```sh
python manage.py migrate
python manage.py runserver
```

### Frontend Setup

1. Navigate to the frontend directory:

```sh
cd Frontend
```

2. Install the frontend dependencies:

```sh
npm install
```

3. Start the Vite development server:

```sh
npm run dev
```

## Usage
1. Open your web browser and navigate to http://localhost:5173 to view the React frontend.
2. Use the application to add, update, and delete tasks.
