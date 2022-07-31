import React, { useState } from 'react';

import './App.css';

import Board from './components/Board';

const blocksize = 32

const width = 10;
const height = 40;

function App() {

    const [blocks, setBlocks] = useState(Array.from({ length: height }, () => Array(width).fill('')));

    const setBlock = (x: number, y: number, type: string) => {
        if (x < width && y < height) {
            let tempBlocks = JSON.parse(JSON.stringify(blocks));
            tempBlocks[y][x] = type;

            setBlocks(tempBlocks);
        }
    }

    const [drawing, setDrawing] = useState(0); // 0 for none, 1 for drawing, 2 for erasing

    const handleMouseEvent = (e: React.MouseEvent) => {
        let rect = e.currentTarget.getBoundingClientRect();
        let clientX = e.clientX - rect.left;
        let clientY = e.clientY - rect.top;

        let boardX = Math.floor(clientX / blocksize);
        let boardY = 19 - Math.floor(clientY / blocksize);

        switch (e.type) {
            case 'mousedown':
                const isDrawing = blocks[boardY][boardX] ? 2 : 1;

                setDrawing(isDrawing);
                setBlock(boardX, boardY, isDrawing === 1 ? 'G' : '');
                break;
            case 'mousemove':
                if (drawing) { // i.e. not 0
                    setBlock(boardX, boardY, drawing === 1 ? 'G' : '');
                }
                break;
            case 'mouseup':
            case 'mouseleave':
                setDrawing(0);
                break;
        }
    }

    return (
        <div className='main-content'>
            <div id='settings' className="section">

                <h1 className="section-title">SETTINGS:</h1>

                <table id='tuning-settings'>
                    <th><h2>TUNING:</h2></th>
                    <tr>
                        <td><p>DAS:</p></td>
                        <td><input className='tuning-box' type='text' /></td>
                    </tr>
                    <tr>
                        <td><p>ARR:</p></td>
                        <td><input className='tuning-box' type='text' /></td>
                    </tr>
                    <tr>
                        <td><p>SD:</p></td>
                        <td><input className='tuning-box' type='text' /></td>
                    </tr>
                </table>

                <div id='settings-buttons'>
                    <button className='button'>SAVE</button>
                    <button className='button'>DEFAULT</button>
                </div>

                <h2>CONTROLS:</h2>
                <div id='controls-settings'>
                    <p>MOVE LEFT:</p>
                    <button className="controls-button">---</button>

                    <p>MOVE RIGHT:</p>
                    <button className="controls-button">---</button>

                    <p>ROTATE LEFT:</p>
                    <button className="controls-button">---</button>

                    <p>ROTATE RIGHT:</p>
                    <button className="controls-button">---</button>

                    <p>ROTATE 180:</p>
                    <button className="controls-button">---</button>

                    <p>HOLD PIECE:</p>
                    <button className="controls-button">---</button>

                    <p>SOFT DROP:</p>
                    <button className="controls-button">---</button>

                    <p>HARD DROP:</p>
                    <button className="controls-button">---</button>

                    <p>RESET BOARD:</p>
                    <button className="controls-button">---</button>
                </div>

            </div>

            <div className="section">

                <div id="traintris-game" tabIndex={1}>

                    <div id="hold-container">
                        <canvas id="hold" className='traintris-canvas' width="128" height="128"></canvas>
                    </div>

                    <Board
                        blocks={blocks}
                        handleMouseEvent={handleMouseEvent}
                    />

                    <div id="queue-container">
                        <canvas id="queue" className='traintris-canvas' width="128" height="640"></canvas>
                    </div>

                </div>

                <div id='undo-redo'>

                    <button className='small-button' title='Ctrl+Z'>UNDO</button>
                    <button className='small-button' title='Ctrl+Y'>REDO</button>

                </div>

            </div>

            <div id="pc-finder" className="section">
                <h1 className="section-title" hidden>PC FINDER</h1>

                <button className="button" id="pc-start-button">FIND PC</button>

                <canvas id='pc-canvas' width="320" height="640"></canvas>

                <div id="pc-buttons">
                    <button className="button">PREV</button>
                    <button className="button">NEXT</button>
                </div>

                <p id='pc-result'></p>
                <p id='pc-progress' hidden></p>

                <script src="traintris.js"></script>
            </div>

        </div>
    );
}

export default App;
