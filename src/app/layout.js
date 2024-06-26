import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./Providers";
import Footer from "@/components/footer";
import Navbar1 from "@/components/Navbar1";
import { ToastContainer } from "../app/next-tostyft";
import 'react-toastify/dist/ReactToastify.css';
import { icons } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learning Managment System",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className} style={{backgroundColor:'rgb(250,250,250)'}}>
      <AuthProvider>
            <Navbar1/>
            {children}
            <Footer/>
            <ToastContainer />
      </AuthProvider>
        
      </body>
    </html>
  );
}
