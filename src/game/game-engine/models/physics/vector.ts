export type direction = 1 | -1;

export interface VectorOptions{
    xVelocity?: number;
    yVelocity?: number;
    xDirection?: direction;
    yDirection?: direction;
    x?: number;
    y?: number;
}

export type VectorPosition = number[];

/**
 * basic class to help moving shapes
 */
export class Vector{
    private x: number = 0;
    private y: number = 0;
    /**
     * the x direction the shape is moving
     */
    private xDirection: direction = 1;
    /**
     * the y direction the shape is moving
     */
    private yDirection: direction = 1;
    /**
     * x velocity, currently just the number of pixels to move in the x direction
     */
    private xVelocity: number = 0;
    /**
     * y velocity, currently just the number of pixels to move in the y direction
     */
    private yVelocity: number = 0;

    get position(): VectorPosition{
        return [this.x, this.y];
    }

    constructor(x?: number, y?: number){
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }

    /**
     * take the provided current position and return an updated position
     * based off the current x and y direction and velocity
     * @param x
     * @param y
     * @returns
     */
    updatePosition(): VectorPosition{
        this.x += (this.xVelocity * this.xDirection);
        this.y += (this.yVelocity * this.yDirection)
        const position = [this.x, this.y];
        return position;
    }

    setVelocity(xVelocity?: number, yVelocity?: number){
        this.xVelocity = xVelocity && xVelocity !== 0 ? xVelocity : this.xVelocity;
        this.yVelocity = yVelocity && yVelocity !== 0 ? yVelocity : this.yVelocity;
    }

    setDirection(xDirection?: direction, yDirection?: direction){
        this.xDirection = xDirection ? xDirection : this.xDirection;
        this.yDirection = yDirection ? yDirection : this.yDirection;
    }

    setPosition(position: VectorPosition){
        this.x = position[0];
        this.y = position[1];
    }
}