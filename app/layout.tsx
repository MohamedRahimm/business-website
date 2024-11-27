import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";


// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar></Navbar>
                {children}
                <Footer></Footer>
            </body>
        </html>
    );
}
