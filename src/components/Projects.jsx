import { IoFolderOpenOutline } from "react-icons/io5";

export const Projects = () => {
  return (
    <>
      <div className="ml-8 mt-16 lg:ml-48">
        <p className="text-[#ebffff] mb-6"> 
          <IoFolderOpenOutline className="inline mr-1" /> Projects 
        </p>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mr-8 lg:mr-48">

          
          <div className="bg-[#] p-6 rounded-lg hover:scale-105 transform transition-all duration-500 hover:shadow-2xl hover:shadow-[#eebc86]/20 cursor-pointer">
            <h3 className="text-[#ebffff] text-xl font-semibold mb-2">
            <span className="mr-36">Easy Repo</span>
            <span className="bg-[#6DB33F]/10 text-[#6DB33F] text-xs px-3 py-1 rounded-full">Code</span>
            <span className="bg-[#6DB33F]/10 text-[#6DB33F] text-xs px-3 py-1 rounded-full">Live Demo</span>
            </h3>
            <p className="text-gray-300 text-sm mb-4">
            A full-stack web application to simplify GitHub repository management. Features include secure OAuth2 login, repository grouping, renaming and deleting a repository , directly opening in VS code, viewing repos in tree structure and lines of code and ultimately can be 
            controlled by a CLI present in the website.

            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#6DB33F]/10 text-[#6DB33F] text-xs px-3 py-1 rounded-full">SpringBoot</span>
              <span className="bg-[#61DAFB]/10 text-[#61DAFB] text-xs px-3 py-1 rounded-full">React + Typescript</span>
              <span className="bg-[#00758F]/10 text-[#61DAFB] text-xs px-3 py-1 rounded-full">MySQL</span>
            </div>
          </div>

          
          <div className="bg-[#] p-6 rounded-lg hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-[#eebc86]/20 cursor-pointer">
            <h3 className="text-[#] text-xl font-semibold mb-2">AI Dating bot</h3>
            <p className="text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis perferendis dicta, accusantium laboriosam obcaecati. Modi et ad, laudantium nam asperiores dolorem quam tenetur adipisci id officiis. Ipsum, magni doloremque.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#00ffff]/10 text-[#00ffff] text-xs px-3 py-1 rounded-full">language</span>
              <span className="bg-[#00ffff]/10 text-[#00ffff] text-xs px-3 py-1 rounded-full">language</span>
              <span className="bg-[#00ffff]/10 text-[#00ffff] text-xs px-3 py-1 rounded-full">language</span>
            </div>
          </div>


          <div className="bg-[#] p-6 rounded-lg hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-[#eebc86]/20 cursor-pointer">
            <h3 className="text-[#] text-xl font-semibold mb-2">Database Backup Utility</h3>
            <p className="text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum deleniti velit delectus, quis debitis nihil minus animi quo quisquam culpa deserunt commodi perspiciatis voluptatum nostrum, sapiente labore laudantium, praesentium laborum!
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#00ffff]/10 text-[#00ffff] text-xs px-3 py-1 rounded-full">language</span>
              <span className="bg-[#00ffff]/10 text-[#00ffff] text-xs px-3 py-1 rounded-full">language</span>
              <span className="bg-[#00ffff]/10 text-[#00ffff] text-xs px-3 py-1 rounded-full">language</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};