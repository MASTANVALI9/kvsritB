# KVSRIT Backend API

Backend server for the KVSRIT College Website with RESTful APIs and admin panel.

## 🚀 Features

- **RESTful API** for all college website content
- **MongoDB Database** for data persistence
- **Admin Panel** for easy content management (no coding required!)
- **CRUD Operations** for News, Courses, Recruiters, Stats, and Contact forms
- **CORS Enabled** for frontend integration

## 📋 Prerequisites

Before running the backend, make sure you have:

1. **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
2. **MongoDB** - Choose one option:
   - **Option A**: Install MongoDB locally - [Download here](https://www.mongodb.com/try/download/community)
   - **Option B**: Use MongoDB Atlas (cloud) - [Sign up free](https://www.mongodb.com/cloud/atlas)

## 🛠️ Installation & Setup

### Step 1: Install Dependencies

Open terminal in the `backend` folder and run:

```bash
npm install
```

### Step 2: Configure Database

The `.env` file is already created with default settings:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/kvsrit
```

**If using MongoDB Atlas (cloud):**
1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Get your connection string
3. Update `.env` file:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kvsrit
```

**If using local MongoDB:**
- Make sure MongoDB is running on your computer
- The default connection string should work: `mongodb://localhost:27017/kvsrit`

### Step 3: Seed Initial Data

Populate the database with sample data from your frontend:

```bash
npm run seed
```

You should see:
```
✅ Database seeded successfully!
   - 20 news items
   - 10 courses
   - 8 recruiters
   - 4 stats
```

### Step 4: Start the Server

```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

You should see:
```
🚀 Server running on http://localhost:5000
📊 Admin panel: http://localhost:5000/admin
✅ MongoDB connected successfully
```

## 🎯 Using the Admin Panel

1. Open your browser and go to: **http://localhost:5000/admin**
2. You'll see tabs for managing different content:
   - **📰 News & Events** - Add/edit/delete news, exams, placements, circulars
   - **📚 Courses** - Manage UG and PG courses
   - **🏢 Recruiters** - Add company logos and information
   - **📊 Statistics** - Update placement stats and numbers
   - **📧 Contact Submissions** - View form submissions

### Adding News/Events:
1. Click "News & Events" tab
2. Select category (News, Exams, Placements, or Circulars)
3. Enter date, title, and optional link
4. Click "Add News"

### Adding Courses:
1. Click "Courses" tab
2. Select type (UG or PG)
3. Enter course details (name, full name, icon, color)
4. Click "Add Course"

### Adding Recruiters:
1. Click "Recruiters" tab
2. Enter company name and logo URL
3. Set display order (optional)
4. Click "Add Recruiter"

## 📡 API Endpoints

### News & Events
- `GET /api/news` - Get all news
- `GET /api/news/:category` - Get news by category (news/exams/placements/circulars)
- `POST /api/news` - Create news item
- `PUT /api/news/:id` - Update news item
- `DELETE /api/news/:id` - Delete news item

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/type/:type` - Get courses by type (ug/pg)
- `POST /api/courses` - Create course
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

### Recruiters
- `GET /api/recruiters` - Get all recruiters
- `POST /api/recruiters` - Add recruiter
- `PUT /api/recruiters/:id` - Update recruiter
- `DELETE /api/recruiters/:id` - Delete recruiter

### Statistics
- `GET /api/stats` - Get all statistics
- `POST /api/stats` - Add statistic
- `PUT /api/stats/:id` - Update statistic
- `DELETE /api/stats/:id` - Delete statistic

### Contact Forms
- `GET /api/contact` - Get all submissions
- `POST /api/contact` - Submit contact form
- `DELETE /api/contact/:id` - Delete submission

## 🧪 Testing the API

You can test the API using:

1. **Browser** - Visit `http://localhost:5000/api/news` to see all news
2. **Postman** - Import the endpoints and test
3. **curl** - Example:
```bash
curl http://localhost:5000/api/courses
```

## 🔗 Connecting Frontend to Backend

To use this backend with your React frontend, update your components to fetch from the API:

```javascript
// Example: Fetching news in NewsEvents.jsx
useEffect(() => {
    fetch('http://localhost:5000/api/news/news')
        .then(res => res.json())
        .then(data => setNewsData(data))
        .catch(err => console.error(err));
}, []);
```

## 📁 Project Structure

```
backend/
├── server.js           # Main Express server
├── package.json        # Dependencies
├── .env               # Environment variables
├── models/            # Database schemas
│   ├── News.js
│   ├── Course.js
│   ├── Recruiter.js
│   ├── Stats.js
│   └── Contact.js
├── routes/            # API routes
│   ├── news.js
│   ├── courses.js
│   ├── recruiters.js
│   ├── stats.js
│   └── contact.js
├── admin/             # Admin panel
│   └── index.html
└── seed.js            # Database seeding script
```

## 🐛 Troubleshooting

### MongoDB Connection Error
- **Local MongoDB**: Make sure MongoDB service is running
  - Windows: Check Services for "MongoDB"
  - Mac/Linux: Run `sudo systemctl status mongod`
- **MongoDB Atlas**: Check your connection string and network access settings

### Port Already in Use
If port 5000 is busy, change it in `.env`:
```env
PORT=3001
```

### CORS Errors
The server has CORS enabled by default. If you still get errors, check that your frontend is making requests to the correct URL.

## 📝 Scripts

- `npm start` - Start the server
- `npm run dev` - Start with auto-restart (nodemon)
- `npm run seed` - Populate database with initial data

## 🔐 Security Notes

For production deployment:
- Add authentication/authorization
- Use environment variables for sensitive data
- Enable HTTPS
- Add rate limiting
- Validate and sanitize all inputs

## 💡 Tips

1. **Always run seed script first** to populate initial data
2. **Use the admin panel** instead of manually editing the database
3. **Backup your data** before making major changes
4. **Check server logs** if something isn't working

## 🆘 Need Help?

If you encounter any issues:
1. Check that MongoDB is running
2. Verify `.env` configuration
3. Check server console for error messages
4. Make sure all dependencies are installed (`npm install`)

## 📄 License

ISC
