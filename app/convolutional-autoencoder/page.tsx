import React from 'react'
import Image from 'next/image'

function users() {
    return (
        <div className="flex flex-col m-10 gap-2 items-center">
            <h1 className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-transparent text-4xl font-sans font-bold text-center max-w-200">
                Image Dimensionality Reduction Using Convolutional Autoencoder
            </h1>
            <p className="border-1 w-full lg:w-200 mb-8"></p>
            <div className="flex flex-col gap-10">
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        The Goal
                    </h2>
                    <p className="mt-2 text-justify">
                        This experiment has aim to reduce the dimension of an image by using convolutional autoencoder approach.
                    </p>
                </div>
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        Preprocessing
                    </h2>
                    <p className="mt-2 text-justify">
                        This experiment used crop image dataset which contains several variation of crops, those are jute, maize, rice, sugarcane, and wheat.
                        I loaded these images and converted them into tensor with the shape of 224 x 224 x 3 (RGB).
                    </p>
                </div>
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        Modeling
                    </h2>
                    <p className="mt-2 text-justify ">
                        In this section, I used custom convolutional layer for encoding part and convolutional transpose for decoding part.
                        The encoder part consist of 2 conv2d with 64 and 256 output channel respectively. Both of them has kernel size = 3, stride = 2,
                        and padding = 1. On the other part, decoder consists of 2 ConvTranspose2d with 256 and 64 output channels respectively. Each of them
                        also has kernel size = 4, stride = 2, and padding = 1. The detail of the whole architecture can be shown below.
                    </p>
                    <div className="place-items-center">
                        <Image src="./images/convolutional_autoencoder/image_1.png" alt="Full Convolutional AutoEncoder Network" width={600} height={80} className="mt-5"/> 
                    </div>
                    <p className="mt-5 text-justify">
                        After defining the model architecture, then I trained my model for 50 epochs. To evaluate the performance of this model,
                        I used Mean Absolute Error fro calculating reconstruction loss. Basically, the approach is pretty simple, I just calculated
                        the difference between prediction values and original image pixels. It can be happened because the output of decoder will be
                        a vector which has the same dimension as the input image shape. After 50 epochs, the reconstruction loss value decreased significantly
                        as shown on the image below.
                    </p>
                    <div className="place-items-center">
                        <Image src="./images/convolutional_autoencoder/image_2.png" alt="Reconstruction Loss" width={500} height={80} className="mt-5"/> 
                    </div>
                </div>
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        Inference
                    </h2>
                    <p className="mt-2 text-justify">
                        In the inference process, I tested my trained model with testing dataset. The goal is to reduce the dimension
                        of the input image using encoder part, then re-construct the input image using decoder part. The inference result can
                        be defined to be successful if the output of encoder is very similar with the input image. I tested this network
                        with 3 different images as shown below
                    </p>
                    <div className="flex flex-row flex-wrap gap-5 mt-5 justify-center lg-1000px:justify-start max-w-200">
                        <Image src="./images/convolutional_autoencoder/image_3.png" alt="Inference image result 1" width={500} height={80}/> 
                        <Image src="./images/convolutional_autoencoder/image_4.png" alt="Inference image result 2" width={500} height={80}/>
                        <Image src="./images/convolutional_autoencoder/image_5.png" alt="Inference image result 3" width={500} height={80}/>
                    </div>
                    <p className="mt-5 text-justify">
                        As we can see on the above examples, the output images from decoder part are very similar with the input images.
                        This means that our encoder part was successfully extract relevant information from the input image with low reconstruction loss.
                        We can then use this network to reduce the dimension of our image using encoder part which is very useful to either storing image
                        information as a vector or etc.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default users