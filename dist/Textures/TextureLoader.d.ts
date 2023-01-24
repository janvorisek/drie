import { inject, ref } from "vue";
import { Texture, TextureLoader, Material, type Wrapping } from "three";
import { type Vector2Like } from "../types";
export interface Props {
    /**
     * How much a single repetition of the texture is offset from the beginning, in each direction U and V.
     * Typical range is `0.0` to `1.0`.
     */
    offset?: Vector2Like;
    /**
     * How many times the texture is repeated across the surface, in each direction U and V.
     * If repeat is set greater than 1 in either direction, the corresponding Wrap parameter should also be set to `THREE.RepeatWrapping` or `THREE.MirroredRepeatWrapping` to achieve the desired tiling effect.
     * Setting different repeat values for textures is restricted in the same way like `offset`.
     */
    repeat?: Vector2Like;
    /**
     * How much the texture is rotated around the center point, in radians.
     * Positive values are counter-clockwise.
     */
    rotation?: number;
    /**
     *  The path or URL to the texture file. This can also be a Data URI.
     */
    url: string;
    /**
     * This defines how the texture is wrapped horizontally and corresponds to U in UV mapping.
     * The default is `THREE.ClampToEdgeWrapping`, where the edge is clamped to the outer edge texels.
     * The other two choices are `THREE.RepeatWrapping` and `THREE.MirroredRepeatWrapping`.
     * See the [texture constants](https://threejs.org/docs/?q=texture#api/en/constants/Textures) page for details.
     */
    wrapS?: Wrapping;
    /**
     * This defines how the texture is wrapped vertically and corresponds to V in UV mapping.
     * The default is `THREE.ClampToEdgeWrapping`, where the edge is clamped to the outer edge texels.
     * The other two choices are `THREE.RepeatWrapping` and `THREE.MirroredRepeatWrapping`.
     * See the [texture constants](https://threejs.org/docs/?q=texture#api/en/constants/Textures) page for details.
     */
    wrapT?: Wrapping;
}
declare const _sfc_main: import("vue").DefineComponent<{
    offset: {
        type: null;
        required: false;
        default: () => number[];
    };
    repeat: {
        type: null;
        required: false;
        default: () => number[];
    };
    rotation: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    url: {
        type: StringConstructor;
        required: true;
    };
    wrapS: {
        type: null;
        required: false;
        default: Wrapping;
    };
    wrapT: {
        type: null;
        required: false;
        default: Wrapping;
    };
}, {
    props: any;
    material: Material;
    three: import("vue").Ref<{
        id: number;
        uuid: string;
        name: string;
        sourceFile: string;
        source: {
            data: any;
            needsUpdate: boolean;
            uuid: string;
            version: number;
            toJSON: (meta: any) => any;
            readonly isTexture: true;
        };
        image: any;
        mipmaps: any[];
        mapping: import("three").Mapping;
        wrapS: Wrapping;
        wrapT: Wrapping;
        magFilter: import("three").TextureFilter;
        minFilter: import("three").TextureFilter;
        anisotropy: number;
        format: import("three").PixelFormat;
        internalFormat: import("three").PixelFormatGPU | null;
        type: import("three").TextureDataType;
        matrix: {
            elements: number[];
            set: (n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number) => import("three").Matrix3;
            identity: () => import("three").Matrix3;
            clone: () => import("three").Matrix3;
            copy: (m: import("three").Matrix3) => import("three").Matrix3;
            extractBasis: (xAxis: import("three").Vector3, yAxis: import("three").Vector3, zAxis: import("three").Vector3) => import("three").Matrix3;
            setFromMatrix4: (m: import("three").Matrix4) => import("three").Matrix3;
            multiplyScalar: (s: number) => import("three").Matrix3;
            determinant: () => number;
            invert: () => import("three").Matrix3;
            transpose: () => import("three").Matrix3;
            getNormalMatrix: (matrix4: import("three").Matrix4) => import("three").Matrix3;
            transposeIntoArray: (r: number[]) => import("three").Matrix3;
            setUvTransform: (tx: number, ty: number, sx: number, sy: number, rotation: number, cx: number, cy: number) => import("three").Matrix3;
            scale: (sx: number, sy: number) => import("three").Matrix3;
            makeTranslation: {
                (x: number, y: number): import("three").Matrix3;
                (x: number, y: number): import("three").Matrix3;
            };
            makeRotation: {
                (theta: number): import("three").Matrix3;
                (theta: number): import("three").Matrix3;
            };
            makeScale: {
                (x: number, y: number): import("three").Matrix3;
                (x: number, y: number): import("three").Matrix3;
            };
            rotate: (theta: number) => import("three").Matrix3;
            translate: (tx: number, ty: number) => import("three").Matrix3;
            equals: (matrix: import("three").Matrix3) => boolean;
            fromArray: (array: number[] | ArrayLike<number>, offset?: number | undefined) => import("three").Matrix3;
            toArray: {
                (array?: number[] | undefined, offset?: number | undefined): number[];
                (array?: import("three").Matrix3Tuple | undefined, offset?: 0 | undefined): import("three").Matrix3Tuple;
                (array?: ArrayLike<number> | undefined, offset?: number | undefined): ArrayLike<number>;
            };
            multiply: (m: import("three").Matrix3) => import("three").Matrix3;
            premultiply: (m: import("three").Matrix3) => import("three").Matrix3;
            multiplyMatrices: (a: import("three").Matrix3, b: import("three").Matrix3) => import("three").Matrix3;
            multiplyVector3: (vector: import("three").Vector3) => any;
            multiplyVector3Array: (a: any) => any;
            getInverse: {
                (matrix: import("three").Matrix4, throwOnDegenerate?: boolean | undefined): import("three").Matrix3;
                (matrix: import("three").Matrix): import("three").Matrix;
            };
            flattenToArrayOffset: (array: number[], offset: number) => number[];
        };
        matrixAutoUpdate: boolean;
        offset: {
            x: number;
            y: number;
            width: number;
            height: number;
            readonly isVector2: true;
            set: (x: number, y: number) => import("three").Vector2;
            setScalar: (scalar: number) => import("three").Vector2;
            setX: (x: number) => import("three").Vector2;
            setY: (y: number) => import("three").Vector2;
            setComponent: (index: number, value: number) => import("three").Vector2;
            getComponent: (index: number) => number;
            clone: () => import("three").Vector2;
            copy: (v: import("three").Vector2) => import("three").Vector2;
            add: (v: import("three").Vector2, w?: import("three").Vector2 | undefined) => import("three").Vector2;
            addScalar: (s: number) => import("three").Vector2;
            addVectors: (a: import("three").Vector2, b: import("three").Vector2) => import("three").Vector2;
            addScaledVector: (v: import("three").Vector2, s: number) => import("three").Vector2;
            sub: (v: import("three").Vector2) => import("three").Vector2;
            subScalar: (s: number) => import("three").Vector2;
            subVectors: (a: import("three").Vector2, b: import("three").Vector2) => import("three").Vector2;
            multiply: (v: import("three").Vector2) => import("three").Vector2;
            multiplyScalar: (scalar: number) => import("three").Vector2;
            divide: (v: import("three").Vector2) => import("three").Vector2;
            divideScalar: (s: number) => import("three").Vector2;
            applyMatrix3: (m: import("three").Matrix3) => import("three").Vector2;
            min: (v: import("three").Vector2) => import("three").Vector2;
            max: (v: import("three").Vector2) => import("three").Vector2;
            clamp: (min: import("three").Vector2, max: import("three").Vector2) => import("three").Vector2;
            clampScalar: (min: number, max: number) => import("three").Vector2;
            clampLength: (min: number, max: number) => import("three").Vector2;
            floor: () => import("three").Vector2;
            ceil: () => import("three").Vector2;
            round: () => import("three").Vector2;
            roundToZero: () => import("three").Vector2;
            negate: () => import("three").Vector2;
            dot: (v: import("three").Vector2) => number;
            cross: (v: import("three").Vector2) => number;
            lengthSq: () => number;
            length: () => number;
            lengthManhattan: () => number;
            manhattanLength: () => number;
            normalize: () => import("three").Vector2;
            angle: () => number;
            distanceTo: (v: import("three").Vector2) => number;
            distanceToSquared: (v: import("three").Vector2) => number;
            distanceToManhattan: (v: import("three").Vector2) => number;
            manhattanDistanceTo: (v: import("three").Vector2) => number;
            setLength: (length: number) => import("three").Vector2;
            lerp: (v: import("three").Vector2, alpha: number) => import("three").Vector2;
            lerpVectors: (v1: import("three").Vector2, v2: import("three").Vector2, alpha: number) => import("three").Vector2;
            equals: (v: import("three").Vector2) => boolean;
            fromArray: (array: number[] | ArrayLike<number>, offset?: number | undefined) => import("three").Vector2;
            toArray: {
                (array?: number[] | undefined, offset?: number | undefined): number[];
                (array?: import("three").Vector2Tuple | undefined, offset?: 0 | undefined): import("three").Vector2Tuple;
                (array: ArrayLike<number>, offset?: number | undefined): ArrayLike<number>;
            };
            fromBufferAttribute: (attribute: import("three").BufferAttribute, index: number) => import("three").Vector2;
            rotateAround: (center: import("three").Vector2, angle: number) => import("three").Vector2;
            random: () => import("three").Vector2;
        };
        repeat: {
            x: number;
            y: number;
            width: number;
            height: number;
            readonly isVector2: true;
            set: (x: number, y: number) => import("three").Vector2;
            setScalar: (scalar: number) => import("three").Vector2;
            setX: (x: number) => import("three").Vector2;
            setY: (y: number) => import("three").Vector2;
            setComponent: (index: number, value: number) => import("three").Vector2;
            getComponent: (index: number) => number;
            clone: () => import("three").Vector2;
            copy: (v: import("three").Vector2) => import("three").Vector2;
            add: (v: import("three").Vector2, w?: import("three").Vector2 | undefined) => import("three").Vector2;
            addScalar: (s: number) => import("three").Vector2;
            addVectors: (a: import("three").Vector2, b: import("three").Vector2) => import("three").Vector2;
            addScaledVector: (v: import("three").Vector2, s: number) => import("three").Vector2;
            sub: (v: import("three").Vector2) => import("three").Vector2;
            subScalar: (s: number) => import("three").Vector2;
            subVectors: (a: import("three").Vector2, b: import("three").Vector2) => import("three").Vector2;
            multiply: (v: import("three").Vector2) => import("three").Vector2;
            multiplyScalar: (scalar: number) => import("three").Vector2;
            divide: (v: import("three").Vector2) => import("three").Vector2;
            divideScalar: (s: number) => import("three").Vector2;
            applyMatrix3: (m: import("three").Matrix3) => import("three").Vector2;
            min: (v: import("three").Vector2) => import("three").Vector2;
            max: (v: import("three").Vector2) => import("three").Vector2;
            clamp: (min: import("three").Vector2, max: import("three").Vector2) => import("three").Vector2;
            clampScalar: (min: number, max: number) => import("three").Vector2;
            clampLength: (min: number, max: number) => import("three").Vector2;
            floor: () => import("three").Vector2;
            ceil: () => import("three").Vector2;
            round: () => import("three").Vector2;
            roundToZero: () => import("three").Vector2;
            negate: () => import("three").Vector2;
            dot: (v: import("three").Vector2) => number;
            cross: (v: import("three").Vector2) => number;
            lengthSq: () => number;
            length: () => number;
            lengthManhattan: () => number;
            manhattanLength: () => number;
            normalize: () => import("three").Vector2;
            angle: () => number;
            distanceTo: (v: import("three").Vector2) => number;
            distanceToSquared: (v: import("three").Vector2) => number;
            distanceToManhattan: (v: import("three").Vector2) => number;
            manhattanDistanceTo: (v: import("three").Vector2) => number;
            setLength: (length: number) => import("three").Vector2;
            lerp: (v: import("three").Vector2, alpha: number) => import("three").Vector2;
            lerpVectors: (v1: import("three").Vector2, v2: import("three").Vector2, alpha: number) => import("three").Vector2;
            equals: (v: import("three").Vector2) => boolean;
            fromArray: (array: number[] | ArrayLike<number>, offset?: number | undefined) => import("three").Vector2;
            toArray: {
                (array?: number[] | undefined, offset?: number | undefined): number[];
                (array?: import("three").Vector2Tuple | undefined, offset?: 0 | undefined): import("three").Vector2Tuple;
                (array: ArrayLike<number>, offset?: number | undefined): ArrayLike<number>;
            };
            fromBufferAttribute: (attribute: import("three").BufferAttribute, index: number) => import("three").Vector2;
            rotateAround: (center: import("three").Vector2, angle: number) => import("three").Vector2;
            random: () => import("three").Vector2;
        };
        center: {
            x: number;
            y: number;
            width: number;
            height: number;
            readonly isVector2: true;
            set: (x: number, y: number) => import("three").Vector2;
            setScalar: (scalar: number) => import("three").Vector2;
            setX: (x: number) => import("three").Vector2;
            setY: (y: number) => import("three").Vector2;
            setComponent: (index: number, value: number) => import("three").Vector2;
            getComponent: (index: number) => number;
            clone: () => import("three").Vector2;
            copy: (v: import("three").Vector2) => import("three").Vector2;
            add: (v: import("three").Vector2, w?: import("three").Vector2 | undefined) => import("three").Vector2;
            addScalar: (s: number) => import("three").Vector2;
            addVectors: (a: import("three").Vector2, b: import("three").Vector2) => import("three").Vector2;
            addScaledVector: (v: import("three").Vector2, s: number) => import("three").Vector2;
            sub: (v: import("three").Vector2) => import("three").Vector2;
            subScalar: (s: number) => import("three").Vector2;
            subVectors: (a: import("three").Vector2, b: import("three").Vector2) => import("three").Vector2;
            multiply: (v: import("three").Vector2) => import("three").Vector2;
            multiplyScalar: (scalar: number) => import("three").Vector2;
            divide: (v: import("three").Vector2) => import("three").Vector2;
            divideScalar: (s: number) => import("three").Vector2;
            applyMatrix3: (m: import("three").Matrix3) => import("three").Vector2;
            min: (v: import("three").Vector2) => import("three").Vector2;
            max: (v: import("three").Vector2) => import("three").Vector2;
            clamp: (min: import("three").Vector2, max: import("three").Vector2) => import("three").Vector2;
            clampScalar: (min: number, max: number) => import("three").Vector2;
            clampLength: (min: number, max: number) => import("three").Vector2;
            floor: () => import("three").Vector2;
            ceil: () => import("three").Vector2;
            round: () => import("three").Vector2;
            roundToZero: () => import("three").Vector2;
            negate: () => import("three").Vector2;
            dot: (v: import("three").Vector2) => number;
            cross: (v: import("three").Vector2) => number;
            lengthSq: () => number;
            length: () => number;
            lengthManhattan: () => number;
            manhattanLength: () => number;
            normalize: () => import("three").Vector2;
            angle: () => number;
            distanceTo: (v: import("three").Vector2) => number;
            distanceToSquared: (v: import("three").Vector2) => number;
            distanceToManhattan: (v: import("three").Vector2) => number;
            manhattanDistanceTo: (v: import("three").Vector2) => number;
            setLength: (length: number) => import("three").Vector2;
            lerp: (v: import("three").Vector2, alpha: number) => import("three").Vector2;
            lerpVectors: (v1: import("three").Vector2, v2: import("three").Vector2, alpha: number) => import("three").Vector2;
            equals: (v: import("three").Vector2) => boolean;
            fromArray: (array: number[] | ArrayLike<number>, offset?: number | undefined) => import("three").Vector2;
            toArray: {
                (array?: number[] | undefined, offset?: number | undefined): number[];
                (array?: import("three").Vector2Tuple | undefined, offset?: 0 | undefined): import("three").Vector2Tuple;
                (array: ArrayLike<number>, offset?: number | undefined): ArrayLike<number>;
            };
            fromBufferAttribute: (attribute: import("three").BufferAttribute, index: number) => import("three").Vector2;
            rotateAround: (center: import("three").Vector2, angle: number) => import("three").Vector2;
            random: () => import("three").Vector2;
        };
        rotation: number;
        generateMipmaps: boolean;
        premultiplyAlpha: boolean;
        flipY: boolean;
        unpackAlignment: number;
        encoding: import("three").TextureEncoding;
        isRenderTargetTexture: boolean;
        needsPMREMUpdate: boolean;
        userData: any;
        version: number;
        needsUpdate: boolean;
        readonly isTexture: true;
        onUpdate: () => void;
        clone: () => Texture;
        copy: (source: Texture) => Texture;
        toJSON: (meta: any) => any;
        dispose: () => void;
        transformUv: (uv: import("three").Vector2) => import("three").Vector2;
        updateMatrix: () => void;
        addEventListener: <T extends string>(type: T, listener: import("three").EventListener<import("three").Event, T, Texture>) => void;
        hasEventListener: <T_1 extends string>(type: T_1, listener: import("three").EventListener<import("three").Event, T_1, Texture>) => boolean;
        removeEventListener: <T_2 extends string>(type: T_2, listener: import("three").EventListener<import("three").Event, T_2, Texture>) => void;
        dispatchEvent: (event: import("three").Event) => void;
    }>;
    load: () => void;
    applyProps: () => void;
    inject: typeof inject;
    ref: typeof ref;
    readonly Texture: typeof Texture;
    readonly TextureLoader: typeof TextureLoader;
    readonly Material: typeof Material;
    readonly ClampToEdgeWrapping: Wrapping;
    readonly handlePropCallback: (props: {
        [key: string]: any;
    }, prop: string, fn: () => void) => void;
    readonly handleVector2Prop: (props: {
        [key: string]: any;
    }, prop: string, obj: any, registerWatch?: boolean) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    offset: {
        type: null;
        required: false;
        default: () => number[];
    };
    repeat: {
        type: null;
        required: false;
        default: () => number[];
    };
    rotation: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    url: {
        type: StringConstructor;
        required: true;
    };
    wrapS: {
        type: null;
        required: false;
        default: Wrapping;
    };
    wrapT: {
        type: null;
        required: false;
        default: Wrapping;
    };
}>>, {
    rotation: number;
    offset: any;
    repeat: any;
    wrapS: any;
    wrapT: any;
}>;
export default _sfc_main;
