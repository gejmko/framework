export class Pixel {
    static calculatePixelRatio(context: any): any {
        const backingStores = [
            'webkitBackingStorePixelRatio',
            'mozBackingStorePixelRatio',
            'msBackingStorePixelRatio',
            'oBackingStorePixelRatio',
            'backingStorePixelRatio'
        ];

        const deviceRatio = window.devicePixelRatio;

        const backingRatio = backingStores.reduce((prev, curr) => {
            return (context.hasOwnProperty(curr) ? context[curr] : 1);
        });

        // @ts-ignore
        return deviceRatio / backingRatio;
    }
}
