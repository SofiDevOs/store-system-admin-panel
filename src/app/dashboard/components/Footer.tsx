import { Settings } from "lucide-react";

interface Props {
    isActive: boolean;
}


const Footer = ({isActive}: Props) => {
    const panelIsActive = isActive ? 'justify-start': 'justify-center items-center'
    return (
        <footer className={`flex flex-col  pt-4 mt-auto border-t border-emerald-400/20 ${panelIsActive} `} >
            <Settings className="text-emerald-400"/>
        </footer>
    );
};

export default Footer;