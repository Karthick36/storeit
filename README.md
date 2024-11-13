# StoreIt - Your Personal Document Manager 🏢✨

Welcome to **StoreIt** — a powerful, easy-to-use web application that allows you to upload, share, and manage your documents seamlessly. Whether you're looking for something similar to Google Drive or Dropbox, StoreIt has you covered! ✉️⬇️

![StoreIt Dashboard](app/assets/images/dashboard-screenshot.png)

## 🚀 Features
- **Upload Documents**: Add any type of document to your personal storage space.
- **Share Files**: Share documents with other users via email. 📤
- **Real-time Search**: Quickly find any file with the integrated search bar. 🔍
- **Secure Login**: Authenticate users through OTP for added security. ⚡️
- **User-friendly UI**: A clean, intuitive interface built with **Tailwind CSS**.

## 🛠️ Tech Stack
- **Framework**: Next.js ✨
- **Language**: TypeScript 🛠️
- **Styling**: Tailwind CSS ✨
- **Backend**: Appwrite for backend services and authentication 🗑️

## ℹ️ How to Install and Run Locally
Follow these steps to set up StoreIt on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/storeit.git
   cd storeit
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Appwrite**:
   - Ensure you have Appwrite set up on your local server.
   - Update your environment variables in `.env.local`:
     ```env
     NEXT_PUBLIC_APPWRITE_ENDPOINT=https://your-appwrite-server.com/v1
     NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
     ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Access StoreIt**:
   Navigate to [http://localhost:3000](http://localhost:3000) and start managing your documents! 📝⬇️

## 💡 Usage
1. **Sign Up and Login**
   - Enter your email and receive an OTP for secure login.
   ![OTP Screen](app/assets/images/otp-screen.png)

2. **Uploading Documents**
   - Click on the ‘Upload’ button and choose your files.
   ![Upload Document](app/assets/images/upload-screenshot.png)

3. **Sharing Files**
   - Share documents by entering the recipient's email address.
   ![Share Document](app/assets/images/share-screenshot.png)

## 🛡️ Security Features
- **OTP Authentication**: Ensures only verified users can access their accounts.
- **Appwrite Integration**: Handles secure session management and data storage.

## 📊 Roadmap
Future updates may include:
- **Collaborative Workspaces** 🔧
- **Advanced File Permissions** 🔒
- **Notifications** for shared files ✉️

## ✨ Contributing
We welcome contributions! Feel free to fork the project and submit pull requests.

## 📍 License
This project is licensed under the MIT License.

---

Thank you for checking out **StoreIt**! Feel free to explore, share, and manage your documents effortlessly. 📄✌️
