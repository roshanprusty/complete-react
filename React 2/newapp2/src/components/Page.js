import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
function Page() {
    return (<>
    <Navbar />
    <h2>Reasons Why I'm excited to learn React</h2>
        <ol>
            <li>It's a popular library, so I'll be
                able to fit in with the cool kids!</li>
            <li>I'm more likely to get a job as a developer
                if I know React</li>
        </ol>
        <Footer />
    </>

    )
}
export default Page;