import { IoFolderOpenOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <>
      <div className="ml-8 mt-16 lg:ml-48">
        <p className="text-[#ebffff] mb-6"> 
          <IoFolderOpenOutline className="inline mr-1" /> Projects 
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mr-8 lg:mr-48">

          {/* First Project Card */}
          <div className="bg-[#] p-6 rounded-lg hover:scale-105 transform transition-all duration-500 hover:shadow-2xl hover:shadow-[#eebc86]/20 cursor-pointer">
          <h3 className="text-[#ebffff] text-xl font-semibold mb-8 sm:mb-4 flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="flex items-center mb-4"> 
                <img src="./EasyRepoLogo.png" alt="..." className="w-8 h-8" />
                <span className="cursor-text ml-4">Easy Repo</span>
            </div>
            <div className="flex gap-2">
                <span className="bg-[#000000]/10 text-white text-xs px-3 py-1 rounded-sm border border-[#6DB33F] flex items-center gap-1">
                <FaGithub className="inline text-white" /> Source
                </span>
                <span className="relative bg-gradient-to-r from-[#6DB33F] to-[#8BC34A] text-black text-xs px-4 py-2 rounded-lg border border-[#6DB33F]/50 hover:shadow-lg hover:shadow-[#6DB33F]/40 transition-all duration-300 hover:scale-105 group">
                Visit
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></span>
                </span>
            </div>
            </h3>
            <p className="text-gray-300 text-sm mb-4 cursor-text">
              A full-stack web application to simplify GitHub repository management. Features include secure OAuth2 login, repository grouping, renaming and deleting a repository, directly opening in VS code, viewing repos in tree structure and lines of code, and ultimately can be controlled by a CLI present in the website.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#6DB33F]/10 text-[#6DB33F] text-xs px-3 py-1 rounded-full cursor-text">SpringBoot</span>
              <span className="bg-[#61DAFB]/10 text-[#61DAFB] text-xs px-3 py-1 rounded-full cursor-text">React + Typescript</span>
              <span className="bg-[#00758F]/10 text-[#61DAFB] text-xs px-3 py-1 rounded-full cursor-text">MySQL</span>
            </div>
          </div>

          {/* Second Project Card */}
          <div className="bg-[#] p-6 rounded-lg hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-[#eebc86]/20 cursor-pointer">
            <h3 className="text-[#ebffff] text-xl font-semibold mb-8 sm:mb-4 flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="flex items-center mb-4"> 
                <img src="./EasyRepoLogo.png" alt="..." className="w-8 h-8" />
                <span className="cursor-text ml-4">Easy Repo</span>
            </div>
              <div className="flex gap-2">
              <span className="bg-[#000000]/10 text-white text-xs px-3 py-1 rounded-sm border border-[#6DB33F] flex items-center gap-1">
                  <FaGithub className="inline text-white" /> Source
                </span>
                <span className="relative bg-gradient-to-r from-[#6DB33F] to-[#8BC34A] text-black text-xs px-4 py-2 rounded-lg border border-[#6DB33F]/50 hover:shadow-lg hover:shadow-[#6DB33F]/40 transition-all duration-300 hover:scale-105 group">
                Read Me
             <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></span>
            </span>
              </div>
            </h3>
            <p className="text-gray-300 text-sm mb-4 cursor-text">
              A full-stack web application to simplify GitHub repository management. Features include secure OAuth2 login, repository grouping, renaming and deleting a repository, directly opening in VS code, viewing repos in tree structure and lines of code, and ultimately can be controlled by a CLI present in the website.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#6DB33F]/10 text-[#6DB33F] text-xs px-3 py-1 rounded-full cursor-text">SpringBoot</span>
              <span className="bg-[#61DAFB]/10 text-[#61DAFB] text-xs px-3 py-1 rounded-full cursor-text">React + Typescript</span>
              <span className="bg-[#00758F]/10 text-[#61DAFB] text-xs px-3 py-1 rounded-full cursor-text">MySQL</span>
            </div>
          </div>

          {/* Third Project Card */}
          <div className="bg-[#] p-6 rounded-lg hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-[#eebc86]/20 cursor-pointer">
            <h3 className="text-[#ebffff] text-xl font-semibold mb-8 sm:mb-4 flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="flex items-center mb-4"> 
                <img src="./EasyRepoLogo.png" alt="..." className="w-8 h-8" />
                <span className="cursor-text ml-4">Easy Repo</span>
            </div>
              <div className="flex gap-2">
              <span className="bg-[#000000]/10 text-white text-xs px-3 py-1 rounded-sm border border-[#6DB33F] flex items-center gap-1">
                  <FaGithub className="inline text-white" /> Source
                </span>
                <span className="relative bg-gradient-to-r from-[#6DB33F] to-[#8BC34A] text-black text-xs px-4 py-2 rounded-lg border border-[#6DB33F]/50 hover:shadow-lg hover:shadow-[#6DB33F]/40 transition-all duration-300 hover:scale-105 group">
  How to Setup
  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></span>
</span>
              </div>
            </h3>
            <p className="text-gray-300 text-sm mb-4 cursor-text">
              A utility application designed to automate the backup process of databases. It supports multiple database systems, provides scheduling options, and ensures data integrity with checksum verification.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#6DB33F]/10 text-[#6DB33F] text-xs px-3 py-1 rounded-full cursor-text">Java</span>
              <span className="bg-[#61DAFB]/10 text-[#61DAFB] text-xs px-3 py-1 rounded-full cursor-text">JDBC</span>
              <span className="bg-[#00758F]/10 text-[#61DAFB] text-xs px-3 py-1 rounded-full cursor-text">DBMS</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};