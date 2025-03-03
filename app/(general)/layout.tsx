import { Navbar } from "@/components";
const generalLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Navbar/>
            <span>General</span>
            {children}
        </main>
    );
};

export default generalLayout;