# 🏋️ Fitness Tracker

A comprehensive health management platform for students, faculty, and fitness enthusiasts.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for backend)

### Installation

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Set up environment variables:**
   - Copy `backend/env.example` to `backend/.env`
   - Copy `frontend/env.example` to `frontend/.env`
   - Update the values as needed

### Development

#### Option 1: Run both frontend and backend together
```bash
npm start
# or
npm run dev
```

#### Option 2: Run frontend and backend separately

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# or for development with auto-restart
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
# or
npm run dev
```

### Available Scripts

#### Root Level
- `npm start` - Start both frontend and backend in development mode
- `npm run dev` - Same as start
- `npm run install:all` - Install dependencies for both frontend and backend
- `npm run build:frontend` - Build frontend for production

#### Backend (`cd backend`)
- `npm start` - Start backend server
- `npm run dev` - Start backend with nodemon (auto-restart)
- `npm test` - Run backend tests

#### Frontend (`cd frontend`)
- `npm start` - Start React development server
- `npm run dev` - Same as start
- `npm run build` - Build for production
- `npm test` - Run frontend tests

## 📁 Project Structure

```
fitness-tracker/
├── frontend/          # React frontend application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Node.js/Express backend API
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── package.json
├── vercel.json        # Vercel deployment configuration
└── package.json       # Root package.json with workspace scripts
```

## 🌐 Deployment

### Vercel (Frontend)
The project is configured for Vercel deployment. The frontend will be automatically deployed when you push to your main branch.

### Backend
Deploy your backend to your preferred hosting service (Render, Heroku, etc.) and update the `REACT_APP_API_URL` in `vercel.json`.

## 🔧 Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/fitness-tracker
JWT_SECRET=your-secret-key
PORT=5000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 📱 Features

- User authentication and authorization
- Workout tracking and logging
- Diet and meal planning
- Progress analytics and charts
- Community features
- Admin panel
- Responsive design

## 🛠️ Tech Stack

### Frontend
- React 19
- Material-UI
- React Router
- Axios
- Recharts

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

## 📄 License

MIT License"# fitness-tracker2" 
