export const AboutSection = () => {
    return (
    <section id="about" className="py-50 px-4 relative">
        <div className="container mx-auto max-5-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About
                <span className="text-primary"> Me</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
                <p className="text-muted-foregorund">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, eum delectus odio, corrupti quidem ipsam sunt doloremque saepe, accusantium eligendi vero veniam quia ea quo dignissimos quasi! Delectus, dicta sapiente.</p>
                <p className="text-muted-foregorund">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quos eveniet earum fuga veritatis, non aliquam repellat suscipit sapiente quia explicabo similique quae, omnis illum consectetur error in, voluptatem ut.</p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="">Get in Touch</a>
                    <a href="">Download CV</a>
                </div>
            </div>
        </div>
    </section>
    )
}