# KVSRIT Backend - Quick Setup Guide

## ⚠️ MongoDB Not Connected

The backend needs MongoDB to store data. You have **2 options**:

---

## 🌟 OPTION 1: MongoDB Atlas (RECOMMENDED - Easiest!)

**No installation needed! Free cloud database.**

### Step-by-Step:

1. **Go to MongoDB Atlas**
   - Visit: https://www.mongodb.com/cloud/atlas/register
   - Sign up for free (use Google/GitHub for quick signup)

2. **Create a Free Cluster**
   - Click "Build a Database"
   - Choose **FREE** tier (M0)
   - Select a region close to you
   - Click "Create Cluster" (takes 3-5 minutes)

3. **Set Up Database Access**
   - Go to "Database Access" in left menu
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create username and password (save these!)
   - Set privileges to "Read and write to any database"
   - Click "Add User"

4. **Set Up Network Access**
   - Go to "Network Access" in left menu
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Click "Confirm"

5. **Get Connection String**
   - Go back to "Database" (left menu)
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (looks like):
   ```
   mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/
   ```

6. **Update Your .env File**
   - Open: `backend/.env`
   - Replace `<password>` with your actual password
   - Add database name at the end:
   ```
   MONGODB_URI=mongodb+srv://username:yourpassword@cluster0.xxxxx.mongodb.net/kvsrit
   ```

7. **Run Seed Script**
   ```bash
   cd backend
   npm run seed
   ```

8. **Start Server**
   ```bash
   npm start
   ```

---

## 💻 OPTION 2: Local MongoDB

**Install MongoDB on your computer.**

### For Windows:

1. **Download MongoDB**
   - Visit: https://www.mongodb.com/try/download/community
   - Download MongoDB Community Server
   - Run the installer

2. **Install MongoDB**
   - Choose "Complete" installation
   - Install MongoDB as a Service (check the box)
   - Install MongoDB Compass (optional GUI tool)

3. **Verify MongoDB is Running**
   - Press `Win + R`, type `services.msc`
   - Look for "MongoDB" service
   - Make sure it's "Running"

4. **Your .env is Already Configured**
   - The default `.env` file already has:
   ```
   MONGODB_URI=mongodb://localhost:27017/kvsrit
   ```

5. **Run Seed Script**
   ```bash
   cd backend
   npm run seed
   ```

6. **Start Server**
   ```bash
   npm start
   ```

---

## 🚀 After MongoDB is Set Up

Once you've completed either option above:

1. **Seed the database:**
   ```bash
   cd backend
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

2. **Start the server:**
   ```bash
   npm start
   ```
   
   You should see:
   ```
   🚀 Server running on http://localhost:5000
   📊 Admin panel: http://localhost:5000/admin
   ✅ MongoDB connected successfully
   ```

3. **Open the admin panel:**
   - Go to: http://localhost:5000/admin
   - Start adding/editing your content!

---

## 🆘 Troubleshooting

### "MongoDB connection error"
- **Atlas**: Check your connection string has the correct password
- **Local**: Make sure MongoDB service is running

### "Operation buffering timed out"
- MongoDB is not running or not accessible
- Check your MONGODB_URI in `.env`

### Need help?
- MongoDB Atlas has great documentation
- Local MongoDB: Check if service is running in Windows Services

---

## 📝 Quick Commands Reference

```bash
# Navigate to backend folder
cd backend

# Install dependencies (already done)
npm install

# Seed database with initial data
npm run seed

# Start the server
npm start

# Start with auto-restart (development)
npm run dev
```

---

**Choose your option and follow the steps above!** MongoDB Atlas (Option 1) is recommended as it requires no installation and works immediately.
