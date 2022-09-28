export type direction = 1 | -1;

export interface VectorOptions{
    xVelocity?: number;
    yVelocity?: number;
    xDirection?: direction;
    yDirection?: direction;
}

/**
 * basic class to help moving shapes
 */
export class Vector{
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

    /**
     * take the provided current position and return an updated position
     * based off the current x and y direction and velocity
     * @param x
     * @param y
     * @returns
     */
    updatePosition(x: number, y: number): number[]{
        return [x += (this.xVelocity * this.xDirection), y += (this.yVelocity * this.yDirection)];
    }

    setVelocity(xVelocity?: number, yVelocity?: number){
        this.xVelocity = xVelocity && xVelocity !== 0 ? xVelocity : this.xVelocity;
        this.yVelocity = yVelocity && yVelocity !== 0 ? yVelocity : this.yVelocity;
    }

    setDirection(xDirection?: direction, yDirection?: direction){
        this.xDirection = xDirection ? xDirection : this.xDirection;
        this.yDirection = yDirection ? yDirection : this.yDirection;
    }
}