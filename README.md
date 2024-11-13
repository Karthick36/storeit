# StoreIt Project

**StoreIt** is a web application designed to function as an online cloud storage platform similar to Google Drive and Dropbox. Users can upload, manage, and share documents seamlessly. This project is built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **Appwrite** as the backend service for authentication and data storage.

---

## Key Features
- **User Authentication**: Secure sign-in using OTP verification.
- **Upload and Store Files**: Users can upload and manage various types of files.
- **File Sharing**: Allows sharing files with other users via email.
- **File Categorization**: Files are organized into categories such as Documents, Images, Media, and Others.

## Tech Stack
- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Appwrite (for authentication and data handling)

## Screenshots
Here are some previews of the application:

### 1. Document Sharing Interface
![Document Sharing](/app/assets/images/document-sharing.png)

### 2. OTP Verification for Sign-in
![OTP Verification](/app/assets/images/otp-verification.png)

### 3. File Management Dashboard
![File Dashboard](/app/assets/images/file-dashboard.png)

## Installation and Setup
Follow these steps to get the project up and running locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/storeit.git
   cd storeit
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env.local` file in the root directory and add the following:
   ```bash
   NEXT_PUBLIC_APPWRITE_ENDPOINT=<Your Appwrite Endpoint>
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=<Your Appwrite Project ID>
   NEXT_PUBLIC_APPWRITE_API_KEY=<Your Appwrite API Key>
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Your application should be running on `http://localhost:3000`.

## Usage
1. **Sign In**: Navigate to the sign-in page and complete OTP verification.
2. **Upload Files**: Use the upload button to add files to your storage.
3. **Manage Files**: View your uploaded files, filter them by type, and use the search functionality.
4. **Share Files**: Click on the share icon next to a file and input the recipient’s email address to share.

## Folder Structure
```
/app
  /components
  /pages
  /public
    /assets
      /images
  /styles
  ...
```

## Contributions
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/storeit/issues) for any open issues or submit a pull request.

## License
This project is licensed under the MIT License.

---

For more details or inquiries, please contact [Your Contact Information].
