export default function About() {
    return (
        <section className="min-h-screen">
            <div className="max-w-4xl mx-auto p-8 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-extrabold text-green-600 mb-4 text-center">
                    About Me
                </h1>
                <p className="text-lg leading-8 text-center">
                    Hi! I’m <span className="text-green-600 font-bold">Afsar Rakha Farrasandi</span>, an 
                    Information Systems student at the University of Indonesia who thrives at 
                    the intersection of <span className="text-gray-700 font-semibold">technology</span>, 
                    <span className="text-gray-700 font-semibold">design</span>, and 
                    <span className="text-gray-700 font-semibold"> user experiences</span>.
                </p>
            </div>
        </section>
    );
}
