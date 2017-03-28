declare namespace engine {
    class Point {
        x: number;
        y: number;
        constructor(x: number, y: number);
    }
    class Rectangle {
        x: number;
        y: number;
        width: number;
        height: number;
        isPointInRectangle(point: Point): boolean;
    }
    function pointAppendMatrix(point: Point, m: Matrix): Point;
    /**
     * 使用伴随矩阵法求逆矩阵
     * http://wenku.baidu.com/view/b0a9fed8ce2f0066f53322a9
     */
    function invertMatrix(m: Matrix): Matrix;
    function matrixAppendMatrix(m1: Matrix, m2: Matrix): Matrix;
    class Matrix {
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;
        toString(): string;
        updateFromDisplayObject(x: number, y: number, scaleX: number, scaleY: number, rotation: number): void;
    }
}
declare namespace engine {
    type Ticker_Listener_Type = (deltaTime: number) => void;
    class Ticker {
        private static instance;
        static getInstance(): Ticker;
        listeners: Ticker_Listener_Type[];
        register(listener: Ticker_Listener_Type): void;
        unregister(listener: Ticker_Listener_Type): void;
        notify(deltaTime: number): void;
    }
}
declare namespace engine {
    interface Drawable {
        update(): any;
    }
    abstract class DisplayObject {
        type: string;
        x: number;
        y: number;
        scaleX: number;
        scaleY: number;
        rotation: number;
        alpha: number;
        globalAlpha: number;
        localMatrix: Matrix;
        globalMatrix: Matrix;
        parent: DisplayObjectContainer;
        touchEnabled: boolean;
        constructor(type: string);
        update(): void;
        abstract hitTest(x: number, y: number): DisplayObject;
    }
    class Bitmap extends DisplayObject {
        image: HTMLImageElement;
        constructor();
        hitTest(x: number, y: number): this;
    }
    class TextField extends DisplayObject {
        text: string;
        constructor();
        hitTest(x: number, y: number): this;
    }
    class DisplayObjectContainer extends DisplayObject {
        constructor();
        children: DisplayObject[];
        update(): void;
        addChild(child: DisplayObject): void;
        hitTest(x: any, y: any): DisplayObject;
    }
}
declare namespace engine {
    let run: (canvas: HTMLCanvasElement) => DisplayObjectContainer;
}
