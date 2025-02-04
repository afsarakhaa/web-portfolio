import Typewriter from 'typewriter-effect';
import { useState } from 'react';

export default function TypeWriterComp() {
    const [roles] = useState([
        "an IS student @ University of Indonesia",
        "a Web Dev & UX Design Enthusiast",
        "",
        "Also Professional Yapper 😎",
    ]);

    return (
        <Typewriter
            options={{
                strings: roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}