import { pirulen } from "@/ui/fonts"


const Footer = () => {
    return ( 
        <footer className="mt-[3rem] bg-blue-600 p-[2rem] text-white relative">
            <div className="flex items-center gap-2">
                <h1 className={`${pirulen.className} text-[2rem] font-bold`}>FindUs</h1>
            </div>

            <div>

            </div>

            <p className="text-sm absolute bottom-2 w-full text-center left-1/2 transform -translate-x-1/2">© {new Date().getFullYear()} FindUs. All rights reserved.</p>
        </footer>
     );
}
 
export default Footer;