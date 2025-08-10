import React from 'react'

function users() {
    return (
        <div className="flex flex-col m-10 gap-2 place-items-center">
            <h1 className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-transparent text-4xl font-sans font-bold text-center max-w-200">
                IEEE Credit Card Fraud Detection
            </h1>
            <p className="border-1 w-full lg:w-200 mb-8"></p>
            <div className="flex flex-col gap-10 place-items-center">
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        The Goal
                    </h2>
                    <p className="mt-2 text-justify">
                        This experiment has aim to detect fraud in credit card transactions. The challenging part of this project is to detect the fraud
                        with small amount of fraud's sample data among many normal transactions.
                    </p>
                </div>
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        Preprocessing
                    </h2>
                    <p className="mt-2 text-justify">
                        This experiment used credit card transaction data from Vesta Corporation. The total number of data in this dataset is more than 500 thousand
                        rows with more than 400 hundreds features. First, I removed feature which missed more than 80% of its data because I think this feature can't be
                        filled with any methods since it already loss their identity. Then, I selected other features by checking significance level (P-Value) of those features with
                        the target feature. This process has been done with ANOVA (for numerical independent feature and binary target feature) and Chi-Square (for categorical
                        independent feature and binary target feature). After that, I proceed missing values by replacing them with the relationship between specific independent feature
                        with target feature. I also filled this missing value problem by just inserting with mean or median if there is no correlation to other features.
                    </p>
                </div>
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        Modeling
                    </h2>
                    <p className="mt-2 text-justify">
                        For modeling section, I used several different machine learning models which are Random Forest Classifier, Decision Tree Classifier,
                        Logistic Regression, and XGB Classifier. The detail result on each model is shown below.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <img src="./images/fraud_detection/image_1.png" className="w-90 h-65 mt-5"/> 
                        <img src="./images/fraud_detection/image_2.png" className="w-90 h-65 mt-5"/> 
                        <img src="./images/fraud_detection/image_3.png" className="w-90 h-65 mt-5"/> 
                        <img src="./images/fraud_detection/image_4.png" className="w-90 h-65 mt-5"/> 
                    </div>
                    <p className="mt-2 text-justify">
                        Based on training result above, we can see Random Forest Classifier showed good score than others, followed by XGBoost Classifier.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default users