import React, { useState } from 'react';
import Navbar from "~/components/Navbar";

const Upload: () => React.JSX.Element = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState('');
    return (
        <main className="bg-[url('/images/bg-main.svg')] bg-cover">

            <Navbar />

            <section className="main-section">
                <div className="page-heading">
                    <h1>Smart feedback for Your dream job</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src="/images/resume-scan.gif" className="w-full"/>
                        </>
                        ): (
                            <h2>Drop your resume for  an ATS score and improvement tips</h2>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Upload;
