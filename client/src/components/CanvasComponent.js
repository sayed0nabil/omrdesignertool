import React, { Component } from 'react'
class CanvasComponent extends Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(200, 200, 10, 0, 2 * Math.PI);
        ctx.lineWidth=1;
        ctx.strokeStyle="blue"
        ctx.stroke();
    }
    render() {
        return (
            <canvas 
            ref="canvas"
            width={300} 
            height={300} />
        );
    }
}
export default CanvasComponent;