import { inject, reactive } from "vue";
import { BufferGeometry, Mesh, CircleGeometry } from "three";
import { copyGeo } from "../utils";
export interface Props {
    /**
     * Name of the geometry.
     */
    name?: string;
    /**
     * Radius of the circle.
     */
    radius?: number;
    /**
     * Number of segments (triangles).
     * Minimum value is `3`.
     */
    segments?: number;
    /**
     * Start angle for first segment.
     */
    thetaStart?: number;
    /**
     * The central angle, often called theta, of the circular sector.
     * The default is `2π`, which makes for a complete circle.
     */
    thetaLength?: number;
}
declare const _sfc_main: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    radius: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    segments: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    thetaStart: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    thetaLength: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}, {
    props: any;
    makeCircle: (radius: number | undefined, segments: number | undefined, thetaStart: number | undefined, thetaLength: number | undefined) => CircleGeometry;
    three: {
        id: number;
        uuid: string;
        name: string;
        type: string;
        index: {
            name: string;
            array: {
                [x: number]: number;
                readonly length: number;
            };
            itemSize: number;
            usage: import("three").Usage;
            updateRange: {
                offset: number;
                count: number;
            };
            version: number;
            normalized: boolean;
            count: number;
            needsUpdate: boolean;
            readonly isBufferAttribute: true;
            onUploadCallback: () => void;
            onUpload: (callback: () => void) => import("three").BufferAttribute;
            setUsage: (usage: import("three").Usage) => import("three").BufferAttribute;
            clone: () => import("three").BufferAttribute;
            copy: (source: import("three").BufferAttribute) => import("three").BufferAttribute;
            copyAt: (index1: number, attribute: import("three").BufferAttribute, index2: number) => import("three").BufferAttribute;
            copyArray: (array: ArrayLike<number>) => import("three").BufferAttribute;
            applyMatrix3: (m: import("three").Matrix3) => import("three").BufferAttribute;
            applyMatrix4: (m: import("three").Matrix4) => import("three").BufferAttribute;
            applyNormalMatrix: (m: import("three").Matrix3) => import("three").BufferAttribute;
            transformDirection: (m: import("three").Matrix4) => import("three").BufferAttribute;
            set: (value: ArrayLike<number> | ArrayBufferView, offset?: number | undefined) => import("three").BufferAttribute;
            getX: (index: number) => number;
            setX: (index: number, x: number) => import("three").BufferAttribute;
            getY: (index: number) => number;
            setY: (index: number, y: number) => import("three").BufferAttribute;
            getZ: (index: number) => number;
            setZ: (index: number, z: number) => import("three").BufferAttribute;
            getW: (index: number) => number;
            setW: (index: number, z: number) => import("three").BufferAttribute;
            setXY: (index: number, x: number, y: number) => import("three").BufferAttribute;
            setXYZ: (index: number, x: number, y: number, z: number) => import("three").BufferAttribute;
            setXYZW: (index: number, x: number, y: number, z: number, w: number) => import("three").BufferAttribute;
            toJSON: () => {
                itemSize: number;
                type: string;
                array: number[];
                normalized: boolean;
            };
        } | null;
        attributes: {
            [name: string]: import("three").BufferAttribute | import("three").InterleavedBufferAttribute;
        };
        morphAttributes: {
            [name: string]: (import("three").BufferAttribute | import("three").InterleavedBufferAttribute)[];
        };
        morphTargetsRelative: boolean;
        groups: {
            start: number;
            count: number;
            materialIndex?: number | undefined;
        }[];
        boundingBox: {
            min: {
                x: number;
                y: number;
                z: number;
                readonly isVector3: true;
                set: (x: number, y: number, z: number) => import("three").Vector3;
                setScalar: (scalar: number) => import("three").Vector3;
                setX: (x: number) => import("three").Vector3;
                setY: (y: number) => import("three").Vector3;
                setZ: (z: number) => import("three").Vector3;
                setComponent: (index: number, value: number) => import("three").Vector3;
                getComponent: (index: number) => number;
                clone: () => import("three").Vector3;
                copy: (v: import("three").Vector3) => import("three").Vector3;
                add: (v: import("three").Vector3) => import("three").Vector3;
                addScalar: (s: number) => import("three").Vector3;
                addScaledVector: (v: import("three").Vector3, s: number) => import("three").Vector3;
                addVectors: (a: import("three").Vector3, b: import("three").Vector3) => import("three").Vector3;
                sub: (a: import("three").Vector3) => import("three").Vector3;
                subScalar: (s: number) => import("three").Vector3;
                subVectors: (a: import("three").Vector3, b: import("three").Vector3) => import("three").Vector3;
                multiply: (v: import("three").Vector3) => import("three").Vector3;
                multiplyScalar: (s: number) => import("three").Vector3;
                multiplyVectors: (a: import("three").Vector3, b: import("three").Vector3) => import("three").Vector3;
                applyEuler: (euler: import("three").Euler) => import("three").Vector3;
                applyAxisAngle: (axis: import("three").Vector3, angle: number) => import("three").Vector3;
                applyMatrix3: (m: import("three").Matrix3) => import("three").Vector3;
                applyNormalMatrix: (m: import("three").Matrix3) => import("three").Vector3;
                applyMatrix4: (m: import("three").Matrix4) => import("three").Vector3;
                applyQuaternion: (q: import("three").Quaternion) => import("three").Vector3;
                project: (camera: import("three").Camera) => import("three").Vector3;
                unproject: (camera: import("three").Camera) => import("three").Vector3;
                transformDirection: (m: import("three").Matrix4) => import("three").Vector3;
                divide: (v: import("three").Vector3) => import("three").Vector3;
                divideScalar: (s: number) => import("three").Vector3;
                min: (v: import("three").Vector3) => import("three").Vector3;
                max: (v: import("three").Vector3) => import("three").Vector3;
                clamp: (min: import("three").Vector3, max: import("three").Vector3) => import("three").Vector3;
                clampScalar: (min: number, max: number) => import("three").Vector3;
                clampLength: (min: number, max: number) => import("three").Vector3;
                floor: () => import("three").Vector3;
                ceil: () => import("three").Vector3;
                round: () => import("three").Vector3;
                roundToZero: () => import("three").Vector3;
                negate: () => import("three").Vector3;
                dot: (v: import("three").Vector3) => number;
                lengthSq: () => number;
                length: () => number;
                lengthManhattan: () => number;
                manhattanLength: () => number;
                manhattanDistanceTo: (v: import("three").Vector3) => number;
                normalize: () => import("three").Vector3;
                setLength: (l: number) => import("three").Vector3;
                lerp: (v: import("three").Vector3, alpha: number) => import("three").Vector3;
                lerpVectors: (v1: import("three").Vector3, v2: import("three").Vector3, alpha: number) => import("three").Vector3;
                cross: (a: import("three").Vector3) => import("three").Vector3;
                crossVectors: (a: import("three").Vector3, b: import("three").Vector3) => import("three").Vector3;
                projectOnVector: (v: import("three").Vector3) => import("three").Vector3;
                projectOnPlane: (planeNormal: import("three").Vector3) => import("three").Vector3;
                reflect: (vector: import("three").Vector3) => import("three").Vector3;
                angleTo: (v: import("three").Vector3) => number;
                distanceTo: (v: import("three").Vector3) => number;
                distanceToSquared: (v: import("three").Vector3) => number;
                distanceToManhattan: (v: import("three").Vector3) => number;
                setFromSpherical: (s: import("three").Spherical) => import("three").Vector3;
                setFromSphericalCoords: (r: number, phi: number, theta: number) => import("three").Vector3;
                setFromCylindrical: (s: import("three").Cylindrical) => import("three").Vector3;
                setFromCylindricalCoords: (radius: number, theta: number, y: number) => import("three").Vector3;
                setFromMatrixPosition: (m: import("three").Matrix4) => import("three").Vector3;
                setFromMatrixScale: (m: import("three").Matrix4) => import("three").Vector3;
                setFromMatrixColumn: (matrix: import("three").Matrix4, index: number) => import("three").Vector3;
                setFromMatrix3Column: (matrix: import("three").Matrix3, index: number) => import("three").Vector3;
                setFromEuler: (e: import("three").Euler) => import("three").Vector3;
                equals: (v: import("three").Vector3) => boolean;
                fromArray: (array: number[] | ArrayLike<number>, offset?: number | undefined) => import("three").Vector3;
                toArray: {
                    (array?: number[] | undefined, offset?: number | undefined): number[];
                    (array?: import("three").Vector3Tuple | undefined, offset?: 0 | undefined): import("three").Vector3Tuple;
                    (array: ArrayLike<number>, offset?: number | undefined): ArrayLike<number>;
                };
                fromBufferAttribute: (attribute: import("three").BufferAttribute | import("three").InterleavedBufferAttribute, index: number) => import("three").Vector3;
                random: () => import("three").Vector3;
                randomDirection: () => import("three").Vector3;
            };
            max: {
                x: number;
                y: number;
                z: number;
                readonly isVector3: true;
                set: (x: number, y: number, z: number) => import("three").Vector3;
                setScalar: (scalar: number) => import("three").Vector3;
                setX: (x: number) => import("three").Vector3;
                setY: (y: number) => import("three").Vector3;
                setZ: (z: number) => import("three").Vector3;
                setComponent: (index: number, value: number) => import("three").Vector3;
                getComponent: (index: number) => number;
                clone: () => import("three").Vector3;
                copy: (v: import("three").Vector3) => import("three").Vector3;
                add: (v: import("three").Vector3) => import("three").Vector3;
                addScalar: (s: number) => import("three").Vector3;
                addScaledVector: (v: import("three").Vector3, s: number) => import("three").Vector3;
                addVectors: (a: import("three").Vector3, b: import("three").Vector3) => import("three").Vector3;
                sub: (a: import("three").Vector3) => import("three").Vector3;
                subScalar: (s: number) => import("three").Vector3;
                subVectors: (a: import("three").Vector3, b: import("three").Vector3) => import("three").Vector3;
                multiply: (v: import("three").Vector3) => import("three").Vector3;
                multiplyScalar: (s: number) => import("three").Vector3;
                multiplyVectors: (a: import("three").Vector3, b: import("three").Vector3) => import("three").Vector3;
                applyEuler: (euler: import("three").Euler) => import("three").Vector3;
                applyAxisAngle: (axis: import("three").Vector3, angle: number) => import("three").Vector3;
                applyMatrix3: (m: import("three").Matrix3) => import("three").Vector3;
                applyNormalMatrix: (m: import("three").Matrix3) => import("three").Vector3;
                applyMatrix4: (m: import("three").Matrix4) => import("three").Vector3;
                applyQuaternion: (q: import("three").Quaternion) => import("three").Vector3;
                project: (camera: import("three").Camera) => import("three").Vector3;
                unproject: (camera: import("three").Camera) => import("three").Vector3;
                transformDirection: (m: import("three").Matrix4) => import("three").Vector3;
                divide: (v: import("three").Vector3) => import("three").Vector3;
                divideScalar: (s: number) => import("three").Vector3;
                min: (v: import("three").Vector3) => import("three").Vector3;
                max: (v: import("three").Vector3) => import("three").Vector3;
                clamp: (min: import("three").Vector3, max: import("three").Vector3) => import("three").Vector3;
                clampScalar: (min: number, max: number) => import("three").Vector3;
                clampLength: (min: number, max: number) => import("three").Vector3;
                floor: () => import("three").Vector3;
                ceil: () => import("three").Vector3;
                round: () => import("three").Vector3;
                roundToZero: () => import("three").Vector3;
                negate: () => import("three").Vector3;
                dot: (v: import("three").Vector3) => number;
                lengthSq: () => number;
                length: () => number;
                lengthManhattan: () => number;
                manhattanLength: () => number;
                manhattanDistanceTo: (v: import("three").Vector3) => number;
                normalize: () => import("three").Vector3;
                setLength: (l: number) => import("three").Vector3;
                lerp: (v: import("three").Vector3, alpha: number) => import("three").Vector3;
                lerpVectors: (v1: import("three").Vector3, v2: import("three").Vector3, alpha: number) => import("three").Vector3;
                cross: (a: import("three").Vector3) => import("three").Vector3;
                crossVectors: (a: import("three").Vector3, b: import("three").Vector3) => import("three").Vector3;
                projectOnVector: (v: import("three").Vector3) => import("three").Vector3;
                projectOnPlane: (planeNormal: import("three").Vector3) => import("three").Vector3;
                reflect: (vector: import("three").Vector3) => import("three").Vector3;
                angleTo: (v: import("three").Vector3) => number;
                distanceTo: (v: import("three").Vector3) => number;
                distanceToSquared: (v: import("three").Vector3) => number;
                distanceToManhattan: (v: import("three").Vector3) => number;
                setFromSpherical: (s: import("three").Spherical) => import("three").Vector3;
                setFromSphericalCoords: (r: number, phi: number, theta: number) => import("three").Vector3;
                setFromCylindrical: (s: import("three").Cylindrical) => import("three").Vector3;
                setFromCylindricalCoords: (radius: number, theta: number, y: number) => import("three").Vector3;
                setFromMatrixPosition: (m: import("three").Matrix4) => import("three").Vector3;
                setFromMatrixScale: (m: import("three").Matrix4) => import("three").Vector3;
                setFromMatrixColumn: (matrix: import("three").Matrix4, index: number) => import("three").Vector3;
                setFromMatrix3Column: (matrix: import("three").Matrix3, index: number) => import("three").Vector3;
                setFromEuler: (e: import("three").Euler) => import("three").Vector3;
                equals: (v: import("three").Vector3) => boolean;
                fromArray: (array: number[] | ArrayLike<number>, offset?: number | undefined) => import("three").Vector3;
                toArray: {
                    (array?: number[] | undefined, offset?: number | undefined): number[];
                    (array?: import("three").Vector3Tuple | undefined, offset?: 0 | undefined): import("three").Vector3Tuple;
                    (array: ArrayLike<number>, offset?: number | undefined): ArrayLike<number>;
                };
                fromBufferAttribute: (attribute: import("three").BufferAttribute | import("three").InterleavedBufferAttribute, index: number) => import("three").Vector3;
                random: () => import("three").Vector3;
                randomDirection: () => import("three").Vector3;
            };
            readonly isBox3: true;
            set: (min: import("three").Vector3, max: import("three").Vector3) => import("three").Box3;
            setFromArray: (array: ArrayLike<number>) => import("three").Box3;
            setFromBufferAttribute: (bufferAttribute: import("three").BufferAttribute) => import("three").Box3;
            setFromPoints: (points: import("three").Vector3[]) => import("three").Box3;
            setFromCenterAndSize: (center: import("three").Vector3, size: import("three").Vector3) => import("three").Box3;
            setFromObject: (object: import("three").Object3D<import("three").Event>, precise?: boolean | undefined) => import("three").Box3;
            clone: () => import("three").Box3;
            copy: (box: import("three").Box3) => import("three").Box3;
            makeEmpty: () => import("three").Box3;
            isEmpty: () => boolean;
            getCenter: (target: import("three").Vector3) => import("three").Vector3;
            getSize: (target: import("three").Vector3) => import("three").Vector3;
            expandByPoint: (point: import("three").Vector3) => import("three").Box3;
            expandByVector: (vector: import("three").Vector3) => import("three").Box3;
            expandByScalar: (scalar: number) => import("three").Box3;
            expandByObject: (object: import("three").Object3D<import("three").Event>, precise?: boolean | undefined) => import("three").Box3;
            containsPoint: (point: import("three").Vector3) => boolean;
            containsBox: (box: import("three").Box3) => boolean;
            getParameter: (point: import("three").Vector3, target: import("three").Vector3) => import("three").Vector3;
            intersectsBox: (box: import("three").Box3) => boolean;
            intersectsSphere: (sphere: import("three").Sphere) => boolean;
            intersectsPlane: (plane: import("three").Plane) => boolean;
            intersectsTriangle: (triangle: import("three").Triangle) => boolean;
            clampPoint: (point: import("three").Vector3, target: import("three").Vector3) => import("three").Vector3;
            distanceToPoint: (point: import("three").Vector3) => number;
            getBoundingSphere: (target: import("three").Sphere) => import("three").Sphere;
            intersect: (box: import("three").Box3) => import("three").Box3;
            union: (box: import("three").Box3) => import("three").Box3;
            applyMatrix4: (matrix: import("three").Matrix4) => import("three").Box3;
            translate: (offset: import("three").Vector3) => import("three").Box3;
            equals: (box: import("three").Box3) => boolean;
            empty: () => any;
            isIntersectionBox: (b: any) => any;
            isIntersectionSphere: (s: any) => any;
        } | null;
        boundingSphere: {
            center: {
                x: number;
                y: number;
                z: number;
                readonly isVector3: true;
                set: (x: number, y: number, z: number) => import("three").Vector3;
                setScalar: (scalar: number) => import("three").Vector3;
                setX: (x: number) => import("three").Vector3;
                setY: (y: number) => import("three").Vector3;
                setZ: (z: number) => import("three").Vector3;
                setComponent: (index: number, value: number) => import("three").Vector3;
                getComponent: (index: number) => number;
                clone: () => import("three").Vector3;
                copy: (v: import("three").Vector3) => import("three").Vector3;
                add: (v: import("three").Vector3) => import("three").Vector3;
                addScalar: (s: number) => import("three").Vector3;
                addScaledVector: (v: import("three").Vector3, s: number) => import("three").Vector3;
                addVectors: (a: import("three").Vector3, b: import("three").Vector3) => import("three").Vector3;
                sub: (a: import("three").Vector3) => import("three").Vector3;
                subScalar: (s: number) => import("three").Vector3;
                subVectors: (a: import("three").Vector3, b: import("three").Vector3) => import("three").Vector3;
                multiply: (v: import("three").Vector3) => import("three").Vector3;
                multiplyScalar: (s: number) => import("three").Vector3;
                multiplyVectors: (a: import("three").Vector3, b: import("three").Vector3) => import("three").Vector3;
                applyEuler: (euler: import("three").Euler) => import("three").Vector3;
                applyAxisAngle: (axis: import("three").Vector3, angle: number) => import("three").Vector3;
                applyMatrix3: (m: import("three").Matrix3) => import("three").Vector3;
                applyNormalMatrix: (m: import("three").Matrix3) => import("three").Vector3;
                applyMatrix4: (m: import("three").Matrix4) => import("three").Vector3;
                applyQuaternion: (q: import("three").Quaternion) => import("three").Vector3;
                project: (camera: import("three").Camera) => import("three").Vector3;
                unproject: (camera: import("three").Camera) => import("three").Vector3;
                transformDirection: (m: import("three").Matrix4) => import("three").Vector3;
                divide: (v: import("three").Vector3) => import("three").Vector3;
                divideScalar: (s: number) => import("three").Vector3;
                min: (v: import("three").Vector3) => import("three").Vector3;
                max: (v: import("three").Vector3) => import("three").Vector3;
                clamp: (min: import("three").Vector3, max: import("three").Vector3) => import("three").Vector3;
                clampScalar: (min: number, max: number) => import("three").Vector3;
                clampLength: (min: number, max: number) => import("three").Vector3;
                floor: () => import("three").Vector3;
                ceil: () => import("three").Vector3;
                round: () => import("three").Vector3;
                roundToZero: () => import("three").Vector3;
                negate: () => import("three").Vector3;
                dot: (v: import("three").Vector3) => number;
                lengthSq: () => number;
                length: () => number;
                lengthManhattan: () => number;
                manhattanLength: () => number;
                manhattanDistanceTo: (v: import("three").Vector3) => number;
                normalize: () => import("three").Vector3;
                setLength: (l: number) => import("three").Vector3;
                lerp: (v: import("three").Vector3, alpha: number) => import("three").Vector3;
                lerpVectors: (v1: import("three").Vector3, v2: import("three").Vector3, alpha: number) => import("three").Vector3;
                cross: (a: import("three").Vector3) => import("three").Vector3;
                crossVectors: (a: import("three").Vector3, b: import("three").Vector3) => import("three").Vector3;
                projectOnVector: (v: import("three").Vector3) => import("three").Vector3;
                projectOnPlane: (planeNormal: import("three").Vector3) => import("three").Vector3;
                reflect: (vector: import("three").Vector3) => import("three").Vector3;
                angleTo: (v: import("three").Vector3) => number;
                distanceTo: (v: import("three").Vector3) => number;
                distanceToSquared: (v: import("three").Vector3) => number;
                distanceToManhattan: (v: import("three").Vector3) => number;
                setFromSpherical: (s: import("three").Spherical) => import("three").Vector3;
                setFromSphericalCoords: (r: number, phi: number, theta: number) => import("three").Vector3;
                setFromCylindrical: (s: import("three").Cylindrical) => import("three").Vector3;
                setFromCylindricalCoords: (radius: number, theta: number, y: number) => import("three").Vector3;
                setFromMatrixPosition: (m: import("three").Matrix4) => import("three").Vector3;
                setFromMatrixScale: (m: import("three").Matrix4) => import("three").Vector3;
                setFromMatrixColumn: (matrix: import("three").Matrix4, index: number) => import("three").Vector3;
                setFromMatrix3Column: (matrix: import("three").Matrix3, index: number) => import("three").Vector3;
                setFromEuler: (e: import("three").Euler) => import("three").Vector3;
                equals: (v: import("three").Vector3) => boolean;
                fromArray: (array: number[] | ArrayLike<number>, offset?: number | undefined) => import("three").Vector3;
                toArray: {
                    (array?: number[] | undefined, offset?: number | undefined): number[];
                    (array?: import("three").Vector3Tuple | undefined, offset?: 0 | undefined): import("three").Vector3Tuple;
                    (array: ArrayLike<number>, offset?: number | undefined): ArrayLike<number>;
                };
                fromBufferAttribute: (attribute: import("three").BufferAttribute | import("three").InterleavedBufferAttribute, index: number) => import("three").Vector3;
                random: () => import("three").Vector3;
                randomDirection: () => import("three").Vector3;
            };
            radius: number;
            set: (center: import("three").Vector3, radius: number) => import("three").Sphere;
            setFromPoints: (points: import("three").Vector3[], optionalCenter?: import("three").Vector3 | undefined) => import("three").Sphere;
            clone: () => import("three").Sphere;
            copy: (sphere: import("three").Sphere) => import("three").Sphere;
            expandByPoint: (point: import("three").Vector3) => import("three").Sphere;
            isEmpty: () => boolean;
            makeEmpty: () => import("three").Sphere;
            containsPoint: (point: import("three").Vector3) => boolean;
            distanceToPoint: (point: import("three").Vector3) => number;
            intersectsSphere: (sphere: import("three").Sphere) => boolean;
            intersectsBox: (box: import("three").Box3) => boolean;
            intersectsPlane: (plane: import("three").Plane) => boolean;
            clampPoint: (point: import("three").Vector3, target: import("three").Vector3) => import("three").Vector3;
            getBoundingBox: (target: import("three").Box3) => import("three").Box3;
            applyMatrix4: (matrix: import("three").Matrix4) => import("three").Sphere;
            translate: (offset: import("three").Vector3) => import("three").Sphere;
            equals: (sphere: import("three").Sphere) => boolean;
            union: (sphere: import("three").Sphere) => import("three").Sphere;
            empty: () => any;
        } | null;
        drawRange: {
            start: number;
            count: number;
        };
        userData: {
            [key: string]: any;
        };
        readonly isBufferGeometry: true;
        getIndex: () => import("three").BufferAttribute | null;
        setIndex: (index: number[] | import("three").BufferAttribute | null) => BufferGeometry;
        setAttribute: (name: import("three").BuiltinShaderAttributeName | (string & {}), attribute: import("three").BufferAttribute | import("three").InterleavedBufferAttribute) => BufferGeometry;
        getAttribute: (name: import("three").BuiltinShaderAttributeName | (string & {})) => import("three").BufferAttribute | import("three").InterleavedBufferAttribute;
        deleteAttribute: (name: import("three").BuiltinShaderAttributeName | (string & {})) => BufferGeometry;
        hasAttribute: (name: import("three").BuiltinShaderAttributeName | (string & {})) => boolean;
        addGroup: (start: number, count: number, materialIndex?: number | undefined) => void;
        clearGroups: () => void;
        setDrawRange: (start: number, count: number) => void;
        applyMatrix4: (matrix: import("three").Matrix4) => BufferGeometry;
        applyQuaternion: (q: import("three").Quaternion) => BufferGeometry;
        rotateX: (angle: number) => BufferGeometry;
        rotateY: (angle: number) => BufferGeometry;
        rotateZ: (angle: number) => BufferGeometry;
        translate: (x: number, y: number, z: number) => BufferGeometry;
        scale: (x: number, y: number, z: number) => BufferGeometry;
        lookAt: (v: import("three").Vector3) => void;
        center: () => BufferGeometry;
        setFromPoints: (points: import("three").Vector3[] | import("three").Vector2[]) => BufferGeometry;
        computeBoundingBox: () => void;
        computeBoundingSphere: () => void;
        computeTangents: () => void;
        computeVertexNormals: () => void;
        normalizeNormals: () => void;
        toNonIndexed: () => BufferGeometry;
        toJSON: () => any;
        clone: () => BufferGeometry;
        copy: (source: BufferGeometry) => BufferGeometry;
        dispose: () => void;
        drawcalls: any;
        offsets: any;
        addIndex: (index: any) => void;
        addDrawCall: (start: any, count: any, indexOffset?: any) => void;
        clearDrawCalls: () => void;
        addAttribute: {
            (name: string, attribute: import("three").BufferAttribute | import("three").InterleavedBufferAttribute): BufferGeometry;
            (name: any, array: any, itemSize: any): any;
        };
        removeAttribute: (name: string) => BufferGeometry;
        addEventListener: <T extends string>(type: T, listener: import("three").EventListener<import("three").Event, T, BufferGeometry>) => void;
        hasEventListener: <T_1 extends string>(type: T_1, listener: import("three").EventListener<import("three").Event, T_1, BufferGeometry>) => boolean;
        removeEventListener: <T_2 extends string>(type: T_2, listener: import("three").EventListener<import("three").Event, T_2, BufferGeometry>) => void;
        dispatchEvent: (event: import("three").Event) => void;
    };
    mesh: Mesh<BufferGeometry, import("three").Material | import("three").Material[]> | null;
    addGeometry: (g: BufferGeometry) => void;
    redoGeometry: () => void;
    inject: typeof inject;
    onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
    reactive: typeof reactive;
    readonly BufferGeometry: typeof BufferGeometry;
    readonly Mesh: typeof Mesh;
    readonly CircleGeometry: typeof CircleGeometry;
    readonly handlePropCallback: (props: {
        [key: string]: any;
    }, prop: string, fn: () => void) => void;
    readonly copyGeo: typeof copyGeo;
    readonly EventBus: {
        geometryChanged: import("ts-event-bus").Slot<BufferGeometry, void>;
        object3DChanged: import("ts-event-bus").Slot<import("three").Object3D<import("three").Event>, void>;
        object3DTranslated: import("ts-event-bus").Slot<import("three").Object3D<import("three").Event>, void>;
        sayHello: import("ts-event-bus").Slot<string, void>;
        getTime: import("ts-event-bus").Slot<null, string>;
        /**
         * Name of the geometry.
         */
        multiply: import("ts-event-bus").Slot<{
            a: number;
            b: number;
        }, number>;
        ping: import("ts-event-bus").Slot<void, void>;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    radius: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    segments: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    thetaStart: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    thetaLength: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
}>>, {
    name: string;
    radius: number;
    segments: number;
    thetaStart: number;
    thetaLength: number;
}>;
export default _sfc_main;
