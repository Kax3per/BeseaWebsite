import dashboard from "../assets/dashboardBesea.jpeg"
import { Gift, Layout, Diamond, Grid } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="w-full mt-20">
      {/* Hero */}
      <div className=" relative overflow-hidden">
        <div className="max-w-9xl  mx-auto px-6 py-20 text-center">
          <img
            src={dashboard}
            alt="Dashboard Preview"
            className="mx-auto h-200 shadow-xl/30 shadow-green-500 rounded-lg "
          />
        </div>
      </div>
        
    </section>
  );
}


    /* Features 
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        

        Feature grid
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          
    
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-6 rounded-2xl shadow-md mb-6">
              <Gift className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Free and Open-Source</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
          </div>

        
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-6 rounded-2xl shadow-md mb-6">
              <Layout className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">Multipurpose Template</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
          </div>

        
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-6 rounded-2xl shadow-md mb-6">
              <Diamond className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">High-quality Design</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
          </div>

        
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-6 rounded-2xl shadow-md mb-6">
              <Grid className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold">All Essential Elements</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
          </div>

        </div>
      </div>
    </div>
    */
