# 📹 Zoom Clone

<div align="center">
  <img src="public/icons/logo.svg" alt="Zoom Clone Logo" width="120" height="120">
  
  <p align="center">
    <strong>Connect, Collaborate, Communicate – Anywhere</strong>
  </p>
  
  <p align="center">
    A modern video conferencing application built with Next.js and Stream SDK
  </p>

  <p align="center">
    <a href="https://zoom-clone-web-app.vercel.app/">🌐 Live Demo</a>
  </p>
</div>

---

## ✨ Features

- 🎥 **Real-time Video Calls** - High-quality video conferencing powered by Stream SDK
- 🔐 **Secure Authentication** - User authentication and authorization with Clerk
- 🏠 **Personal Room** - Every user gets a dedicated personal meeting room
- 📅 **Schedule Meetings** - Plan and schedule upcoming meetings
- 📹 **Recording** - Record meetings and access them later
- 📜 **Meeting History** - View previous meetings
- 🎨 **Modern UI** - Beautiful, responsive interface built with Tailwind CSS
- 🌙 **Dark Theme** - Eye-friendly dark mode design
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Video SDK:** [Stream Video SDK](https://getstream.io/video/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Date Picker:** [React Datepicker](https://reactdatepicker.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ 
- npm, yarn, pnpm, or bun
- A Stream account ([Sign up here](https://getstream.io/))
- A Clerk account ([Sign up here](https://clerk.com/))

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mayank-Radadiya/zoom_clone.git
   cd zoom_clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory and add the following:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   # Stream Video SDK
   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   STREAM_SECRET_KEY=your_stream_secret_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
zoom_clone/
├── actions/              # Server actions
│   └── stream.action.ts  # Stream SDK token provider
├── app/                  # Next.js app directory
│   ├── (auth)/          # Authentication routes
│   ├── (root)/          # Protected routes
│   │   ├── (home)/      # Main application pages
│   │   └── meeting/     # Meeting room pages
│   ├── globals.css      # Global styles
│   └── layout.tsx       # Root layout
├── components/          # React components
│   ├── MeetingComponents/
│   ├── Navbar.tsx
│   └── Sidebar.tsx
├── constants/           # Constants and configuration
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── middleware.ts        # Clerk authentication middleware
├── providers/           # React context providers
└── public/              # Static assets
```

## 🎯 Key Features Explained

### 🏠 Personal Room
Every user has a unique personal meeting room with a permanent meeting link that can be shared with others.

### 📅 Schedule Meetings
Create future meetings with custom date and time, and get a shareable meeting link.

### 🎥 Instant Meetings
Start an instant meeting and invite participants with a generated meeting link.

### 📹 Recordings
Record your meetings and access them later from the recordings page.

### 👥 Participant Management
- View all participants
- Mute/unmute participants (host only)
- End call (host only)

## 🔒 Authentication & Authorization

The application uses Clerk for authentication with the following protected routes:
- `/` - Home page
- `/upcoming` - Upcoming meetings
- `/previous` - Previous meetings
- `/recordings` - Meeting recordings
- `/personal-room` - Personal meeting room
- `/meeting/*` - Meeting rooms

## 🎨 UI Components

The UI is built with:
- **Radix UI** - For accessible, unstyled components
- **Tailwind CSS** - For styling
- **Lucide React** - For icons
- **Custom components** - Reusable UI components

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

The easiest way to deploy this application is using [Vercel](https://vercel.com/):

1. Push your code to a GitHub repository
2. Import your repository to Vercel
3. Add your environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Mayank-Radadiya/zoom_clone)

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Mayank-Radadiya/zoom_clone/issues).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Mayank Radadiya**

- GitHub: [@Mayank-Radadiya](https://github.com/Mayank-Radadiya)
- Project Link: [https://github.com/Mayank-Radadiya/zoom_clone](https://github.com/Mayank-Radadiya/zoom_clone)
- Live Demo: [https://zoom-clone-web-app.vercel.app/](https://zoom-clone-web-app.vercel.app/)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Stream](https://getstream.io/) - Video SDK
- [Clerk](https://clerk.com/) - Authentication
- [Vercel](https://vercel.com/) - Deployment Platform
- [Tailwind CSS](https://tailwindcss.com/) - Styling
