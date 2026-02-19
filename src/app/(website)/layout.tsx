import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function WebsiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="fixed inset-0 z-[-10] pointer-events-none bg-[url('/pattern.svg')] bg-left bg-repeat-y opacity-50" />
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
