import React from 'react'

function users() {
    return (
        <div className="flex flex-col m-10 gap-2 items-center">
            <h1 className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-transparent text-4xl font-sans font-bold text-center">
                Thermal Imagery Object Detection Using YOLO
            </h1>
            <p className="border-1 w-full lg:w-200 mb-8"></p>
            <div className="flex flex-col gap-10">
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        The Goal
                    </h2>
                    <p className="mt-2 text-justify">
                        This project aims to develop an object detection model which is able to detect specific objects in a restricted area.
                        The specific objects include cars, human, bicycle, and others. 
                    </p>
                </div>
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        Data Preprocessing
                    </h2>
                    <p className="mt-2 text-justify">
                        Data Preprocessing in this project is done by labeling each object in the image with labelimg framework. Then, all of the images
                        are structured into training and validation.
                    </p>
                </div>
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        Modeling
                    </h2>
                    <p className="mt-2 text-justify">
                        I used YOLOv8 and trained the model under NVIDIA RTX 3060 Ti. The training process has been done in 50 epochs
                        for approximately 48 minutes with the detail result below.
                    </p>
                    <img src="./images/object_detection/image_3.png" className="w-200 h-60 mt-5"/> 
                </div>
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        Inference
                    </h2>
                    <p className="mt-2 text-justify">
                        In the inference process, I used trained YOLO model to detect the validation set. I took the examples of 2 validation images
                        as shown below which represent how bounding boxes are generated to detect objects.
                    </p>
                    <div className="flex flex-row flex-wrap gap-5 mt-5 justify-center lg-1000px:justify-start max-w-200">
                        <img src="./images/object_detection/image_2.png" className="w-90"/> 
                        <img src="./images/object_detection/image_1.png" className="w-90"/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default users