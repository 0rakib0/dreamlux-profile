import React from 'react'

function DigitalDisplay() {
    return (
        <div className="mt-12">
            <div className="w-full max-w-6xl mx-auto">
                <div className="aspect-video">
                    <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/wy_EPJlTOCA?si=M1F-O1QemheTyqR9"
                        title="Digital Display"
                        frameBorder="0"
                        allow="autoplay; fullscreen; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default DigitalDisplay