import React, { useState, useRef } from 'react';

import HlsPlayer from './components/HlsPlayer';

function Player() {
    const playerRef = useRef(null);
    const inputRef = useRef(null);
    const [hlsUrl, setHlsUrl] = useState(
        'http://lcss-cdn-01.duckdns.org/1/index.m3u8'
    );
    const [HLSInstance, setHLSInstance] = useState();
    const [displayHLSPrperties, setDisplayHLSPrperties] = useState(false)
    const [selectedQuality, setSelectedQuality] = useState();

    function _handleEnter(e) {
        if (e.keyCode === 13) {
            setHlsUrl(inputRef?.current?.value ?? '');
        }
    }

    function _handleHLSInstanceClick() {
        setDisplayHLSPrperties(!displayHLSPrperties)
    }

    function getHLSInstance(hlsInstance) {
        setHLSInstance(hlsInstance);
    }

    function handleQuality(e) {
        setSelectedQuality(Number(e.target.value));
        if(HLSInstance) HLSInstance.currentLevel = Number(e.target.value);
    }

    function setUpPlayer() {
        playerRef?.current?.setAttribute('controls', 'true');
    }

    setUpPlayer();
    return (
        <div>
            <div
                style={{
                    margin: '0 0 20px',
                }}
            >
                <label
                    style={{
                        display: 'block',
                        marginBottom: 10,
                    }}
                    htmlFor="url-input"
                >
                    hls url :{' '}
                </label>
                <input
                    ref={inputRef}
                    id="url-input"
                    type="text"
                    defaultValue={hlsUrl}
                    onKeyUp={_handleEnter}
                    style={{
                        width: '100%',
                        height: '30px',
                        lineHeight: '30px',
                        fontSize: '16px',
                        color: '#333',
                    }}
                />
            </div>


            <HlsPlayer
                loop={true}
                width="100%"
                height="auto"
                autoPlay
                playerRef={playerRef}
                src={hlsUrl}
                getHLSInstance={getHLSInstance}
            />


            <br />

            <button
                style={{
                    padding: '5px 10px',
                }}
                onClick={_handleHLSInstanceClick}
            >
                Get HLS Instance
            </button>

            {displayHLSPrperties && (
                <div
                    style={{
                        padding: "5px 10px",
                        border: "1px solid black",
                        margin: "15px 15px",
                    }}
                >
                    <h3>HLS Details</h3>
                    <p>Total Levels: {HLSInstance?.levels?.length}</p>
                    <div>
                        <p>Select Quality</p>
                        <select value={selectedQuality} defaultValue={`${HLSInstance?.currentLevel}`} onChange={handleQuality}>
                            {HLSInstance?.levels?.map((level, index) => {
                                return <option value={`${index}`}>{level.bitrate}</option>
                            })}
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Player;
