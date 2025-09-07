export default function Tools() {
  const tools = [
    { name: "Apache Tomcat", url: "https://tomcat.apache.org/" },
    { name: "Nginx", url: "https://nginx.org/en/" },
    { name: "Python", url: "https://www.python.org/" },
    { name: "Bash", url: "https://www.gnu.org/software/bash/" },
    { name: "Vim", url: "https://www.vim.org/" },
    { name: "Termius", url: "https://www.termius.com/" },
    { name: "Virtual Box", url: "https://www.virtualbox.org/" },
    { name: "KeePassXC", url: "https://keepassxc.org/" },
    { name: "Rclone", url: "https://rclone.org/" },
    { name: "ClamAV", url: "https://www.clamav.net/" },
    { name: "Navicat", url: "https://www.navicat.com/" },
    { name: "MySQL Workbench", url: "https://www.mysql.com/products/workbench/" },
    { name: "Failover cluster", url: "https://learn.microsoft.com/en-us/windows-server/failover-clustering/failover-clustering-overview" },
  ];

  return (
    <section id="tools" className="bg-gray-950 text-white py-16">
      <h2 className="text-5xl font-bold mb-12 text-cyan-300 text-center">
        Herramientas Utilizadas
      </h2>
      <div className="flex flex-wrap justify-center gap-4 w-1/2 mx-auto">
        {tools.map((tool, idx) => (
          <a
            key={idx}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 px-6 py-3 rounded-full shadow-md hover:shadow-[0_0_15px_2px_rgba(0,255,255,0.6)] transition text-center hover:text-cyan-300"
          >
            {tool.name}
          </a>
        ))}
      </div>
    </section>
  );
}
