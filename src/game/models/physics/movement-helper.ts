/**
 * basic class to help moving shapes
 */
export class MovementHelper{
    /**
     * the x direction the shape is moving
     */
    xDirection: number = 1;
    /**
     * the y direction the shape is moving
     */
    yDirection: number = 1;
    /**
     * x velocity, currently just the number of pixels to move in the x direction
     */
    xVelocity: number = 0;
    /**
     * y velocity, currently just the number of pixels to move in the y direction
     */
    yVelocity: number = 0;

    /**
     * take the provided current position and return an updated position
     * based off the current x and y direction and velocity
     * @param x
     * @param y
     * @returns
     */
    updatePosition(x: number, y: number): number[]{
        return [];
    }
}