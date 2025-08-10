import Link from "next/link";

type DataType = {
    text : string;
    link: string;
}

function ProjectCards({text, link} : DataType) {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-purple-600 w-100 h-20 rounded-2xl p-[0.8px]">
            <div className="flex flex-col relative h-full w-full bg-black rounded-2xl p-2 items-center justify-center">
                <Link href={link} className="text-white text-center text-xl font-semibold font-sans">
                    {text}
                </Link>
            </div>
        </div>
    )
}

function Projects() {

    return (
        <div className="flex flex-col">
            <h1 className="text-blue-400 text-center text-3xl font-sans font-bold">Projects</h1>
            <p className="text-center mt-2">Click on each box for the detail !</p>
            <div className="flex flex-col items-center gap-10 mt-10">
                <ProjectCards text="Image Dimensionality Reduction Using Convolutional Autoencoder" link="/convolutional-autoencoder"/>
                <ProjectCards text="Thermal Imagery Object Detection Using YOLO" link="object-detection"/>
                <ProjectCards text="IEEE Fraud Transaction Detection" link="fraud-detection"/>
            </div>
        </div>
    )
}

export default Projects