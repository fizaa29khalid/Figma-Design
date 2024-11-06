export default function Home() {
  return (
    <div className="bg-[#252B42] text-white min-h-screen">
      <header className="bg-[#252B42]">
      <div className="container mx-auto flex justify-between items-center" style={{ height: '91px', width: '1322px', marginLeft: '59px' }}>
    <h1 className="text-xl font-bold">BrandName</h1>
    <nav className="flex items-center justify-between p-6">
        {/* <div className="text-xl font-bold">BrandName</div> */}
        <ul className="flex space-x-6">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Product</li>
          <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
          </nav>
          <div className="flex space-x-4 ">
            <button className="bg-[#252B42] text-white  py-2 px-4 rounded">Login</button>
            <button className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-500">JOIN US</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-16">
        <section className="text-center">
          <center><b><h4 className="text-blue-500 font-montserrat">Welcome</h4></b></center><br /><br />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Selling on the internet <br />like a pro</h1>
          <p className="text-white min-w-lg mb-8 font-bold mb-4">We know how large objects will act, but things on a <br /> 
            small scale just do not act that way.</p><br />
   <div className="flex justify-center space-x-4">
  <button className="bg-blue-500 text-white py-2 px-4 rounded">Get Quote Now</button>
  <button className="bg-gray-800 hover:bg-gray-800 text-blue-500  border border-blue-500 py-2 px-4 rounded">Learn More</button>
</div>
        </section>
        
<section className="flex justify-center space-x-6 px-6 py-10">

  <div className="bg-white text-black p-8 rounded shadow flex flex-col min-h-[300px]  w-[300px]">
    <h3 className="text-xl font-semibold mb-2">Training Courses</h3>
    <p className ="bg-white text-[#737373]">The gradual accumulation of information about atomic and small-scale behavior...</p>
  </div>
  <div className="bg-white text-black p-8 rounded shadow flex flex-col min-h-[300px]  w-[300px]">
    <h3 className="text-xl font-semibold mb-2">2,769 online courses</h3>
    <p className ="bg-white text-[#737373]">The gradual accumulation of information about atomic and small-scale behavior...</p>
  </div>
  <div className="bg-blue-500 text-white p-8 rounded shadow flex flex-col min-h-[300px]  w-[300px]">
    <h3 className="text-xl font-bold mb-4">Training Courses</h3>
    <p className ="bg-blue-500 text-white">The gradual accumulation of information about atomic and small-scale behavior...</p>
  </div>

</section>
      </main>

      <footer className="bg-[#252B42] text-white p-4">
        {/* Footer content */}
      </footer>
    </div>
    
  );
}