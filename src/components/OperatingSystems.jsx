    import ArchLinux from "../assets/archlinux.svg";
    import Debian from "../assets/debian.svg";
    import Kali from "../assets/kalilinux.svg";
    import Fedora from "../assets/fedora.svg";
    import Alma from "../assets/almalinux.svg";
    import Ubuntu from "../assets/ubuntu.svg";
    import LinuxMint from "../assets/linuxmint.svg";
    import Rocky from "../assets/rockylinux.svg";

    export default function OperatingSystems() {
    const systems = [
        { name: "Arch Linux", icon: ArchLinux },
        { name: "Debian Linux", icon: Debian },
        { name: "Kali Linux", icon: Kali },
        { name: "Fedora Linux", icon: Fedora },
        { name: "Alma Linux", icon: Alma },
        { name: "Ubuntu Linux", icon: Ubuntu },
        { name: "Linux Mint", icon: LinuxMint },
        { name: "Rocky Linux", icon: Rocky },
    ];

    return (
        <section id="operating-systems" className="bg-gray-900 text-white py-16">
        <h2 className="text-5xl font-bold mb-8 text-cyan-300 text-center">
            Sistemas Operativos
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
            {systems.map((sys) => (
            <div key={sys.name} className="flex flex-col items-center">
                <img src={sys.icon} alt={sys.name} className="w-20 h-20 bg-white rounded-full hover:shadow-[0_0_25px_3px_rgba(0,255,255,0.6)] transition" />
                <span className="mt-2 text-lg">{sys.name}</span>
            </div>
            ))}
        </div>
        </section>
    );
    }
