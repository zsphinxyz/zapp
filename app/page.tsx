'use client'

export default function Home() {
  return (
    <section className="px-4 md:px-6">
      <h1 className="font-geistSans font-bold text-3xl pt-3 mb-3">ZApps</h1>
      <p className="font-geistSans text-lg mb-4">
        Welcome to ZApps! Here, I work on various React challenges and random app ideas. 
        Feel free to explore and see what I've been up to.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="font-geistSans font-semibold text-2xl mb-2">React Challenges</h2>
          <p className="font-geistSans text-base">
            Check out some of the React challenges I've completed for this project. 
            These challenges are all about testing and leveling up my dev skills.
          </p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="font-geistSans font-semibold text-2xl mb-2">Random App Ideas</h2>
          <p className="font-geistSans text-base">
            Dive into a bunch of random app ideas I've been playing around with. 
            These projects range from simple tools to more complex apps.
          </p>
        </div>
      </div>
    </section>
  );
}
